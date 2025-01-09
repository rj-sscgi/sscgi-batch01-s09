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

// assign pikachu to ash
let pikachu = new ElectricPokemon("Pikachu", 1, 110);
ash.assign_pokemon(pikachu);

// pokemon assigned to their trainers
for (let index = 0; index < names.length; index++) {
	let pokemon;
	// use the shuffled 'names' array instead of pokemon_array
	if (names[index] === "Bulbasaur") {
		pokemon = new GrassPokemon(names[index], 1, 100);
	} else if (names[index] === "Charmander") {
		pokemon = new FirePokemon(names[index], 1, 110);
	} else if (names[index] === "Squirtle") {
		pokemon = new WaterPokemon(names[index], 1, 100);
	} else if (names[index] === "Charizard") {
		pokemon = new FirePokemon(names[index], 1, 110);
	} else if (names[index] === "Blastoise") {
		pokemon = new WaterPokemon(names[index], 1, 100);
	} else if (names[index] === "Butterfree") {
		pokemon = new GrassPokemon(names[index], 1, 95);
	} else if (names[index] === "Treecko") {
		pokemon = new GrassPokemon(names[index], 1, 95);
	} else if (names[index] === "Electrode") {
		pokemon = new ElectricPokemon(names[index], 1, 110);
	}

	if (index <= 1) {
		ash.assign_pokemon(pokemon);
	} else if (index >= 2 && index < 5) {
		brock.assign_pokemon(pokemon); // brock receives pokemon 1,2,3
	} else if (index >= 5 && index < 9) {
		misty.assign_pokemon(pokemon); // misty receives pokemon 4,5,6
	}
}

console.log("\n****************************************\n");
ash.show_pokemon();
console.log(" ");
brock.show_pokemon();
console.log(" ");
misty.show_pokemon();
console.log("\n****************************************\n");
