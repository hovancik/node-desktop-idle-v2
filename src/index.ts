
import { createRequire } from 'module';
const customRequire = createRequire(import.meta.url);
export interface DesktopIdle {
    getIdleTime: () => number;
    startMonitoring: () => void;
    stopMonitoring: () => void;
}

// // Dynamically import the native addon
// const loadDesktopIdle = async (): Promise<DesktopIdle> => {
//     const desktopIdleC = await import("../build/Release/desktopIdle.node");
//     return desktopIdleC.default as unknown as DesktopIdle;
// };

// // Export a loader function
// export const getDesktopIdle = async (): Promise<DesktopIdle> => {
//     return await loadDesktopIdle();
// };

export const desktopIdle = customRequire("../build/Release/desktopIdle.node") as unknown as DesktopIdle;