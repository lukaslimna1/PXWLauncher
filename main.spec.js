const assert = require('assert');

describe('Main Window', () => {
  it('should open a window', async () => {
    await app.client.waitUntilWindowLoaded();
    const count = await app.client.getWindowCount();
    assert.strictEqual(count, 1);
  });
});
