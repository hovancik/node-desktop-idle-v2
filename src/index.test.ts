import { DesktopIdle, getDesktopIdle } from '.';

describe('Main', () => {
  console.log(process.versions.modules)

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  let desktopIdle: DesktopIdle;

  beforeAll(async () => {
    console.log('start')
    desktopIdle = await getDesktopIdle();

    desktopIdle.startMonitoring()
  })

  it('should test desktopIdle', async () => {

    setInterval(() => {
      const idle = desktopIdle.getIdleTime()
      console.log("test idle", idle);
    }, 1000)

    await sleep(4000);
  },9000)

  afterAll(() => {
    console.log('end')
    desktopIdle.stopMonitoring()
  })

})