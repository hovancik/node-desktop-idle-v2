Forking https://github.com/bithavoc/node-desktop-idle since current Electron idle timers do not work on Linux due to upstream issues, and package seems to be abandoned.

This fork focuses on making node-desktop-idle work with contemporary softwares, until electron provides a more stable way to get idle time (at least on Linux platforms)

Changes Made:
- Updated and prebuilt on latest NodeJs LTS (22.14.0 currently)
- Switched package to ESModule
- Converted to Typescript
- Switched to NPM from Yarn
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
    - No significant changes as of yet
- Mac:
    - No significant changes as of yet

Instructions to use:

- General
    - If changes are done to native code for any platform, please run `npm run gyp-refresh`
    - To run a test, run `node ./test.js` after having built (`npm run build`) the project. This will run a 10 second test, giving idle time every second.

- Platform specific:
    - Linux:
        - User must have the permission to access inputs
    - Windows:
        - No specific instructions
    - MacOS:
        - No specific Instructions

Tested On:

- Linux 
    - Ubuntu 24.04.2 LTS
- Windows (tests to run soon)
    - Windows 11
- macOS (do not have the resources to test this </3)

Usage with Electron:
- Since Electron uses a specific NodeJS ABI version (at the time of writing 133), you will still need to use something to recompile the native parts of this package. I've used @electron/rebuild (https://www.npmjs.com/package/@electron/rebuild), but anything should work.
