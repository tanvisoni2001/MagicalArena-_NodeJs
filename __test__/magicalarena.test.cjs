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

test('Arena creation', () => {
    const player_1 = new Player(100,10,5);    
    const player_2 = new Player(50,5,10);
    const attackDice = new Dice(6);
    const defendDice = new Dice(6);

    const arena = new Arena(player_1,player_2,attackDice,defendDice);

    expect(arena.player_1).toBe(player_1);
    expect(arena.player_2).toBe(player_2);
    expect(arena.attackDice).toBe(attackDice);
    expect(arena.defendDice).toBe(defendDice);
});

test('start Game', () => {
    const player_1 = new Player(50,5,10);
    const player_2 = new Player(100,10,5);
    const attackDice = new Dice(6);
    const defendDice = new Dice(6);

    const arena  = new Arena(player_1, player_2, attackDice, defendDice);

    arena.startGame();
});