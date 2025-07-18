
import { createRequire } from 'module';
const customRequire = createRequire(import.meta.url);
export interface DesktopIdle {
    startMonitoring: () => void;
    getIdleTime: () => number;
    stopMonitoring: () => void;
}

export const desktopIdle = customRequire('node-gyp-build')("../build/Release/desktopIdle.node") as unknown as DesktopIdle;