# Shared Custom Color Integration Plan

## Goal

Add a minimal Home Assistant custom integration that provides a real shared store for `skylight-calendar-card` custom event colors across:

- dashboards
- browsers/devices
- user accounts

without storing shared state in:

- Lovelace dashboard config
- browser `localStorage`
- helpers
- files
- calendar events

## Scope

This plan is intentionally minimal. It focuses only on backend storage and transport for custom event colors and recent colors.

Out of scope for v1:

- color rules derived from automation
- per-user color overrides
- audit/history UI
- conflict-resolution UI
- admin config panels
- generic storage for unrelated card preferences

## Recommended Architecture

Use a lightweight custom integration that stores JSON in Home Assistant backend storage via `Store`.

Recommended integration domain:

- `skylight_calendar_card`

Recommended storage file:

- `.storage/skylight_calendar_card`

Recommended frontend transport:

- WebSocket commands

This is preferable to service calls for the card because:

- reads are cleaner
- responses are immediate/structured
- the card already uses HA websocket patterns
- fewer round trips than script/service-based approaches

## Data Model

Use one top-level stored object with versioning.

Example:

```json
{
  "version": 1,
  "stores": {
    "global": {
      "colors": {
        "series|calendar.family|abc123": "#3B82F6",
        "event|calendar.family|uid:xyz789": "#EF4444"
      },
      "recent": [
        "#3B82F6",
        "#EF4444",
        "#22C55E"
      ],
      "updated_at": "2026-04-23T22:00:00Z"
    },
    "family-dashboard": {
      "colors": {
        "series|calendar.family|abc123": "#3B82F6"
      },
      "recent": [
        "#3B82F6"
      ],
      "updated_at": "2026-04-23T22:00:00Z"
    }
  }
}
```

## Storage Scope

Support named stores, not just one global store.

Recommended card config:

```yaml
type: custom:skylight-calendar-card
shared_custom_color_store: family-dashboard
```

Behavior:

- if omitted, default to `global`
- if provided, multiple dashboards/cards can point to the same named store
- different households/use-cases can keep separate stores

This is more flexible than hard-coding dashboard scope into the backend.

## Event Key Format

Reuse the existing card keys to minimize frontend changes.

Recommended keys:

- recurring series:
  - `series|<entity_id>|<series_id>`
- one-off event:
  - `event|<entity_id>|uid:<uid>`
- fallback one-off event:
  - `event|<entity_id>|<derived_identity>`

Do not change the existing key strategy unless there is a migration need later.

## Backend API

### WebSocket Commands

Recommended commands:

1. `skylight_calendar_card/get_store`
2. `skylight_calendar_card/set_color`
3. `skylight_calendar_card/clear_color`
4. `skylight_calendar_card/set_recent_colors`
5. `skylight_calendar_card/replace_store`

Minimal required fields:

#### `skylight_calendar_card/get_store`

Request:

```json
{
  "type": "skylight_calendar_card/get_store",
  "store": "family-dashboard"
}
```

Response:

```json
{
  "store": "family-dashboard",
  "colors": {
    "series|calendar.family|abc123": "#3B82F6"
  },
  "recent": [
    "#3B82F6"
  ],
  "updated_at": "2026-04-23T22:00:00Z"
}
```

#### `skylight_calendar_card/set_color`

Request:

```json
{
  "type": "skylight_calendar_card/set_color",
  "store": "family-dashboard",
  "key": "series|calendar.family|abc123",
  "color": "#3B82F6"
}
```

Response:

```json
{
  "ok": true,
  "store": "family-dashboard",
  "updated_at": "2026-04-23T22:00:00Z"
}
```

#### `skylight_calendar_card/clear_color`

Request:

```json
{
  "type": "skylight_calendar_card/clear_color",
  "store": "family-dashboard",
  "key": "series|calendar.family|abc123"
}
```

#### `skylight_calendar_card/set_recent_colors`

Request:

```json
{
  "type": "skylight_calendar_card/set_recent_colors",
  "store": "family-dashboard",
  "recent": ["#3B82F6", "#EF4444"]
}
```

#### `skylight_calendar_card/replace_store`

Optional but useful for migration/import/export.

Request:

```json
{
  "type": "skylight_calendar_card/replace_store",
  "store": "family-dashboard",
  "colors": {
    "series|calendar.family|abc123": "#3B82F6"
  },
  "recent": ["#3B82F6"]
}
```

## Validation Rules

Backend should validate:

- `store` is a non-empty string with a bounded length
- `key` is a non-empty string with a bounded length
- `color` matches `^#[0-9A-Fa-f]{6}$`
- `recent` is a list of valid hex colors
- `colors` is a dict of `string -> valid hex color`

Recommended bounds:

- store length: 1-128
- key length: 1-256
- recent color count: cap at 12
- total colors per store: cap high enough for normal use, e.g. 2000

## Permissions

Recommended v1 rule:

- any authenticated Home Assistant user may read/write the store

Reason:

- this feature is user-facing card metadata, not an admin-only system setting
- non-admin family tablet users should be able to change colors

If stricter control is needed later, add optional admin-only write mode.

## Backend Write Strategy

Use read-modify-write with an in-memory lock.

Recommended flow:

1. load storage
2. acquire integration lock
3. mutate only the requested store
4. update `updated_at`
5. save via `Store.async_save`
6. release lock

This reduces corruption risk when multiple clients write at once.

## Frontend Card Changes

### New Config Option

Add:

```yaml
shared_custom_color_store: family-dashboard
```

Behavior:

- if configured and backend integration is available, backend store becomes source of truth
- otherwise fall back to existing dashboard-config/local behavior

### Read Priority

Recommended resolution order:

1. pending in-memory overlay
2. backend integration store
3. dashboard-shared config
4. local storage

This preserves current behavior as fallback.

### Write Priority

Recommended write path:

1. update pending overlay immediately
2. render immediately
3. queue backend websocket write
4. if backend unavailable, fall back to existing dashboard/local path

### Initial Load

On card startup:

1. check whether `shared_custom_color_store` is configured
2. detect whether backend integration websocket command exists/works
3. fetch store contents
4. populate in-memory backend cache
5. render

## Frontend Caching

Maintain frontend memory caches:

- `_integrationSharedCustomEventColors`
- `_integrationSharedRecentCustomColors`
- `_pendingSharedCustomEventColors`
- `_pendingSharedRecentCustomColors`

This allows:

- instant UI updates
- delayed backend write
- background refresh

## Sync Model

Recommended v1:

- pull on startup
- optimistic write on local change
- no live push subscriptions yet

This is sufficient for a minimal integration.

Optional v2:

- websocket event broadcast when a store changes
- cards on other dashboards/devices update live without refresh

## Migration Plan

When backend storage is enabled for a card:

1. if backend store is empty
2. and dashboard-shared or local colors exist
3. offer or silently promote those colors into backend store

Recommended v1 behavior:

- silent one-time promotion from existing shared/local state into backend store
- backend store wins after first successful migration

## Failure Handling

If backend read fails:

- log warning
- use current fallback path

If backend write fails:

- keep pending overlay locally
- retain local persistence so current device does not lose the change
- optionally surface a non-blocking warning

Do not block UI on backend write completion.

## Import / Export

Not required for v1, but `replace_store` makes later import/export easy.

Possible future UI actions:

- export JSON
- import JSON
- copy one named store into another

## File Layout

Suggested custom integration structure:

```text
custom_components/
  skylight_calendar_card/
    __init__.py
    manifest.json
    const.py
    storage.py
    websocket_api.py
```

Minimal responsibilities:

- `manifest.json`
  - integration metadata
- `const.py`
  - domain, storage version, store name defaults
- `storage.py`
  - async load/save helpers and mutation methods
- `websocket_api.py`
  - websocket command registration and validation
- `__init__.py`
  - setup and teardown

## Manifest Considerations

Minimal `manifest.json`:

```json
{
  "domain": "skylight_calendar_card",
  "name": "Skylight Calendar Card",
  "version": "0.1.0",
  "documentation": "https://github.com/loopy321/skylight-calendar-card",
  "requirements": [],
  "codeowners": ["@loopy321"],
  "iot_class": "local_polling"
}
```

## Storage Implementation Notes

Use Home Assistant storage helper:

- `homeassistant.helpers.storage.Store`

Recommended storage constants:

- storage key: `skylight_calendar_card`
- version: `1`

Store shape should always be normalized on load:

- ensure `version`
- ensure `stores`
- ensure each store has `colors`, `recent`, `updated_at`

## Concurrency Considerations

Expected risk:

- two dashboards update the same store at nearly the same time

Minimal acceptable behavior:

- last write wins

Better behavior later:

- include revision counter / updated timestamp
- reject stale writes or merge if possible

For v1, last-write-wins is acceptable.

## Security Considerations

Do not allow arbitrary file access or shell access.

Do not store:

- access tokens
- user IDs
- dashboard internals

Only store:

- store name
- event key
- hex color
- recent color list
- timestamps/version metadata

## Compatibility Considerations

This backend should be independent of calendar provider:

- local calendar
- CalDAV
- Google
- iCloud
- combined events

All provider-specific logic remains in the card’s key-generation layer.

## Testing Plan

### Backend Tests

Verify:

1. empty store load initializes correctly
2. `set_color` writes one mapping
3. `clear_color` removes one mapping
4. `set_recent_colors` normalizes and caps recents
5. invalid colors/keys/stores are rejected
6. multiple stores remain isolated

### Frontend Manual Tests

Verify:

1. desktop change appears after reload on another dashboard
2. tablet non-admin user can change colors if authenticated
3. recurring series retains shared color
4. combined event source selection still works
5. recent colors sync through backend store
6. backend unavailable falls back gracefully

## Rollout Plan

### Phase 1

Implement backend integration only.

### Phase 2

Teach the card to use backend store when `shared_custom_color_store` is configured.

### Phase 3

Add optional migration from dashboard/local storage.

### Phase 4

Optionally add live push update subscriptions or import/export.

## Recommendation

If this feature is expected to remain part of the card long-term, this backend integration is the cleanest and most maintainable solution.

The minimal viable version should:

- use `Store`
- expose websocket read/write commands
- support named stores
- keep last-write-wins semantics
- preserve current dashboard/local behavior as fallback

## Implementation Checklist

Use this as the minimal build order.

### Backend Integration

1. Create `custom_components/skylight_calendar_card/manifest.json`
2. Create `custom_components/skylight_calendar_card/__init__.py`
3. Create `custom_components/skylight_calendar_card/const.py`
4. Create `custom_components/skylight_calendar_card/storage.py`
5. Create `custom_components/skylight_calendar_card/websocket_api.py`
6. Register websocket commands during integration setup
7. Add a storage manager class wrapping `Store`
8. Normalize loaded storage shape on every read
9. Add validation helpers for store names, keys, colors, and recent arrays
10. Add an async lock around read-modify-write mutations
11. Implement `get_store`
12. Implement `set_color`
13. Implement `clear_color`
14. Implement `set_recent_colors`
15. Optionally implement `replace_store`
16. Add error responses with clear messages for invalid input
17. Verify integration loads without config flow

### Frontend Card

1. Add a new config option:
   `shared_custom_color_store`
2. Detect whether the backend integration is available
3. Add websocket helpers for:
   - get store
   - set color
   - clear color
   - set recent colors
4. Add in-memory backend caches:
   - committed backend colors
   - committed backend recents
   - pending overlay colors
   - pending overlay recents
5. Update color resolution order to prefer:
   - pending overlay
   - backend cache
   - dashboard-shared config
   - local storage
6. Update recent-color resolution order using the same pattern
7. Keep current modal UX unchanged
8. On apply/clear/remove-recent:
   - update overlay immediately
   - render immediately
   - queue backend write
9. On successful backend flush:
   - move pending state into committed backend cache
   - clear the overlay if no newer changes are pending
10. On failed backend flush:
   - keep local fallback
   - keep UI responsive
   - optionally log or surface a warning
11. On startup:
   - load backend store if configured
   - migrate existing dashboard/local colors if backend store is empty
12. Preserve current behavior when no integration is configured or available

### Testing

1. Verify backend store persists across HA restart
2. Verify two dashboards using the same store share colors
3. Verify two dashboards using different store names remain isolated
4. Verify recurring series still share one color key
5. Verify combined events still resolve through source-event choice
6. Verify non-admin users can write if backend policy allows it
7. Verify backend unavailability falls back cleanly
8. Verify rapid color changes coalesce without UI lag

## Future Codex Handoff

This section captures the current state of the card so a future Codex session can pick up the work without rediscovering the existing custom-color architecture.

### Current Repo State

- Main card implementation is in `skylight-calendar-card.js`
- There is no backend integration yet
- Shared custom colors currently use Lovelace dashboard config as the shared store
- Local storage remains as fallback
- Custom color UI, recurring support, recent colors, and performance overlays are already implemented in the card

### Current Card Behavior

The card currently supports:

- local-only custom event colors
- shared dashboard-scoped custom colors across devices/users with dashboard write access
- recurring series color reuse
- combined-event source selection before coloring
- recent colors
- compact preset swatches
- custom wheel picker plus hex input
- optimistic in-memory overlay so local UI updates feel immediate

What it does not support:

- cross-dashboard shared color storage
- true backend/global shared store

### Important Existing Concepts In The Card

The card already has these logical layers:

- event key generation
- style resolution
- modal UI for choosing colors
- pending overlay state for immediate rendering
- debounced shared persistence queue
- local fallback persistence

Do not re-implement those from scratch when adding the integration. Replace the storage source behind them.

### Important Existing Functions

In `skylight-calendar-card.js`, the future session should search for these functions and fields first:

- `getCustomColorSeriesKey`
- `getCustomColorEventKey`
- `getStoredCustomColor`
- `getRecentCustomColors`
- `setStoredCustomColor`
- `clearStoredCustomColor`
- `saveRecentCustomColors`
- `showCustomColorModal`
- `applySharedPreferenceStateToConfig`
- `getEffectiveSharedCustomEventColors`
- `getEffectiveSharedRecentCustomColors`
- `getOptimisticSharedPreferenceState`
- `queueSharedPreferenceSave`
- `flushQueuedSharedPreferenceSave`
- `_pendingSharedCustomEventColors`
- `_pendingSharedRecentCustomColors`
- `_queuedSharedPreferenceState`

These are the main hooks where backend integration support should be inserted.

### Current Read / Write Model

Current read path:

1. pending shared overlay
2. dashboard-shared config
3. local storage

Current write path:

1. update local in-memory state
2. update overlay immediately
3. render immediately
4. persist local fallback immediately
5. queue debounced Lovelace config save

Backend integration work should replace the dashboard-shared layer, not the local overlay behavior.

### Recommended Refactor Strategy

Do not remove the current dashboard/local code first.

Safer approach:

1. add backend integration read/write path behind a config gate
2. keep current dashboard/local path as fallback
3. once backend path is stable, simplify only if needed

This minimizes regression risk.

### Migration Expectations

When backend storage is first enabled for a card/store:

- if backend store is empty, promote existing colors into it
- prefer dashboard-shared colors over local-only colors
- preserve recent colors if possible
- only migrate once per store unless explicitly requested again

### Suggested Frontend State Shape

Future backend support will likely need these additional fields:

- `_integrationStoreName`
- `_integrationSharedCustomEventColors`
- `_integrationSharedRecentCustomColors`
- `_integrationLoadInFlight`
- `_integrationWriteInFlight`
- `_integrationAvailable`

Keep naming consistent with existing card state.

### Failure Model To Preserve

The current card is intentionally forgiving:

- UI should never block on slow shared persistence
- local feedback should remain instant
- fallback storage should preserve user work if shared persistence fails

Do not regress this behavior when adding backend storage.

### Edge Cases That Already Matter

Any future session should explicitly test:

- recurring events with `recurring_event_id`
- recurring events falling back to `uid`
- single events missing expected fields
- combined events across multiple calendars
- delete flows clearing matching custom colors
- recent-color removal inside the modal
- non-admin users on tablet devices

### Deployment / Verification Notes

Recent development in this repo has also involved live deployment to:

- `H:\\www\\community\\skylight-calendar-card\\skylight-calendar-card.js`
- `H:\\www\\community\\skylight-calendar-card\\skylight-calendar-card.js.gz`

Common verification steps used in this repo:

1. syntax check with Node:
   `C:\\Program Files\\nodejs\\node.exe --check skylight-calendar-card.js`
2. copy the `.js` to the live HACS folder
3. regenerate `.js.gz`
4. reload Home Assistant frontend

### Git / Author Note

This repo previously had an incorrect local git identity. The repo-local git config should now be:

- `user.name = loopy321`
- `user.email = loopy321@users.noreply.github.com`

Future sessions should verify local git identity before committing.
