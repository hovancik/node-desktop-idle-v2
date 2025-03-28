// import assert from 'assert'
import desktopIdle from "../src/desktopIdle"

describe('Main', () => {
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  beforeAll(() => {
    console.log('start')
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