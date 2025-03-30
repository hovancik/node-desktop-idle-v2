import { desktopIdle } from './dist/index.js';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

desktopIdle.startMonitoring()

setInterval(() => {
  const idle = desktopIdle.getIdleTime()
  console.log("Test idle:", idle, 'seconds');
}, 1000)


await sleep(10000);

desktopIdle.stopMonitoring()
console.log('Stopping monitoring...')
process.exit(0) 