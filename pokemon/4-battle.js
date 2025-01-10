class Battle {
	constructor(trainer1, trainer2) {
		this.trainer1 = trainer1;
		this.trainer2 = trainer2;
	}

	start_battle() {
		console.log(
			`The battle starts between Trainer ${this.trainer1.name} and Trainer ${this.trainer2.name}!`
		);

		let trainer1_pokemon_index = 0;
		let trainer2_pokemon_index = 0;

		// battle loop
		while (
			trainer1_pokemon_index < this.trainer1.pokemon_list.length &&
			trainer2_pokemon_index < this.trainer2.pokemon_list.length
		) {
			const pokemon1 = this.trainer1.pokemon_list[trainer1_pokemon_index];
			const pokemon2 = this.trainer2.pokemon_list[trainer2_pokemon_index];

			// check if the pokemon has fainted (HP <= 0), if so, skip to next pokemon
			if (pokemon1.hp <= 0) {
				console.log(
					`Trainer ${this.trainer1.name}'s ${pokemon1.name} has fainted and cannot participate in this battle.`
				);
				trainer1_pokemon_index++;
				continue;
			}
			if (pokemon2.hp <= 0) {
				console.log(
					`Trainer ${this.trainer2.name}'s ${pokemon2.name} has fainted and cannot participate in this battle.`
				);
				trainer2_pokemon_index++;
				continue;
			}

			// if both pokemon have HP > 0, proceed with the battle
			console.log(
				`\nTrainer ${this.trainer1.name} releases ${
					pokemon1.name
				}! HP: ${round_off(pokemon1.hp)}`
			);
			console.log(
				`Trainer ${this.trainer2.name} releases ${
					pokemon2.name
				}! HP: ${round_off(pokemon2.hp)}`
			);

			let dummyhp1 = pokemon1.hp,
				dummyhp2 = pokemon2.hp,
				dummydamage1 = pokemon1.damage,
				dummydamage2 = pokemon2.damage,
				round_counter = 1;
			while (pokemon1.hp > 0 && pokemon2.hp > 0) {
				console.log(`\n******** Battle Round ${round_counter} ********\n`);

				// pokemon 1 attacks pokemon 2
				pokemon1.attack(pokemon2);
				pokemon1.received_damage(pokemon2);
				pokemon1.calculate_damage(pokemon2);
				pokemon2.hp = Math.max(0, pokemon2.hp); // ensure HP not negative
				pokemon1.power_up();
				pokemon2.heal();

				if (pokemon2.hp <= 0) {
					console.log(`${pokemon2.name} HP: 0`);
				} else {
					console.log(`${pokemon2.name} HP: ${round_off(pokemon2.hp)}`);
				}

				if (pokemon2.hp <= 0) {
					console.log(`${pokemon2.name} has fainted!`);
					console.log(`${pokemon1.name} wins this round!`);
					pokemon1.hp = dummyhp1; // resets pokemon2 hp after the round
					pokemon1.damage = dummydamage1; // resets pokemon1 damage after the round
					trainer2_pokemon_index++; // move to next pokemon for trainer 1
					break;
				}

				// pokemon 2 attacks pokemon 1
				pokemon2.attack(pokemon1);
				pokemon2.received_damage(pokemon1);
				pokemon2.calculate_damage(pokemon1);
				pokemon1.hp = Math.max(0, pokemon1.hp); // ensure HP not negative
				pokemon2.power_up();
				pokemon1.heal();

				if (pokemon1.hp <= 0) {
					console.log(`${pokemon1.name} HP: 0`);
				} else {
					console.log(`${pokemon1.name} HP: ${round_off(pokemon1.hp)}`);
				}
				if (pokemon1.hp <= 0) {
					console.log(`${pokemon1.name} has fainted!`);
					console.log(`${pokemon2.name} wins this round!`);
					pokemon2.hp = dummyhp2; // resets pokemon2 hp after the round
					pokemon2.damage = dummydamage2; // resets pokemon2 damage after the round
					trainer1_pokemon_index++; // move to next pokemon for trainer 1
					break;
				}

				round_counter++;
			}

			// check if the battle ended with one trainer's pokemon fainting
			if (trainer1_pokemon_index >= this.trainer1.pokemon_list.length) {
				console.log(`${this.trainer1.name} has been eliminated!`);
				return this.trainer2; // trainer 2 wins
			}

			if (trainer2_pokemon_index >= this.trainer2.pokemon_list.length) {
				console.log(`${this.trainer2.name} has been eliminated!`);
				return this.trainer1; // trainer 1 wins
			}
		}

		console.log("\n*************************************");
	}
}

// class Battle {
// 	constructor(trainer1, trainer2) {
// 		this.trainer1 = trainer1;
// 		this.trainer2 = trainer2;
// 	}

// 	start_battle() {
// 		console.log(
// 			`The battle starts between Trainer ${this.trainer1.name} and Trainer ${this.trainer2.name}!`
// 		);

// 		let trainer1_pokemon_index = 0;
// 		let trainer2_pokemon_index = 0;

// 		while (
// 			trainer1_pokemon_index < this.trainer1.pokemon_list.length &&
// 			trainer2_pokemon_index < this.trainer2.pokemon_list.length
// 		) {
// 			const pokemon1 = this.trainer1.pokemon_list[trainer1_pokemon_index];
// 			const pokemon2 = this.trainer2.pokemon_list[trainer2_pokemon_index];

// 			if (pokemon1.hp <= 0) {
// 				console.log(
// 					`Trainer ${this.trainer1.name}'s ${pokemon1.name} has fainted and cannot participate in this battle.`
// 				);
// 				trainer1_pokemon_index++;
// 				continue;
// 			}
// 			if (pokemon2.hp <= 0) {
// 				console.log(
// 					`Trainer ${this.trainer2.name}'s ${pokemon2.name} has fainted and cannot participate in this battle.`
// 				);
// 				trainer2_pokemon_index++;
// 				continue;
// 			}

// 			console.log(
// 				`\nTrainer ${this.trainer1.name} releases ${
// 					pokemon1.name
// 				}! HP: ${round_off(pokemon1.hp)}`
// 			);
// 			console.log(
// 				`Trainer ${this.trainer2.name} releases ${
// 					pokemon2.name
// 				}! HP: ${round_off(pokemon2.hp)}`
// 			);

// 			while (pokemon1.hp > 0 && pokemon2.hp > 0) {
// 				pokemon1.attack(pokemon2);
// 				pokemon2.hp = Math.max(0, pokemon2.hp);

// 				if (pokemon2.hp <= 0) {
// 					console.log(
// 						`${pokemon2.name} has fainted! ${pokemon1.name} wins this round!`
// 					);
// 					trainer2_pokemon_index++;
// 					break;
// 				}

// 				pokemon2.attack(pokemon1);
// 				pokemon1.hp = Math.max(0, pokemon1.hp);

// 				if (pokemon1.hp <= 0) {
// 					console.log(
// 						`${pokemon1.name} has fainted! ${pokemon2.name} wins this round!`
// 					);
// 					trainer1_pokemon_index++;
// 					break;
// 				}
// 			}
// 		}

// 		if (trainer1_pokemon_index >= this.trainer1.pokemon_list.length) {
// 			console.log(`${this.trainer1.name} has been eliminated!`);
// 			return this.trainer2;
// 		} else if (trainer2_pokemon_index >= this.trainer2.pokemon_list.length) {
// 			console.log(`${this.trainer2.name} has been eliminated!`);
// 			return this.trainer1;
// 		}
// 	}
// }
