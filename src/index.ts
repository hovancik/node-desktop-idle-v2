
import { createRequire } from 'module';
const customRequire = createRequire(import.meta.url);
export interface DesktopIdle {
    getIdleTime: () => number;
    startMonitoring: () => void;
    stopMonitoring: () => void;
}

export const desktopIdle = customRequire("../build/Release/desktopIdle.node") as unknown as DesktopIdle;