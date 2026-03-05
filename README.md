[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/release/superdingo101/skylight-calendar-card.svg)](https://github.com/superdingo101/skylight-calendar-card/releases)
[![GitHub stars](https://img.shields.io/github/stars/superdingo101/skylight-calendar-card.svg)](https://github.com/superdingo101/skylight-calendar-card/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/superdingo101/skylight-calendar-card.svg)](https://github.com/superdingo101/skylight-calendar-card/issues)
[![License](https://img.shields.io/github/license/superdingo101/skylight-calendar-card.svg)](LICENSE)

# Skylight Calendar Card for Home Assistant

A custom Lovelace calendar card inspired by the Skylight Calendar style.

### Compact Week View
![image](https://github.com/user-attachments/assets/5afbd7f5-5218-4b4d-b7f8-0272854418aa)

<br>

### Schedule View
![image](https://github.com/user-attachments/assets/d5c3ac1c-7da5-423d-88a9-d3cccbb54953)

<br>

## Prerequisite

This card requires one or more **Home Assistant calendar entities** (for example: `calendar.family`, `calendar.work`, etc.).

<br>

## Installation

<details>

<summary>Without HACS</summary>

<br>

1. Download these files: [skylight-calendar-card.js](https://raw.githubusercontent.com/superdingo101/skylight-calendar-card/refs/heads/main/skylight-calendar-card.js)
2. Add these files to your `<config>/www` folder
3. On your dashboard click on the icon at the right top corner then on `Edit dashboard`
4. Click again on that icon and then click on `Manage resources`
5. Click on `Add resource`
6. Copy and paste this: `/local/skylight-calendar-card.js?v=1`
7. Click on `JavaScript Module` then `Create`
8. Go back and refresh your page
9. You can now click on `Add card` in the bottom right corner, select Manual card, and configure your card via the [quick start guide](https://github.com/superdingo101/skylight-calendar-card?tab=readme-ov-file#quick-start) or the [configuration](https://github.com/superdingo101/skylight-calendar-card/wiki/Configuration) page of the wiki.
10. After any update of the file you will have to edit `/local/skylight-calendar-card.js?v=1` and change the version to any higher number

If it's not working, just try to clear your browser cache.

</details>

<details>

<summary>With HACS (Recommended)</summary>

<br>

This method allows you to get updates directly on the HACS main page

1. If HACS is not installed yet, download it following the instructions on [https://hacs.xyz/docs/setup/download/](https://hacs.xyz/docs/use/download/download/)
2. Proceed to the HACS initial configuration following the instructions on [https://hacs.xyz/docs/configuration/basic](https://hacs.xyz/docs/configuration/basic)
3. On your sidebar go to `HACS` > `Frontend`
4. Click on the `+` button at the bottom right corner
5. Now search for `Skylight Calendar Card` and then click on the button at the bottom right corner to download it
6. Go back on your dashboard and click on the icon at the right top corner then on `Edit dashboard`
7. You can now click on `Add card` in the bottom right corner, select Manual card, and configure your card via the [quick start guide](https://github.com/superdingo101/skylight-calendar-card?tab=readme-ov-file#quick-start) or the [configuration](https://github.com/superdingo101/skylight-calendar-card/wiki/Configuration) page of the wiki.

If it's not working, try to clear your browser cache.

</details>

<br>

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=superdingo101&repository=skylight-calendar-card&category=frontend)

<br>

## Quick Start

Use this simple, working example:

```yaml
type: custom:skylight-calendar-card
title: Family Calendar
entities:
  - calendar.family
```

<br>

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
