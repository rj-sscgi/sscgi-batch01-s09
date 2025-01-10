class Pokemon {
	constructor(name, type, level, hp) {
		this.name = name;
		this.type = type;
		this.level = level;
		this.hp = hp;
		switch (type) {
			case "Electric":
			case "Fire":
			case "Flying":
			case "Normal":
				this.damage = this.level * 2.3;
				break;
			case "Grass":
			case "Rock":
				this.damage = this.level * 1.8;
				break;
			case "Water":
			case "Ice":
				this.damage = this.level * 2.1;
				break;
			case "Psychic":
			case "Dragon":
				this.damage = this.level * 2.5;
				break;
			default:
				console.log(`Unknown type: ${type}. Setting default damage.`);
				this.damage = this.level * 1.6;
				break;
		}
	}

	// Attack
	attack(opponent) {
		let chance = Math.random() * 100;
		console.log(`${this.name} attacks ${opponent.name}`);
		console.log(`${this.name} level up! Damage: ${round_off(this.damage)}`);

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
			`${this.name} attacks. ${opponent.name} received ${round_off(
				this.damage
			)} damage.`
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
				console.log(`${opponent.name} has ${round_off(opponent.hp)} HP left.`);
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
				`${
					this.name
				} received an ultra heal! Heals ${healer} HP. Thus, HP: ${round_off(
					this.hp
				)} HP`
			);
		} else if (chance < 30) {
			healer = this.level * 2;
			this.hp += healer;
			console.log(
				`${this.name} heals ${healer} HP. Thus, HP: ${round_off(this.hp)} HP`
			);
		}
	}

	// Increase damage and level up
	power_up() {
		let dummy = this.damage,
			chance = Math.random() * 100;

		if (chance < 20) {
			this.damage = this.damage + this.level * 0.5;
			this.level++;
			console.log(
				`${this.name} level up! Level ${round_off(
					this.level
				)}. Damage increased: ${round_off(dummy)} -> ${round_off(this.damage)}`
			);
		}
	}
}
