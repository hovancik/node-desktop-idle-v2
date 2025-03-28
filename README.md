Forking https://github.com/bithavoc/node-desktop-idle since current Electron idle timers do not work on Linux due to upstream issues, and package seems to be abandoned.

This fork focuses on making node-desktop-idle work with contemporary softwares, until electron provides a more stable way to get idle time (at least on Linux platforms)

Changes Made:
- Updated to latest Node JS LTS (22.14.0)
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
    - To run a test, run `npm run test main.test.ts`. This will run a 4 second test, giving idle time every second.

- Platform specific:
    - Linux:
        - User must have the permission to access inputs
    - Windows:
        - No specific instructions
    - MacOS:
        - No specific Instructions

Tested On:

Linux 
    - Ubuntu 24.04.2 LTS
Windows (tests to run soon)
macOS (do not have the resources to test this </3)
