class Trainer {
	constructor(name) {
		this.name = name;
		this.pokemon_list = [];
		this.battles_fought = 0;
		this.trainer_level = 1;
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
		console.log(`Trainer ${this.name}'s Pokemon:`);
		this.pokemon_list.forEach((pokemon, index) => {
			// set icon and color based on pokemon type
			let type_icon = "";
			let type_color = "";

			switch (pokemon.type.toLowerCase()) {
				case "fire":
					type_icon = "🔥";
					type_color = "\x1b[31m"; // red color
					break;
				case "water":
					type_icon = "💧";
					type_color = "\x1b[34m"; // blue color
					break;
				case "grass":
					type_icon = "🌿";
					type_color = "\x1b[32m"; // green color
					break;
				case "electric":
					type_icon = "⚡";
					type_color = "\x1b[33m"; // yellow color
					break;
				case "rock":
					type_icon = "⛏️";
					type_color = "\x1b[90m"; // gray color
					break;
				case "psychic":
					type_icon = "🧠";
					type_color = "\x1b[35m"; // magenta color
					break;
				case "ice":
					type_icon = "❄️";
					type_color = "\x1b[36m"; // cyan color
					break;
				case "dragon":
					type_icon = "🐉";
					type_color = "\x1b[31;1m"; // bright red color
					break;
				case "flying":
					type_icon = "🕊️";
					type_color = "\x1b[36;1m"; // bight cyan color
					break;
				case "normal":
					type_icon = "🌟";
					type_color = "\x1b[33;1m"; // bright yellow color
					break;
				default:
					type_icon = "✨";
					type_color = "\x1b[36m"; // default cyan color for others
			}

			console.log(
				`${index + 1}. ${type_color}${
					pokemon.name
				} ${type_icon}\x1b[0m (Type: ${pokemon.type}, Level: ${pokemon.level})`
			);
		});
	}

	level_up() {
		let dummy = this.trainer_level;
		this.trainer_level++;
		console.log(
			`🎉 Trainer ${this.name} leveled up! Level ${dummy} -> ${dummy + 1}`
		);
		this.pokemon_list.forEach((pokemon) => {
			let chance = Math.random() * 100;
			if (chance < 40 && this.trainer_level >= 2) {
				if (pokemon.hp <= 0) {
					pokemon.hp = Math.floor(pokemon.max_hp / 2); // revive fainted pokemon
					console.log(
						`🔄 ${pokemon.name} has been revived with ${pokemon.hp} HP!`
					);
				}
			}
		});
	}

	summarize() {
		console.log(`Level ${this.trainer_level} - Trainer ${this.name}:`);
		this.pokemon_list.forEach((pokemon, index) => {
			// Ensure HP is not negative
			const adjusted_hp = pokemon.hp < 0 ? 0 : pokemon.hp;

			// Set icon and color based on Pokemon type
			let type_icon = "";
			let type_color = "";

			switch (pokemon.type.toLowerCase()) {
				case "fire":
					type_icon = "🔥";
					type_color = "\x1b[31m"; // red color
					break;
				case "water":
					type_icon = "💧";
					type_color = "\x1b[34m"; // blue color
					break;
				case "grass":
					type_icon = "🌿";
					type_color = "\x1b[32m"; // green color
					break;
				case "electric":
					type_icon = "⚡";
					type_color = "\x1b[33m"; // yellow color
					break;
				case "rock":
					type_icon = "⛏️";
					type_color = "\x1b[90m"; // gray color
					break;
				case "psychic":
					type_icon = "🧠";
					type_color = "\x1b[35m"; // magenta color
					break;
				case "ice":
					type_icon = "❄️";
					type_color = "\x1b[36m"; // cyan color
					break;
				case "dragon":
					type_icon = "🐉";
					type_color = "\x1b[31;1m"; // bright red color
					break;
				case "flying":
					type_icon = "🕊️";
					type_color = "\x1b[36;1m"; // bright cyan color
					break;
				case "normal":
					type_icon = "🌟";
					type_color = "\x1b[33;1m"; // bright yellow color
					break;
				default:
					type_icon = "✨";
					type_color = "\x1b[36m"; // default cyan color for others
			}

			console.log(
				`${index + 1}. ${type_color}${
					pokemon.name
				} ${type_icon}\x1b[0m (Type: ${pokemon.type}, Level: ${
					pokemon.level
				}, HP: ${adjusted_hp}, Damage: ${round_off(pokemon.damage)})`
			);
		});
	}
}
