class Trainer {
	constructor(name) {
		this.name = name;
		this.pokemon_list = [];
	}
	// assigning the pokemon object to the trainer
	assign_pokemon(assigned_pokemon) {
		this.pokemon_list.push(assigned_pokemon);
		console.log(
			`${assigned_pokemon.name} has been assigned to Trainer ${this.name}.`
		);
	}
	// return this.pokemon_list[index];
	show_pokemon() {
		console.log(`${this.name}'s Pokemon:`);
		this.pokemon_list.forEach((array, index) => {
			console.log(
				`${index + 1}. ${array.name} (Type: ${array.type}, Level: ${
					array.level
				})`
			);
		}); // iterating all the pokemon stored in the array
	}
	summarize() {
		console.log(`${this.name}'s Pokemon:`);
		this.pokemon_list.forEach((array, index) => {
			// ensure HP is not negative
			const adjusted_hp = array.hp < 0 ? 0 : array.hp;
			console.log(
				`${index + 1}. ${array.name} (Type: ${array.type}, Level: ${
					array.level
				}, HP: ${adjusted_hp})`
			);
		});
	}
}

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

class ElectricPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Electric", level, hp); // calling the base class constructor
	}
	// overriding received_damage
	attack(opponent) {
		console.log(`${this.name} uses Thunderbolt on ${opponent.name}!`);
		super.attack(opponent);
	}
	// overriding received_damage
}

class GrassPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Grass", level, hp);
	}
	attack(opponent) {
		console.log(`${this.name} uses Leaf Storm on ${opponent.name}!`);
		super.attack(opponent);
	}
}

class WaterPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Water", level, hp);
	}
	attack(opponent) {
		console.log(`${this.name} uses Aqua Ring on ${opponent.name}!`);
		super.attack(opponent);
	}
}

class FirePokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Fire", level, hp);
	}
	attack(opponent) {
		console.log(`${this.name} uses Flamethrower on ${opponent.name}!`);
		super.attack(opponent);
	}
}

class RockPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Rock", level, hp);
	}
	attack(opponent) {
		console.log(`${this.name} uses Rock Slide on ${opponent.name}!`);
		super.attack(opponent);
	}
}

class PsychicPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Psychic", level, hp);
	}
	attack(opponent) {
		console.log(`${this.name} uses Psychic Blast on ${opponent.name}!`);
		super.attack(opponent);
	}
}

class IcePokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Ice", level, hp);
	}
	attack(opponent) {
		console.log(`${this.name} uses Blizzard on ${opponent.name}!`);
		super.attack(opponent);
	}
}

class DragonPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Dragon", level, hp);
	}
	attack(opponent) {
		console.log(`${this.name} uses Dragon Pulse on ${opponent.name}!`);
		super.attack(opponent);
	}
}

class FlyingPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Flying", level, hp);
	}
	attack(opponent) {
		console.log(`${this.name} uses Aerial Ace on ${opponent.name}!`);
		super.attack(opponent);
	}
}

class NormalPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Normal", level, hp);
	}
	attack(opponent) {
		console.log(`${this.name} uses Body Slam on ${opponent.name}!`);
		super.attack(opponent);
	}
}

// Pokemon Declaration
const pokemon_array = [
	"Bulbasaur",
	"Charmander",
	"Squirtle",
	"Charizard",
	"Blastoise",
	"Butterfree",
	"Treecko",
	"Electrode",
	"Pidgeotto",
	"Jigglypuff",
	"Mewtwo",
	"Snorlax",
	"Dragonite",
	"Vaporeon",
	"Flareon",
	"Jolteon",
	"Machop",
	"Gengar",
	"Arcanine",
	"Alakazam",
	"Onix",
	"Magikarp",
	"Fearow",
	"Geodude",
];

function shuffle_arrays(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1)); // random index
		[array[i], array[j]] = [array[j], array[i]]; // swap elements
	}
}

const names = [];
shuffle_arrays(pokemon_array);
names.push(...pokemon_array);

// trainer declaration
const ash = new Trainer("Ash");
const brock = new Trainer("Brock");
const misty = new Trainer("Misty");
const leon = new Trainer("Leon");
const lance = new Trainer("Lance");

let trainer_count,
	pokemon_count,
	trainers = [ash, brock];

// prompt for trainers count
do {
	trainer_count = prompt("Enter the number of trainers (between 2 and 5):");

	// Check if user clicked Cancel or input is empty
	if (trainer_count === null || trainer_count === "") {
		alert("Input cannot be empty. Please enter a number between 2 and 5.");
	} else {
		trainer_count = parseInt(trainer_count);

		if (trainer_count < 2 || trainer_count > 5) {
			console.log("Please enter a valid number between 2 and 5.");
		}
	}
} while (
	trainer_count === null ||
	trainer_count < 2 ||
	trainer_count > 5 ||
	trainer_count === ""
);

// prompt for pokemon count

do {
	pokemon_count = prompt(
		"Enter the number of Pokemons for each trainer (between 2 and 5):"
	);

	// Check if user clicked Cancel or input is empty
	if (pokemon_count === null || pokemon_count === "") {
		alert("Input cannot be empty. Please enter a number between 2 and 5.");
	} else {
		pokemon_count = parseInt(pokemon_count);

		if (pokemon_count < 2 || pokemon_count > 5) {
			console.log("Please enter a valid number between 2 and 5.");
		}
	}
} while (
	pokemon_count < 2 ||
	pokemon_count > 5 ||
	pokemon_count === null ||
	pokemon_count === ""
);

// assign pikachu to ash
let pikachu = new ElectricPokemon("Pikachu", 1, 110);
ash.assign_pokemon(pikachu);

let pokemon_index = 0;
// pokemon assigned to their trainers
for (let index = 0; index < trainer_count * pokemon_count; index++) {
	let pokemon;
	if (["Bulbasaur", "Butterfree", "Treecko"].includes(pokemon_array[index])) {
		pokemon = new GrassPokemon(
			pokemon_array[index],
			1,
			95 + Math.floor(Math.random() * 15)
		);
	} else if (
		["Charmander", "Charizard", "Flareon", "Arcanine"].includes(
			pokemon_array[index]
		)
	) {
		pokemon = new FirePokemon(
			pokemon_array[index],
			1,
			110 + Math.floor(Math.random() * 15)
		);
	} else if (
		["Squirtle", "Blastoise", "Vaporeon", "Magikarp"].includes(
			pokemon_array[index]
		)
	) {
		pokemon = new WaterPokemon(
			pokemon_array[index],
			1,
			100 + Math.floor(Math.random() * 20)
		);
	} else if (["Electrode", "Jolteon"].includes(pokemon_array[index])) {
		pokemon = new ElectricPokemon(
			pokemon_array[index],
			1,
			110 + Math.floor(Math.random() * 10)
		);
	} else if (["Onix", "Geodude", "Tyranitar"].includes(pokemon_array[index])) {
		pokemon = new RockPokemon(
			pokemon_array[index],
			1,
			120 + Math.floor(Math.random() * 20)
		);
	} else if (["Alakazam", "Mewtwo"].includes(pokemon_array[index])) {
		//"Abra"
		pokemon = new PsychicPokemon(
			pokemon_array[index],
			1,
			100 + Math.floor(Math.random() * 15)
		);
	} else if (["Dragonite"].includes(pokemon_array[index])) {
		pokemon = new DragonPokemon(
			pokemon_array[index],
			1,
			130 + Math.floor(Math.random() * 20)
		);
	} else if (["Pidgeotto", "Fearow"].includes(pokemon_array[index])) {
		pokemon = new FlyingPokemon(
			pokemon_array[index],
			1,
			105 + Math.floor(Math.random() * 15)
		);
	} else if (
		["Jigglypuff", "Snorlax", "Machop", "Gengar"].includes(pokemon_array[index])
	) {
		pokemon = new NormalPokemon(
			pokemon_array[index],
			1,
			100 + Math.floor(Math.random() * 15)
		);
	} else {
		// default case for any unmatched pokemon
		pokemon = new NormalPokemon(
			pokemon_array[index],
			1,
			100 + Math.floor(Math.random() * 15)
		);
	}

	// assign pokemon to trainers
	if (index < pokemon_count * 1 - 1) {
		// ash pokemon: 0, 1, 2, 3, ...
		ash.assign_pokemon(pokemon);
	} else if (index >= pokemon_count * 1 && index < pokemon_count * 2) {
		// brock pokemon: 4, 5, 6, 7, ...
		brock.assign_pokemon(pokemon);
	} else if (index >= pokemon_count * 2 && index < pokemon_count * 3) {
		// misty pokemon: 9, 10, 11, 12, ...
		misty.assign_pokemon(pokemon);
	} else if (
		index >= pokemon_count * 3 &&
		index < pokemon_count * 4 &&
		trainer_count >= 4
	) {
		// leon pokemon: 14, 15, 16, 17, ... (only for 4 or more trainers)
		leon.assign_pokemon(pokemon);
	} else if (
		index >= pokemon_count * 4 &&
		index < pokemon_count * 5 &&
		trainer_count === 5
	) {
		// lance pokemon: 19, 20, 21, 22, ... (only for 5 trainers)
		lance.assign_pokemon(pokemon);
	}
}

console.log("\n****************************************\n");

ash.show_pokemon();
console.log(" ");
brock.show_pokemon();

if (trainer_count === 5) {
	// show all for 5 trainers
	trainers.push(misty);
	trainers.push(leon);
	trainers.push(lance);

	console.log(" ");
	misty.show_pokemon();
	console.log(" ");
	leon.show_pokemon();
	console.log(" ");
	lance.show_pokemon();
} else if (trainer_count === 4) {
	// show misty and leon for 4 trainers
	trainers.push(misty);
	trainers.push(leon);

	console.log(" ");
	misty.show_pokemon();
	console.log(" ");
	leon.show_pokemon();
} else if (trainer_count >= 3) {
	// show misty for 3 or more trainers
	trainers.push(misty);

	console.log(" ");
	misty.show_pokemon();
}

console.log("\n****************************************\n");

do {
	var input = prompt("Do you want to start the battle? [Y/N]");
	if (input === "y" || input === "Y") {
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

		// const trainers = [ash, brock, misty, leon, lance];

		function shuffle_array(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]]; // swap elements
			}
		}

		while (trainers.length > 1) {
			// randomize the trainers
			shuffle_array(trainers);

			// select the first two trainers
			const trainer1 = trainers[0];
			const trainer2 = trainers[1];

			// start the battle
			const battle = new Battle(trainer1, trainer2);
			const winner = battle.start_battle();

			// eliminate the loser and continue with the winner
			trainers.shift();
			trainers[0] = winner;
		}

		console.log(`\nThe final winner is ${trainers[0].name}!`);

		console.log(`********* END OF TOURNAMENT *********`);

		console.log(`\n************* Summary ***************`);
		ash.summarize();
		console.log(" ");
		brock.summarize();

		if (trainer_count === 5) {
			// show all for 5 trainers
			console.log(" ");
			misty.summarize();
			console.log(" ");
			leon.summarize();
			console.log(" ");
			lance.summarize();
		} else if (trainer_count === 4) {
			// show misty and leon for 4 trainers
			console.log(" ");
			misty.summarize();
			console.log(" ");
			leon.summarize();
		} else if (trainer_count >= 3) {
			// show misty for 3 or more trainers
			console.log(" ");
			misty.summarize();
		}
		console.log("\n****************************************\n");
		break;
	} else if (input === "n" || input === "N") {
		console.log("Okay.");
		break;
	} else if (input === null || input.trim() === "") {
		location.reload();
	} else {
		console.log("Invalid input! Please try again!");
	}
} while (input);

function round_off(num) {
	if (typeof num === "number") {
		return parseFloat(num.toFixed(2));
	}
	return num; // Return non-numeric values as they are
}
