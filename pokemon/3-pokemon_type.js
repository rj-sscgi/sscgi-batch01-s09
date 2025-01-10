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
