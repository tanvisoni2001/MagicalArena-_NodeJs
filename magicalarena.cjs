class Player {
    constructor(health,strength,attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }
}

class Dice {
    constructor(sides) {
        this.sides = sides
    }

    roll() {
        return Math.floor(Math.random() * this.sides) + 1;
      }
}

class Arena {
    constructor(player_1,player_2, attackDice, defendDice) {
        this.player_1 = player_1;
        this.player_2 = player_2;
        this.attackDice = attackDice;
        this.defendDice = defendDice;
    }

    startGame() {
        let attacker = this.player_1.health < this.player_2.health ? this.player_1 : this.player_2;
        let defender = this.player_1.health < this.player_2.health ? this.player_2 : this.player_1;

        while(attacker.health > 0 && defender.health > 0) {
            const attackRoll = this.attackDice.roll();
            const defendRoll = this.defendDice.roll();

            const attackDamage = attackRoll * attacker.attack;
            const defendDamage = defendRoll * defender.strength;

            const damageDealth = Math.max(0,attackDamage - defendDamage);

            defender.health = damageDealth;

            console.log(
                `${attacker === this.player_1 ? 'Player 1' : 'PLayer 2'} attacks for ${attackDamage}` + 
                `defended for ${defendDamage}. ${defender === this.player_1 ? 'Player 1' : 'Player 2'}'s health is now ${defender.health}`
            );

            [attacker, defender] = [defender,attacker];
        } 

        console.log(`Game Over.. 
        ${defender === this.player_1 ? 'Player 1' : 'Player 2'} has been defeated!`);
    }
}

module.exports = { Player, Dice, Arena };