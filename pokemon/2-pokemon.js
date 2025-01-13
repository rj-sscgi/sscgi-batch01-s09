class Pokemon {
	constructor(name, type, level, hp) {
		this.name = name;
		this.type = type;
		this.level = level;
		this.hp = hp;
		this.max_hp = hp;
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
		console.log(`⚔️ ${this.name} attacks ${opponent.name}!`);
		console.log(`🔥 Damage: ${round_off(this.damage)}`);

		if (chance < 10) {
			console.log(`💥 Critical hit by ${this.name}!`);
			this.damage *= 3; // critical hit triple damage
		} else if (chance < 30) {
			console.log(`💥 Double damage by ${this.name}!`);
			this.damage *= 2; // double damage
		}
	}

	// Display what damage is received
	received_damage(opponent) {
		console.log(
			`💔 ${opponent.name} receives ${round_off(this.damage)} damage from ${
				this.name
			}.`
		);
	}

	// Display how much HP is left
	calculate_damage(opponent) {
		opponent.hp -= this.damage;
		if (opponent.hp <= 0) {
			console.log(`${opponent.name} has fainted! 💀`);
			opponent.hp = 0;
		} else {
			console.log(`💚 ${opponent.name} has ${round_off(opponent.hp)} HP left.`);
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
				`✨ ${
					this.name
				} receives an ULTRA heal! Heals ${healer} HP. ❤️ HP: ${round_off(
					this.hp
				)}`
			);
		} else if (chance < 30) {
			healer = this.level * 2;
			this.hp += healer;
			console.log(
				`❤️ ${this.name} heals ${healer} HP. HP: ${round_off(this.hp)}`
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
				`🔺 ${this.name} levels up to Level ${
					this.level
				}! 🔥 Damage increased: ${round_off(dummy)} -> ${round_off(
					this.damage
				)}`
			);
		}
	}
}
