class Fighter {
  constructor(obj) {
    let _name = obj.name;
    this.getName = function() {
      return _name;
    };

    const _damage = obj.damage;
    this.getDamage = function() {
      return _damage;
    };

    let _hp = obj.hp;
    this.getHealth = function() {
      return _hp;
    };
    this.setHealth = function(hp) {
      _hp = hp;
    };

    let _agility = obj.agility;
    this.getAgility = function() {
      return _agility;
    };

    let _wins = 0;
    this.getWins = function() {
      return _wins;
    };
    this.addWin = function() {
      _wins++;
    };

    let _losses = 0;
    this.getLosses = function() {
      return _losses;
    };
    this.addLoss = function() {
      _losses++;
    };
  }

  attack(obj) {
    const maxAgility = 100;
    let defenderAgility = obj.getAgility();
    let attackSuccess = Math.random() < 1 - defenderAgility / maxAgility;
    if (attackSuccess) {
      obj.dealDamage(this.getDamage());
      console.log(
        `${this.getName()} make ${this.getDamage()} damage to ${obj.getName()}`
      );
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  }

  logCombatHistory() {
    console.log(
      `Name: ${this.getName()}, Wins: ${this.getWins()}, Losses: ${this.getLosses()}`
    );
  }

  heal(a) {
    const totalHp = 100;
    let newHp = this.getHealth() + a;
    this.setHealth(newHp > totalHp ? totalHp : newHp);
  }

  dealDamage(a) {
    this.setHealth(this.getHealth() - a < 0 ? 0 : this.getHealth() - a);
  }
}

function battle(obj1, obj2) {
  if (obj1.getHealth() === 0) {
    console.log(`${obj1.getName()} is dead and will not fight.`);
  } else if (obj2.getHealth() === 0) {
    console.log(`${obj2.getName()} is dead and will not fight.`);
  } else {
    while (obj1.getHealth() && obj2.getHealth()) {
      obj1.attack(obj2);
      obj2.attack(obj1);
    }
    obj1.getHealth() ? obj1.addWin() : obj1.addLoss();
    obj2.getHealth() ? obj2.addWin() : obj2.addLoss();
  }
}

// const myFighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
// const myFighter2 = new Fighter({name: 'Jim', damage: 10, hp: 120, agility: 40});

// battle(myFighter1, myFighter2);
