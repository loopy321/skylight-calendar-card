# Skylight Calendar Card for Home Assistant

A custom Lovelace calendar card inspired by the Skylight Calendar style.

### Compact Week View
![image](https://github.com/user-attachments/assets/5afbd7f5-5218-4b4d-b7f8-0272854418aa)

### Schedule View
![image](https://github.com/user-attachments/assets/d5c3ac1c-7da5-423d-88a9-d3cccbb54953)

## Prerequisite

This card requires one or more **Home Assistant calendar entities** (for example: `calendar.family`, `calendar.work`, etc.).

## Quick Start

### 1) Install

Install with **HACS** (recommended):

1. Open HACS → **Frontend**
2. Search for **Skylight Calendar Card**
3. Download and restart Home Assistant

Or install manually by copying `skylight-calendar-card.js` to `/config/www/` and adding it as a Lovelace resource.

### 2) Add the card

Use this simple, working example:

```yaml
type: custom:skylight-calendar-card
title: Family Calendar
entities:
  - calendar.family
```


### Background customization (transparent or image)

You can make the calendar background transparent, or set a background image URL that applies across month, week, and schedule views:

```yaml
type: custom:skylight-calendar-card
entities:
  - calendar.family
background_transparent: true
# or use an image instead:
# background_image_url: https://example.com/your-photo.jpg
# background_image_size: cover
# background_image_position: center
# background_image_repeat: no-repeat
```

`background_image_url` supports:
- Online images (for example `https://...`)
- Home Assistant local media paths (for example `/media/local/family/photo.jpg`)
- Home Assistant media-source local URIs (for example `media-source://media_source/local/family/photo.jpg`)

## Documentation Wiki

Full documentation has been moved to the wiki pages in this repository:

- [Wiki Home](https://github.com/superdingo101/skylight-calendar-card/wiki)
- [Installation](https://github.com/superdingo101/skylight-calendar-card/wiki/Installation)
- [Configuration](https://github.com/superdingo101/skylight-calendar-card/wiki/Configuration)
- [Views & Navigation](https://github.com/superdingo101/skylight-calendar-card/wiki/Views-and-Navigation)
- [Event Management](https://github.com/superdingo101/skylight-calendar-card/wiki/Event-Management)
- [Troubleshooting](https://github.com/superdingo101/skylight-calendar-card/wiki/Troubleshooting)
- [Compatibility with Card Mod](https://github.com/superdingo101/skylight-calendar-card/wiki/Compatibility-with-Card-Mod)
- [Development](https://github.com/superdingo101/skylight-calendar-card/wiki/Development)

You can also browse by topic via the wiki sidebar: [Wiki Sidebar](https://github.com/superdingo101/skylight-calendar-card/wiki/_Sidebar).
