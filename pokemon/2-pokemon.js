class Pokemon {
	constructor(name, type, level, hp) {
		this.name = name;
		this.type = type;
		this.level = level;
		this.hp = hp;
		switch (type) {
			case "Grass":
				this.damage = this.level * 2;
				break;
			case "Water":
				this.damage = this.level * 2.5;
				break;
			case "Electric":
				this.damage = this.level * 3;
				break;
			case "Fire":
				this.damage = this.level * 3.5;
				break;
			default:
				console.log("Unknown type");
				break;
		}
	}

	// Attack
	attack(opponent) {
		let chance = Math.random() * 100;
		console.log(`${this.name} attacks ${opponent.name}`);
		console.log(`${this.name} level up! Damage: ${this.damage}`);

		if (chance < 10) {
			console.log(`${this.name} landed a critical hit!`);
			this.damage *= 3; // critical hit triple damage
		} else if (chance < 30) {
			console.log(`${this.name} landed a double damage hit!`);
			this.damage *= 2; // double damage
		}
	}

	// Display what damage is received
	received_damage(opponent) {
		console.log(
			`${this.name} attacks. ${opponent.name} received ${this.damage} damage.`
		);
	}

	// Display how much HP left
	calculate_damage(opponent) {
		if (opponent.hp <= 0) {
			console.log(`${opponent.name} has fainted!`);
		} else {
			opponent.hp -= this.damage;
			if (opponent.hp < 0) {
				console.log(`${opponent.name} has 0 HP left.`);
			} else {
				console.log(`${opponent.name} has ${opponent.hp} HP left.`);
			}
		}
	}

	// Heal
	heal() {
		let healer,
			chance = Math.random() * 100;

		if (chance < 10) {
			healer = this.level * 3;
			this.hp += healer;
			console.log(
				`${this.name} received an ultra heal! Heals ${healer} HP. Thus, HP: ${this.hp} HP`
			);
		} else if (chance < 30) {
			healer = this.level * 2;
			this.hp += healer;
			console.log(`${this.name} heals ${healer} HP. Thus, HP: ${this.hp} HP`);
		}
	}

	// Increase damage and level up
	power_up() {
		let dummy = this.damage;
		this.damage = this.damage + this.level * 0.5;
		this.level++;
		console.log(
			`${this.name} level up! Level ${this.level}. Damage increased: ${dummy} -> ${this.damage}`
		);
	}
}
