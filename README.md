# Dozenal-Clock: GNOME-Shell-Extension
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](http://www.repostatus.org/badges/latest/active.svg)](http://www.repostatus.org/#active)
[![GitHub Release](https://img.shields.io/github/release/NicoVIII/Dozenal-Clock-GNOME-Shell-Extension.svg)]()
[![Github Pre-Release](https://img.shields.io/github/release/NicoVIII/Dozenal-Clock-GNOME-Shell-Extension/all.svg?label=prerelease)]()
[![Github Downloads](https://img.shields.io/github/downloads/NicoVIII/Dozenal-Clock-GNOME-Shell-Extension/total.svg)]()
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ca429847223b4914ac9955439959013e)](https://www.codacy.com/app/NicoVIII/Dozenal-Clock-GNOME-Shell-Extension?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=NicoVIII/Dozenal-Clock-GNOME-Shell-Extension&amp;utm_campaign=Badge_Grade)
[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/NicoVIII/Dozenal-Clock-GNOME-Shell-Extension/master/LICENSE)

This Gnome Shell Extension converts the normal clock to a duodecimal/dozenal one like the one you can see here:  
[https://dozenal.ae-web.ca/](https://dozenal.ae-web.ca/)

![Example time on dozenal clock](https://github.com/NicoVIII/Dozenal-Clock-GNOME-Shell-Extension/raw/master/dozenal.png)

## Installation

The easiest way to install the dozenal clock and stay up-to-date is using [Gnome Extensions](https://extensions.gnome.org).
You can find this extension [here](https://extensions.gnome.org/extension/1448/dozenal-clock/).

You can also install it manually. Navigate to `~/.local/share/gnome-shell/extensions` (per-user) or to `/usr/share/gnome-shell/extensions` or `/usr/local/share/gnome-shell/extensions` (systemwide) and extract the archive into it. [Source](https://wiki.gnome.org/Projects/GnomeShell/Extensions)

It is recommended to enable seconds for the clock in GNOME Tweak Tool to improve the accuracy of the dozenal clock.

## Development
[![GitHub issues](https://img.shields.io/github/issues/NicoVIII/Dozenal-Clock-GNOME-Shell-Extension.svg)](https://github.com/NicoVIII/Dozenal-Clock-GNOME-Shell-Extension/issues)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ca429847223b4914ac9955439959013e?branch=develop)](https://www.codacy.com/app/NicoVIII/Dozenal-Clock-GNOME-Shell-Extension?branchId=8711147&utm_source=github.com&amp;utm_medium=referral&amp;utm_content=NicoVIII/Dozenal-Clock-GNOME-Shell-Extension&amp;utm_campaign=Badge_Grade)

To build this project you have to have npm installed.  
Run `npm install` inside the project directory and `npm run build` to build it. The results are placed inside the `out` folder.  
If you are building this on a Unix device, you can use `npm run publish` to pack the results into some compressed tarballs.
