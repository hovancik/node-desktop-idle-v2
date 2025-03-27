import vows from 'vows'
import assert from 'assert'
import desktopIdle from '../build/Release/desktopIdle'


vows.describe('getIdleTime()').addBatch({
  'return value': () => {
    var idle = desktopIdle.getIdleTime()  
    console.log("test idle", idle);
    assert.ok(idle > 0, 'should return idle time');
  }
}).run();