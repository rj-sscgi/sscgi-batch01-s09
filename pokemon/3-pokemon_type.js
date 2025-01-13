class ElectricPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Electric", level, hp); // calling the base class constructor
	}
	attack(opponent) {
		console.log(
			`\x1b[33m${this.name} uses Thunderbolt on ${opponent.name}!\x1b[0m`
		); // Yellow text
		super.attack(opponent);
	}
}

class GrassPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Grass", level, hp);
	}
	attack(opponent) {
		console.log(
			`\x1b[32m${this.name} uses Leaf Storm on ${opponent.name}!\x1b[0m`
		); // Green text
		super.attack(opponent);
	}
}

class WaterPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Water", level, hp);
	}
	attack(opponent) {
		console.log(
			`\x1b[34m${this.name} uses Aqua Ring on ${opponent.name}!\x1b[0m`
		); // Blue text
		super.attack(opponent);
	}
}

class FirePokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Fire", level, hp);
	}
	attack(opponent) {
		console.log(
			`\x1b[31m${this.name} uses Flamethrower on ${opponent.name}!\x1b[0m`
		); // Red text
		super.attack(opponent);
	}
}

class RockPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Rock", level, hp);
	}
	attack(opponent) {
		console.log(
			`\x1b[90m${this.name} uses Rock Slide on ${opponent.name}!\x1b[0m`
		); // Gray text
		super.attack(opponent);
	}
}

class PsychicPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Psychic", level, hp);
	}
	attack(opponent) {
		console.log(
			`\x1b[35m${this.name} uses Psychic Blast on ${opponent.name}!\x1b[0m`
		); // Magenta text
		super.attack(opponent);
	}
}

class IcePokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Ice", level, hp);
	}
	attack(opponent) {
		console.log(
			`\x1b[36m${this.name} uses Blizzard on ${opponent.name}!\x1b[0m`
		); // Cyan text
		super.attack(opponent);
	}
}

class DragonPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Dragon", level, hp);
	}
	attack(opponent) {
		console.log(
			`\x1b[31;1m${this.name} uses Dragon Pulse on ${opponent.name}!\x1b[0m`
		); // Bright red text
		super.attack(opponent);
	}
}

class FlyingPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Flying", level, hp);
	}
	attack(opponent) {
		console.log(
			`\x1b[36;1m${this.name} uses Aerial Ace on ${opponent.name}!\x1b[0m`
		); // Bright cyan text
		super.attack(opponent);
	}
}

class NormalPokemon extends Pokemon {
	constructor(name, level, hp) {
		super(name, "Normal", level, hp);
	}
	attack(opponent) {
		console.log(
			`\x1b[33;1m${this.name} uses Body Slam on ${opponent.name}!\x1b[0m`
		); // Bright yellow text
		super.attack(opponent);
	}
}
