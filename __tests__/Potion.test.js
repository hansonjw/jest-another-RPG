const { TestScheduler } = require("jest");

const Potion = require('../lib/Potion.js');

test('Verify Potion object has a name and value', () => {
    const potion = new Potion('health');

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});