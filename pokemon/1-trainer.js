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
