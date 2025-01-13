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
	"Tyranitar",
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

		// Check if the input is not a number or out of range
		if (isNaN(trainer_count) || trainer_count < 2 || trainer_count > 5) {
			alert("Please enter a valid number between 2 and 5.");
			trainer_count = null; // Reset to ensure loop continues
		}
	}
} while (
	trainer_count === null ||
	isNaN(trainer_count) ||
	trainer_count < 2 ||
	trainer_count > 5
);

// Prompt for pokemon count
do {
	pokemon_count = prompt(
		"Enter the number of Pokemons for each trainer (between 2 and 5):"
	);

	// Check if user clicked Cancel or input is empty
	if (pokemon_count === null || pokemon_count === "") {
		alert("Input cannot be empty. Please enter a number between 2 and 5.");
	} else {
		pokemon_count = parseInt(pokemon_count);

		// Check if the input is not a number or out of range
		if (isNaN(pokemon_count) || pokemon_count < 2 || pokemon_count > 5) {
			alert("Please enter a valid number between 2 and 5.");
			pokemon_count = null; // Reset to ensure loop continues
		}
	}
} while (
	pokemon_count === null ||
	isNaN(pokemon_count) ||
	pokemon_count < 2 ||
	pokemon_count > 5
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
	} else if (
		["Pikachu", "Electrode", "Jolteon"].includes(pokemon_array[index])
	) {
		pokemon = new ElectricPokemon(
			pokemon_array[index],
			1,
			120 + Math.floor(Math.random() * 10)
		);
	} else if (["Onix", "Geodude", "Tyranitar"].includes(pokemon_array[index])) {
		pokemon = new RockPokemon(
			pokemon_array[index],
			1,
			115 + Math.floor(Math.random() * 20)
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
