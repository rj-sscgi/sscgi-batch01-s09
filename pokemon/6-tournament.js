class Tournament {
	constructor(players) {
		this.players = players; // Array of trainers
	}

	start_tournament() {
		console.log("\n********* 🏆 Pokémon Tournament 🏆 *********\n");

		const trainer_count = this.players.length;

		if (trainer_count === 2) {
			// Single game battle
			let results = {
				[this.players[0].name]: 0,
				[this.players[1].name]: 0,
			};

			console.log(`\n🔥 The battle begins...`);

			const battle = new Battle(this.players[0], this.players[1]);
			const winner = battle.start_battle();

			if (winner) {
				results[winner.name]++;
				console.log(`🏆 ${winner.name} wins the game!`);
			} else {
				console.log("🚫 The battle ended in a draw.");
			}

			console.log("\n🏆 Final Results:");
			for (const trainer in results) {
				console.log(`Trainer ${trainer}: ${results[trainer]} win`);
			}

			if (winner) {
				console.log(`\n🏆 The champion is Trainer ${winner.name}!`);
			} else {
				console.log("\n🏆 The tournament ended in a draw!");
			}
		} else if (trainer_count === 3) {
			// Round-robin tournament
			console.log("⚔️ Round-Robin Tournament ⚔️");

			const results = {};
			this.players.forEach((trainer) => (results[trainer.name] = 0));

			for (let i = 0; i < trainer_count; i++) {
				for (let j = i + 1; j < trainer_count; j++) {
					console.log(
						`\n🔥 Battle between Trainer ${this.players[i].name} and Trainer ${this.players[j].name}`
					);
					const battle = new Battle(this.players[i], this.players[j]);
					let winner = battle.start_battle();

					if (!winner) {
						console.error("🚨 Battle did not return a valid winner.");
						return;
					}
					results[winner.name]++;
				}
			}

			console.log("\n🏆 Tournament Results:");
			for (const trainer in results) {
				console.log(`Trainer ${trainer}: ${results[trainer]} wins`);
			}

			const champion = Object.keys(results).reduce((a, b) =>
				results[a] > results[b] ? a : b
			);
			console.log(`\n🏆 The champion is Trainer ${champion}!`);
		} else if (trainer_count === 4) {
			// Double-elimination bracket
			console.log("⚔️ Double Elimination Tournament ⚔️");

			let winners_bracket = [...this.players]; // Initial players
			let losers_bracket = [];
			let eliminated_players = [];
			let results = {}; // Initialize results to track wins

			// Initialize losses and wins for all players
			this.players.forEach((player) => {
				player.losses = 0;
				results[player.name] = 0; // Initialize win count for each player
			});

			// Double-elimination phase
			while (winners_bracket.length > 1) {
				console.log("\n🔥 Starting a new round of battles...");
				const next_round_winners = [];
				const next_round_losers = [];

				for (let i = 0; i < winners_bracket.length; i += 2) {
					if (i + 1 >= winners_bracket.length) {
						// Odd number of players, auto-advance
						next_round_winners.push(winners_bracket[i]);
						break;
					}

					const battle = new Battle(winners_bracket[i], winners_bracket[i + 1]);
					const winner = battle.start_battle();
					const loser =
						winner === winners_bracket[i]
							? winners_bracket[i + 1]
							: winners_bracket[i];

					// Increment the loser's losses
					loser.losses++;

					// If the player has lost twice, they are eliminated
					if (loser.losses === 2) {
						eliminated_players.push(loser);
						losers_bracket = losers_bracket.filter(
							(player) => player !== loser
						);
					}

					// Move winners to the next round
					next_round_winners.push(winner);
					next_round_losers.push(loser);

					// Increment the winner's win count
					results[winner.name]++;
				}

				// Move to the next round
				winners_bracket = next_round_winners;
				losers_bracket = losers_bracket.concat(next_round_losers);

				// Eliminate players from the losers bracket with 2 losses
				if (losers_bracket.length > 2) {
					const eliminated = losers_bracket.pop();
					eliminated_players.push(eliminated);
				}
			}

			// Final winner
			const champion = winners_bracket[0];
			console.log("\n🏆 Tournament Results:");
			for (const trainer in results) {
				console.log(`Trainer ${trainer}: ${results[trainer]} wins`);
			}
			console.log(`\n🏆 The champion is Trainer ${champion.name}!`);
		} else if (trainer_count === 5) {
			// Double-elimination bracket
			console.log("⚔️ Double Elimination Tournament ⚔️");

			let winners_bracket = [...this.players]; // Initial players
			let losers_bracket = [];
			let eliminated_players = [];

			// Initialize losses for all players
			this.players.forEach((player) => {
				player.losses = 0;
			});

			// Double-elimination phase
			while (winners_bracket.length > 3) {
				// Run until we have 3 or fewer players in the winners bracket
				console.log("\n🔥 Starting a new round of battles...");
				const next_round_winners = [];
				const next_round_losers = [];

				for (let i = 0; i < winners_bracket.length; i += 2) {
					if (i + 1 >= winners_bracket.length) {
						// Odd number of players, auto-advance
						next_round_winners.push(winners_bracket[i]);
						break;
					}

					const battle = new Battle(winners_bracket[i], winners_bracket[i + 1]);
					const winner = battle.start_battle();
					const loser =
						winner === winners_bracket[i]
							? winners_bracket[i + 1]
							: winners_bracket[i];

					// Increment the loser's losses
					loser.losses++;

					// If the player has lost twice, they are eliminated
					if (loser.losses === 2) {
						eliminated_players.push(loser);
						losers_bracket = losers_bracket.filter(
							(player) => player !== loser
						);
					}

					// Move winners to the next round
					next_round_winners.push(winner);
					next_round_losers.push(loser);
				}

				// Move to the next round
				winners_bracket = next_round_winners;
				losers_bracket = losers_bracket.concat(next_round_losers);

				// Eliminate players from the losers bracket with 2 losses
				if (losers_bracket.length > 2) {
					const eliminated = losers_bracket.pop();
					eliminated_players.push(eliminated);
				}
			}

			// Transition to round-robin tournament if there are 3 or fewer players left
			if (winners_bracket.length === 3) {
				console.log("\n⚔️ Round-Robin Tournament for the Final Players ⚔️");

				const results = {};
				winners_bracket.forEach((trainer) => (results[trainer.name] = 0));

				for (let i = 0; i < winners_bracket.length; i++) {
					for (let j = i + 1; j < winners_bracket.length; j++) {
						console.log(
							`\n🔥 Battle between Trainer ${winners_bracket[i].name} and Trainer ${winners_bracket[j].name}`
						);
						const battle = new Battle(winners_bracket[i], winners_bracket[j]);
						const winner = battle.start_battle();
						results[winner.name]++;
					}
				}

				console.log("\n🏆 Round-Robin Tournament Results:");
				for (const trainer in results) {
					console.log(`Trainer ${trainer}: ${results[trainer]} wins`);
				}

				const champion = Object.keys(results).reduce((a, b) =>
					results[a] > results[b] ? a : b
				);
				console.log(`\n🏆 The champion is Trainer ${champion}!`);
			}
		}
	}
}

// Example usage
// const tournament = new Tournament(trainers); // Adjust based on user input
// tournament.start_tournament();
