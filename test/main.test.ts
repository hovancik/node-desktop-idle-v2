// import assert from 'assert'
import desktopIdle from "../src/desktopIdle"

describe('Main', () => {
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  beforeAll(() => {
    console.log('start')
    desktopIdle.startMonitoring()
  })

  it('should test desktopIdle', async () => {

    await sleep(4000);

    const idle = desktopIdle.getIdleTime()  
    console.log("test idle", idle);
    // assert.ok(idle > 0, 'should return idle time');
  },9000)

  afterAll(() => {
    console.log('end')
    desktopIdle.stopMonitoring()
  })

})