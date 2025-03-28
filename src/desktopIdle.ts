export interface DesktopIdle {
    getIdleTime: () => number;
    startMonitoring: () => void;
    stopMonitoring: () => void;
}

export const desktopIdle: DesktopIdle = require('../build/Release/desktopIdle.node');