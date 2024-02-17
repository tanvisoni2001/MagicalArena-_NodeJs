const { Player, Dice, Arena } = require('../magicalarena.cjs');

test('Player creation', () => {
    const player = new Player(100,10,5);
    expect(player.health).toBe(100);
    expect(player.strength).toBe(10);
    expect(player.attack).toBe(5);
});