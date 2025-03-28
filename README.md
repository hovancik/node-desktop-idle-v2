Forking https://github.com/bithavoc/node-desktop-idle since current Electron idle timers do not working on Linux due to upstream issues, and package seems to be abandoned.

This fork focuses on making node-desktop-idle work with contemporary softwares, until electron provides a more stable way to get idle time (at least on Linux platforms)

Changes Made:
- Updated to latest Node JS LTS (22.14.0)
- Switched package to ESModule
- Converted to Typescript
- Updated the following packages:
    - Node-gyp
    - eslint
    - npm-watch
- Switched Packages:
    - vows switched to jest
- Added Packages:
    - nan for better support to C++
    - npm-check for easier updates

Platform Specific Changes:
- Linux:
    - Switched from an xscreensaver approach to a input based approach to support more enviornments.
- Windows:
- Mac:

Instructions to use:

- Linux:
    - User must have the permission to access inputs.
    

## desktop idle
> [![Build status](https://ci.appveyor.com/api/projects/status/gwlnytjjw4ju3vs0?svg=true)](https://ci.appveyor.com/project/bithavoc/node-desktop-idle)
> [![Build Status](https://travis-ci.org/bithavoc/node-desktop-idle.svg?branch=master)](https://travis-ci.org/bithavoc/node-desktop-idle)
> [![Monthly Downloads](https://img.shields.io/npm/dm/desktop-idle.svg)](https://www.npmjs.com/package/desktop-idle)

Node/Electron module to detect idle desktop users (macOS, Windows, Linux, FreeBSD and OpenBSD).

**Stable | Actively maintained | Pull Requests Welcome**

_Forked and inspired from [node-system-idle-time](https://github.com/paulcbetts/node-system-idle-time)_

### Installation
```
npm install --save desktop-idle
# or yarn
yarn add desktop-idle
```

### Cross-Platform Support
* **Windows:** [GetLastInputInfo](https://msdn.microsoft.com/en-us/library/windows/desktop/ms646302(v=vs.85).aspx), see `src/win/idle.cc`.
* **Mac(OSX):** [CoreGraphics Event Source](https://developer.apple.com/documentation/coregraphics/1408790-cgeventsourcesecondssincelasteve), see `src/mac/idle.cc`.
* **Linux & FreeBSD & OpenBSD:** [X Screensaver](https://linux.die.net/man/3/xscreensaverqueryinfo), see `src/linux/idle.cc`.

### Usage
```
var desktopIdle = require('desktop-idle');
console.log(desktopIdle.getIdleTime());
```

### Linux Requirements

X server development package and pkg-config are required:

`apt install libxss-dev pkg-config`

### Test

```
yarn test
```

### License

> `MIT - Bithavoc<im@bithavoc.io>`