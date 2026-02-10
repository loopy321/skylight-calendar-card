# Skylight Calendar Card for Home Assistant

A beautiful, customizable calendar card for Home Assistant that mimics the design and functionality of the popular Skylight Calendar. Perfect for families to organize schedules, events, and activities.

<img width="1892" height="892" alt="image" src="https://github.com/user-attachments/assets/4ed9f271-4ac4-45b4-86d7-0afc2246d6db" />


## Features

- 🎨 **Beautiful Design**: Clean, modern interface inspired by Skylight Calendar
- 📅 **Multiple Views**: Month view, compact week view, and schedule week view
- 📆 **Rolling Days Mode**: Show today + N days for flexible date ranges
- 🎯 **Multiple Calendars**: Support for multiple calendar entities with custom colors
- 👁️ **Calendar Filtering**: Click calendar badges to show/hide specific calendars
- 🖱️ **Interactive**: Click on events to view full details in a popup
- ➕ **Event Management**: Create, edit, and delete events directly from the calendar
- 🔁 **Recurring Events**: Smart handling of recurring event modifications
- 📱 **Responsive**: Works great on desktop, tablet, and mobile
- 🔄 **Real-time Updates**: Automatically syncs with your Home Assistant calendars
- 🎨 **Customizable**: Configure colors, starting day of week, visible days, and more
- 🌈 **Custom Header Colors**: Personalize the banner with solid colors or gradients
- ⏰ **Flexible Schedule**: Customize time range for schedule view (e.g., 8am-9pm)
- 📏 **Height Control**: Adjust vertical scale or enable compact mode to fit screen
- 🎛️ **Default View**: Set which view loads by default (month/week/schedule)
- 📏 **Compact Header**: Optional single-row header layout for space savings
- **Multiple Language Support**: Supports English, French, and German, with an extensible framework for adding more languages
- **Locale Support**: Supports various locales for setting days of week, month names, etc

## Installation

### HACS (Recommended)

1. Make sure [HACS](https://hacs.xyz/) is installed
2. In HACS, go to "Frontend"
3. Click the "+ Explore & Download Repositories" button
4. Search for "Skylight Calendar Card"
5. Click "Download"
6. Restart Home Assistant

### Manual Installation

1. Download `skylight-calendar-card.js` from the latest release
2. Copy it to `<config>/www/skylight-calendar-card.js`
3. Add the following to your Lovelace resources:
   ```yaml
   resources:
     - url: /local/skylight-calendar-card.js
       type: module
   ```
4. Restart Home Assistant

## Usage

### Basic Configuration

Add the card to your Lovelace dashboard:

```yaml
type: custom:skylight-calendar-card
title: Family Calendar
entities:
  - calendar.personal
  - calendar.work
  - calendar.family
```

### Advanced Configuration

```yaml
type: custom:skylight-calendar-card
title: Family Calendar
entities:
  - calendar.personal
  - calendar.work
  - calendar.family
  - calendar.kids_activities
default_view: week-standard  # Load this view by default
header_color: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'  # Custom blue gradient
first_day_of_week: 0  # 0 = Sunday, 1 = Monday, etc.
show_week_numbers: false
max_events: 100
view_mode: month  # 'month', 'week-compact', or 'week-standard'
week_days: [0, 1, 2, 3, 4, 5, 6]  # Days to show in week views (0=Sun, 6=Sat)
week_start_hour: 8  # Start hour for week-standard view
week_end_hour: 21   # End hour for week-standard view (9pm = 21)
height_scale: 0.6   # Make schedule more compact (50-200%)
compact_height: true  # Fit to screen with scrolling
compact_header: true  # Single-row header layout
enable_event_management: true  # Enable event creation (default: true)
readonly_calendars:  # Calendars that cannot be modified
  - calendar.holidays
colors:
  calendar.personal: '#FF6B6B'
  calendar.work: '#4ECDC4'
  calendar.family: '#45B7D1'
  calendar.kids_activities: '#FFA07A'
```

### Rolling Days Mode

Instead of showing a fixed week, you can show "today + N days":

```yaml
type: custom:skylight-calendar-card
title: Next 7 Days
entities:
  - calendar.family
default_view: week-standard
rolling_days: 6  # Show today + 6 more days = 7 total days
week_start_hour: 6
week_end_hour: 22
height_scale: 0.5
compact_height: true
```

This mode is perfect for:
- Always showing upcoming events regardless of week boundaries
- Custom date ranges (3 days, 10 days, etc.)
- Scrolling through time in custom increments

### Rolling Weeks Mode

Instead of showing a fixed calendar month, you can show "this week + N weeks":

```yaml
type: custom:skylight-calendar-card
title: Next 2 Weeks
entities:
  - calendar.family
view_mode: month
rolling_weeks: 1  # Show this week + 1 more week = 2 weeks total
```

This mode is perfect for:
- Always showing upcoming weeks regardless of month boundaries
- Custom week ranges (2 weeks, 4 weeks, etc.)
- Rolling planning view that updates daily

**Examples:**
```yaml
rolling_weeks: 0  # Show only current week (7 days)
rolling_weeks: 1  # Show current + next week (14 days)
rolling_weeks: 3  # Show current + 3 more weeks (28 days)
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `title` | string | `'Family Calendar'` | Card title displayed in header |
| `entities` | list | **Required** | List of calendar entity IDs |
| `view_mode` | string | `'month'` | View mode: `'month'`, `'week-compact'`, or `'week-standard'` |
| `default_view` | string | `null` | Initial view mode on load (overrides view_mode) |
| `header_color` | string | `'var(--primary-color)'` | Custom header background (solid color or gradient) |
| `first_day_of_week` | integer | `0` | First day of week (0 = Sunday, 1 = Monday, etc.) |
| `week_days` | list | `[0,1,2,3,4,5,6]` | Days to show in week views (0=Sun, 6=Sat) |
| `rolling_days` | integer | `null` | Show today + N days (alternative to week_days) |
| `rolling_weeks` | integer | `null` | Show this week + N weeks in month view |
| `week_start_hour` | integer | `8` | Start hour for week-standard view (0-23) |
| `week_end_hour` | integer | `21` | End hour for week-standard view (0-23) |
| `height_scale` | float | `1.0` | Height scaling factor (0.5-2.0, affects schedule view) |
| `compact_height` | boolean | `false` | Fit calendar to screen height with scroll |
| `compact_header` | boolean | `false` | Single-row header with inline badges |
| `show_week_numbers` | boolean | `false` | Show week numbers on the left side |
| `max_events` | integer | `100` | Maximum number of events to load |
| `enable_event_management` | boolean | `true` | Enable event creation features |
| `readonly_calendars` | list | `[]` | Calendar entities that should not allow modifications |
| `colors` | map | auto | Custom colors for each calendar entity |
| `language` | string | `en` | Language for the strings |
| `locale` | string | `en-US` | Optional locale. Will queue from language first, HASS setting second if not provided. |

## Event Management

### Creating Events

The card now supports creating events directly from the calendar interface! This feature works with most calendar integrations including Local Calendar, Google Calendar, CalDAV, and Office 365.

**Three Ways to Create Events:**

1. **"+ Add Event" Button** - Click the button in the header to create an event
2. **Click on a Day** - In month or week views, click on any day to create an event on that date
3. **Click on a Time Slot** - In schedule view, click on a specific time to create an event at that exact time

**Event Creation Form:**

The event creation modal includes:
- **Calendar Selection** - Choose which calendar to add the event to (only writable calendars shown)
- **Event Title** (required) - Name of your event
- **All-Day Toggle** - Switch between all-day events and timed events
- **Start/End Time** - For timed events, select exact start and end times
- **Start/End Date** - For all-day events, select the date range
  - Example: Single-day event on Feb 4 → Start: Feb 4, End: Feb 4
  - Example: Two-day event (Feb 4-5) → Start: Feb 4, End: Feb 5
  - Example: Three-day event (Feb 4-6) → Start: Feb 4, End: Feb 6
- **Location** - Optional location field
- **Description** - Optional detailed description

**Smart Defaults:**

- When clicking a day, the event defaults to that date
- When clicking a time slot in schedule view, the event defaults to that exact time
- Timed events default to 1-hour duration
- Times are automatically rounded to the nearest 30 minutes

### Editing Events

Click on any event to view its details, then click the **"Edit"** button to modify it.

**What You Can Edit:**
- Change event title, location, and description
- Modify start and end times/dates
- Switch between all-day and timed events
- Move event to a different calendar

**How It Works:**
- If `calendar.update_event` is available, changes are applied directly
- If update is unavailable or fails, the card automatically falls back to **create first, then delete**
- The fallback is automatic and avoids noisy "update service not found" pop-ups when edit succeeds via create+delete
- All editing is seamless - you don't need to know which method is used!

**Moving Events Between Calendars:**
You can change which calendar an event belongs to by selecting a different calendar in the dropdown. The event will be removed from the old calendar and created in the new one.

### Deleting Events

Click on any event and click the **"Delete"** button to remove it.

**Simple Deletion:**
For non-recurring events, you'll see a confirmation dialog. Click "Delete" to confirm.

**Recurring Event Deletion:**
For recurring events, you have three options:

1. **This event only** - Delete just this one occurrence
2. **This and future events** - Delete this occurrence and all future occurrences
3. **All events** - Delete the entire recurring series

**Example Scenarios:**
- Weekly team meeting but you're on vacation next week → Choose "This event only"
- Weekly meeting changing to bi-weekly starting today → Choose "This and future events"
- Project cancelled, remove all project meetings → Choose "All events"

**Example Configuration with Full Event Management:**

```yaml
type: custom:skylight-calendar-card
title: Family Calendar
entities:
  - calendar.personal      # Writable - can create, edit, delete
  - calendar.work          # Writable - can create, edit, delete
  - calendar.holidays      # Read-only
enable_event_management: true
readonly_calendars:
  - calendar.holidays  # Prevent creating/editing/deleting events on holidays calendar
```

### Calendar Integration Compatibility

**Full Support (Create, Edit, Delete):**
- ✅ **Local Calendar** - Full support with create+delete fallback for edits when direct update is unavailable
- ⚠️ **CalDAV** - Support varies by server (Nextcloud, iCloud, etc.)
- ⚠️ **Office 365** - Create works; edit/delete support varies

**Fallback-Based Edit Support (No direct update API):**
- ⚠️ **Google Calendar** - Edit works through create+delete fallback when UID/delete operations are available
  - Direct `calendar.update_event` may not exist for this integration
  - The card handles this by creating the replacement event first, then deleting the original
  - Delete uses Home Assistant's calendar delete capabilities (WebSocket first, service fallback)

**How Editing Works (All Calendars):**
1. **Direct Update Path** - If `calendar.update_event` exists, event is modified directly (fastest, preserves UID)
2. **Fallback Path** - Create the new event first, then delete the old event (prevents data loss if create fails)

**How Deletion Works:**
1. **WebSocket API** (Primary) - Works for Google Calendar and most modern integrations
2. **Service Call** (Fallback) - Works for Local Calendar and traditional integrations

**Note:** The card automatically detects which operations each calendar supports and shows/hides buttons accordingly. If you don't see an Edit or Delete button, your calendar integration doesn't support those operations or the event is missing required information (UID).

### Disabling Event Management

If you want a read-only calendar view:

```yaml
type: custom:skylight-calendar-card
title: Family Calendar (Read-Only)
entities:
  - calendar.personal
enable_event_management: false  # Disable all event management features
```

Or mark specific calendars as read-only:

```yaml
type: custom:skylight-calendar-card
title: Family Calendar
entities:
  - calendar.personal
  - calendar.holidays
readonly_calendars:
  - calendar.holidays  # Can view but not create events on holidays calendar
```

## Calendar Entity Setup

This card requires Home Assistant calendar entities. You can integrate calendars from:

- **Google Calendar**: [Integration Guide](https://www.home-assistant.io/integrations/google/)
- **CalDAV** (Apple Calendar, Nextcloud, etc.): [Integration Guide](https://www.home-assistant.io/integrations/caldav/)
- **Local Calendar**: [Integration Guide](https://www.home-assistant.io/integrations/local_calendar/)
- **Office 365**: [Integration Guide](https://www.home-assistant.io/integrations/microsoft/)

After setting up the integration, calendar entities will be automatically created (e.g., `calendar.personal`, `calendar.work`).

## Features in Detail

### View Modes

The card supports three different view modes that you can switch between using the buttons in the header:

#### Month View
The traditional calendar grid showing a full month at a time. Events are displayed as color-coded blocks within each day. Perfect for getting an overview of the entire month.

```yaml
view_mode: month
```

**Click Behavior:**
- Click on any day to create a new event on that date
- Click on an event to view its details

#### Week Compact View
Shows each day of the week as a column with events stacked vertically. This view is ideal for seeing all your week's events at a glance without the detailed timeline. You can configure which days to show:

```yaml
view_mode: week-compact
week_days: [1, 2, 3, 4, 5]  # Monday-Friday only
```

**Click Behavior:**
- Click on the day header to create a new event on that day
- Click on an event to view its details

#### Week Standard (Schedule) View
Displays a detailed timeline view with hours on the left and days across the top. Events are positioned at their exact time slots. Perfect for detailed day planning:

```yaml
view_mode: week-standard
week_start_hour: 8   # Start at 8am
week_end_hour: 21    # End at 9pm
week_days: [1, 2, 3, 4, 5]  # Weekdays only
```

**Click Behavior:**
- Click on any time slot to create a new event at that specific time
- Click on the day header to create a new event on that day (time defaults to next half hour)
- Click on an event to view its details

### Color-Coded Events

Each calendar entity can have its own color, making it easy to distinguish between different types of events:

```yaml
colors:
  calendar.personal: '#FF6B6B'    # Red for personal events
  calendar.work: '#4ECDC4'        # Teal for work events
  calendar.family: '#45B7D1'      # Blue for family events
  calendar.kids: '#FFA07A'        # Orange for kids' activities
```

### Customizing Header Color

By default, the header automatically matches your Home Assistant theme's primary color using `var(--primary-color)`. You can override this with any custom color or gradient:

**Solid Colors:**
```yaml
header_color: '#1e40af'  # Solid blue
header_color: '#059669'  # Solid green
header_color: '#dc2626'  # Solid red
```

**Gradients:**
```yaml
# Blue gradient
header_color: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'

# Green gradient
header_color: 'linear-gradient(135deg, #065f46 0%, #10b981 100%)'

# Orange/Red gradient
header_color: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)'

# Teal gradient
header_color: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)'

# Classic purple gradient (original default)
header_color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
```

**Use Other Theme Variables:**
```yaml
# Use secondary color
header_color: 'var(--secondary-color)'

# Use accent color
header_color: 'var(--accent-color)'

# Dark background
header_color: 'var(--card-background-color)'
```

**Restore Default:**
```yaml
# Explicitly set to match theme (this is already the default)
header_color: 'var(--primary-color)'
```

### Event Details Modal

Click on any event to see:
- Event title
- Description
- Start and end time
- Location (if specified)
- Calendar badge showing which calendar it belongs to

### Day View

Click on any day to:
- **Create a new event** on that day (if event management is enabled)
- **View all events** for that day (if event management is disabled)

### Today Highlight

The current day is automatically highlighted with a blue background and the date number is shown in a blue circle.

### Navigation

- Click the arrow buttons to move between months/weeks
- Click "Today" to jump back to the current date

## Tips and Tricks

### Quick Event Creation

The fastest ways to create events:

```yaml
# For quick daily tasks
type: custom:skylight-calendar-card
title: Today's Tasks
entities:
  - calendar.tasks
default_view: week-compact
rolling_days: 0  # Show only today
enable_event_management: true
```

**Workflow:**
1. Click anywhere on today's column
2. Enter event title
3. Toggle "All-day" if needed
4. Click "Create Event"

### Organizing Family Schedules

Create separate calendars for different family members:

```yaml
entities:
  - calendar.mom
  - calendar.dad
  - calendar.kid1
  - calendar.kid2
  - calendar.family_shared
```

### Color Coding by Category

Use colors to represent different types of activities:

```yaml
colors:
  calendar.appointments: '#FF6B6B'  # Red for appointments
  calendar.sports: '#4ECDC4'        # Teal for sports
  calendar.school: '#FFA07A'        # Orange for school
  calendar.social: '#98D8C8'        # Green for social events
```

### Adjusting Height for Different Screens

**Make it more compact:**
```yaml
height_scale: 0.7  # 70% of default height
```

**Make it larger:**
```yaml
height_scale: 1.5  # 150% of default height
```

**Fit to screen with scrolling:**
```yaml
compact_height: true  # Fits to viewport height
```

**Combine for best results:**
```yaml
height_scale: 0.6
compact_height: true
# Creates a compact view that fits perfectly in the available space
```

### Using Rolling Days Mode

Perfect for dynamic date ranges that don't follow calendar weeks:

```yaml
# Show next 3 days
rolling_days: 2  # Today + 2 = 3 days

# Show next 10 days
rolling_days: 9  # Today + 9 = 10 days

# Show just today
rolling_days: 0  # Today only
```

Navigation buttons will advance by the number of days shown (rolling_days + 1).

### Using Rolling Weeks Mode

Perfect for planning views that update daily:

```yaml
# Show next 2 weeks
view_mode: month
rolling_weeks: 1  # This week + 1 = 2 weeks

# Show next 4 weeks (monthly planning)
view_mode: month
rolling_weeks: 3  # This week + 3 = 4 weeks

# Show only this week (7-day grid)
view_mode: month
rolling_weeks: 0  # This week only
```

Navigation buttons will advance by the number of weeks shown (rolling_weeks + 1).

**Comparison:**
- **Standard Month View**: Shows entire calendar month (varies 28-31 days)
- **Rolling Weeks Mode**: Shows consistent number of weeks starting from today
- **Rolling Days Mode**: Shows consistent number of days starting from today

### Setting Default View

Load the card in your preferred view automatically:

```yaml
default_view: 'week-standard'  # Always open in schedule view
```

This is especially useful when you primarily use one view mode but want the ability to switch to others.

### Compact Header Mode

Save vertical space with the single-row header:

```yaml
compact_header: true
```

This shows the title, calendar badges, and view controls all in one row, perfect for smaller screens or when maximizing calendar space.

### Interactive Features

- **Click calendar badges** at the top to show/hide that calendar's events
- **Click any event** to see full details including duration, location, description, and attendees
- **Click days or time slots** to create new events (when event management is enabled)
- **Click "+ Add Event"** button for quick event creation

### Multiple Cards

You can add multiple cards for different views:
- One for the whole family
- One for work schedules
- One for kids' activities

## Troubleshooting

### Events Not Showing

1. Make sure your calendar integration is working correctly
2. Check that the entity ID is correct
3. Verify that the calendar has events in the current month
4. Check the Home Assistant logs for errors

### Cannot Create Events

1. Verify `enable_event_management: true` in your configuration
2. Check that the calendar is not in the `readonly_calendars` list
3. Ensure the calendar integration supports event creation
4. Check Home Assistant logs for service call errors

### Cannot Edit or Delete Events

If you don't see Edit or Delete buttons on events:

1. **Google Calendar Users**: The Google Calendar integration **does not support** editing or deleting events through Home Assistant. This is a limitation of the integration itself, not this card. You must use the Google Calendar app or website to modify events.

2. **Check Calendar Support**: Not all calendar integrations support editing/deleting
   - Local Calendar: Supports deletion (editing uses delete+create)
   - CalDAV: Varies by server implementation
   - Office 365: Varies by setup

3. **Check Configuration**:
   ```yaml
   enable_event_management: true  # Must be enabled
   readonly_calendars: []  # Calendar should not be in this list
   ```

4. **Missing UID**: Some events may not have a UID field, which is required for editing/deleting

### Google Calendar: "Please use the Google Calendar app or website"

**For editing**: This is expected behavior. The Home Assistant Google Calendar integration does not support editing events. You must use the official Google Calendar app or https://calendar.google.com.

**For deleting**: You should NOT see this message anymore - deletion works via WebSocket API! If you see this, please report it as a bug.

**Solutions:**
- **To delete**: Use the Delete button in the event details (this now works!)
- **To edit**: Use the official Google Calendar app or https://calendar.google.com
- **To create**: You can still create events through this card - they will appear in Google Calendar
- **Alternative**: Use a Local Calendar or CalDAV calendar if you need full editing support in Home Assistant

### Edit/Delete Fails with "Calendar does not support modifications"

This means:
- The calendar integration doesn't expose the UPDATE or DELETE services
- The event doesn't have a UID (required for modifications)
- The calendar is marked as read-only in your configuration

**Workaround**: You can manually delete/recreate events through the calendar integration's native interface.

### "No writable calendars available" Error

This means all your calendars are either:
- Read-only (in the `readonly_calendars` list)
- Don't support event creation

**Solution:**
1. Remove calendars from `readonly_calendars` list
2. Verify your calendar integration supports creation
3. Add a Local Calendar for testing

### Colors Not Applied

Make sure you're using valid hex color codes (e.g., `#FF6B6B`, not `red`)

### Card Not Loading

1. Clear your browser cache
2. Check browser console for errors (F12)
3. Verify the resource is properly added to Lovelace

## Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/superdingo101/skylight-calendar-card.git
cd skylight-calendar-card

# The main file is ready to use
cp skylight-calendar-card.js /config/www/
```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you find this card useful, please star the repository! ⭐

For issues and feature requests, please use the [GitHub Issues](https://github.com/superdingo101/skylight-calendar-card/issues) page.

## License

MIT License - see LICENSE file for details

## Credits

Inspired by the beautiful design of [Skylight Calendar](https://www.skylightframe.com/calendar).
