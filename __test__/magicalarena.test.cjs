const { Player, Dice, Arena } = require('../magicalarena.cjs');

test('Player creation', () => {
    const player = new Player(100,10,5);
    expect(player.health).toBe(100);
    expect(player.strength).toBe(10);
    expect(player.attack).toBe(5);
});

test('Dice roll', () => {
    const dice = new Dice(6);
    expect(dice.sides).toBe(6);
    const result = dice.roll();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
});