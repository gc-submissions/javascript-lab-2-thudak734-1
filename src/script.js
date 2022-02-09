"use strict";

let randomDamage = () => Math.floor(Math.random() * 10) + 1;

console.log(`your random damage is: ${randomDamage()}`);

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};

let attackPlayer = (health) => {
  let number = health - randomDamage();
  return number;
};

console.log(`your health started at 100 and is now ${attackPlayer(100)}`);

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => (health <= 0 ? true : false);

let fight = (player1, player2, player1Health, player2Health) => {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
};

fight("Mitch", "Adam", 100, 100);
