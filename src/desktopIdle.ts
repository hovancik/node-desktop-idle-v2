export interface DesktopIdle {
    getIdleTime: () => number;
    startMonitoring: () => void;
    stopMonitoring: () => void;
    }

const desktopIdle = require('../build/Release/desktopIdle.node');
export default desktopIdle as DesktopIdle;