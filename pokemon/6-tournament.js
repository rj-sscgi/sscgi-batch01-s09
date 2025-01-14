class Tournament {
	constructor(players) {
		this.players = players; // array of trainers
	}

	start_tournament() {
		console.log("\n********* 🏆 Pokémon Tournament 🏆 *********\n");

		// 2 trainers battle / single game battle
		if (trainer_count == 2) {
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
			this.players.forEach((trainer) => {
				console.log(`\nTrainer ${trainer.name}'s Pokemon after battle:`);
				trainer.summarize();
			});

			console.log(" ");
			for (const trainer in results) {
				console.log(`Trainer ${trainer}: ${results[trainer]} win`);
			}

			if (winner) {
				console.log(`\n🏆 The champion is Trainer ${winner.name}!`);
			} else {
				console.log("\n🏆 The tournament ended in a draw!");
			}
		}

		// 3 trainers battle
		else if (trainer_count == 3) {
			// round-robin tournament
			console.log("⚔️ Round-Robin Tournament ⚔️");

			const results = {};

			//creates a key in the results object using trainer.name and sets the initial score = 0
			this.players.forEach((trainer) => (results[trainer.name] = 0));

			for (let i = 0; i < trainer_count; i++) {
				for (let j = i + 1; j < trainer_count; j++) {
					const battle = new Battle(this.players[i], this.players[j]);
					let winner = battle.start_battle();

					if (!winner) {
						console.error("🚨 Battle did not return a valid winner."); // error handling
						return;
					}
					results[winner.name]++; // increments the score of the winning trainer
				}
			}

			this.players.forEach((trainer) => {
				// shows a summary using the summarize() function
				console.log(`\nTrainer ${trainer.name}'s Pokemon after battle:`);
				trainer.summarize();
			});

			console.log("\n🏆 Tournament Results:");
			for (const trainer in results) {
				// shows how many win a trainer have in the round robin after the battle
				console.log(`Trainer ${trainer}: ${results[trainer]} wins`);
			}

			// compare the scores of the trainer and store it in champion
			const champion = Object.keys(results).reduce((a, b) =>
				results[a] > results[b] ? a : b
			);
			console.log(`\n🏆 The champion is Trainer ${champion}!`);
		}

		// 4 trainers battle
		else if (trainer_count == 4) {
			// double-elimination bracket
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
			while (winners_bracket.length > 1 || losers_bracket.length > 1) {
				console.log("\n🔥 Starting a new round of battles...");

				const next_round_winners = [];
				const next_round_losers = [];

				// Winners' bracket battles
				for (let i = 0; i < winners_bracket.length; i += 2) {
					if (i + 1 >= winners_bracket.length) {
						// odd number of players, auto-advance
						next_round_winners.push(winners_bracket[i]);
						break;
					}

					const battle = new Battle(winners_bracket[i], winners_bracket[i + 1]);
					const winner = battle.start_battle();
					const loser =
						winner === winners_bracket[i]
							? winners_bracket[i + 1]
							: winners_bracket[i];

					loser.losses++;

					// Eliminate players with 2 losses
					if (loser.losses === 2) {
						console.log(`❌ Trainer ${loser.name} has been eliminated!`);
						eliminated_players.push(loser);
					} else {
						console.log(
							`🔄 Trainer ${loser.name} moves to the losers' bracket.`
						);
						next_round_losers.push(loser);
					}

					// Advance winner
					next_round_winners.push(winner);

					// Track results
					results[winner.name]++;
				}

				winners_bracket = next_round_winners;

				// Losers' bracket battles
				if (losers_bracket.length > 0) {
					console.log("\n⚔️ Battles in the losers' bracket!");
					const updated_losers = [];

					for (let i = 0; i < losers_bracket.length; i += 2) {
						if (i + 1 >= losers_bracket.length) {
							// Odd number of players, auto-advance
							console.log(
								`🔄 Trainer ${losers_bracket[i].name} auto-advances in the losers' bracket.`
							);
							updated_losers.push(losers_bracket[i]);
							continue;
						}

						const battle = new Battle(losers_bracket[i], losers_bracket[i + 1]);
						const winner = battle.start_battle();
						const loser =
							winner === losers_bracket[i]
								? losers_bracket[i + 1]
								: losers_bracket[i];

						loser.losses++;

						// Eliminate players with 2 losses
						if (loser.losses === 2) {
							console.log(`❌ Trainer ${loser.name} has been eliminated!`);
							eliminated_players.push(loser);
						} else {
							console.log(
								`🔄 Trainer ${loser.name} continues in the losers' bracket.`
							);
							updated_losers.push(loser);
						}

						// Advance winner
						updated_losers.push(winner);
						console.log(
							`🏆 Trainer ${winner.name} wins the loser's bracket tournament!`
						);

						// Track results
						results[winner.name]++;
					}

					losers_bracket = updated_losers.concat(next_round_losers);
				} else {
					losers_bracket = next_round_losers;
				}
			}

			// Final battle between the winners of both brackets
			if (winners_bracket.length === 1 && losers_bracket.length === 1) {
				console.log(`
					

			🔥 ******************** FINAL BATTLE ******************** 🔥
			🔥 ******** Winner's Bracket vs. Loser's Bracket ******** 🔥
			`);

				const final_battle = new Battle(winners_bracket[0], losers_bracket[0]);
				const final_winner = final_battle.start_battle();
				console.log(`\n🏆 Trainer ${final_winner.name} wins the tournament!`);

				// Track the final results
				results[final_winner.name]++;
			}

			// final winner
			console.log("\n🏆 ******** Tournament Results ******** 🏆");

			this.players.forEach((trainer) => {
				// shows a summary using the summarize() function
				console.log(`Trainer ${trainer.name}'s Pokemon after battle:`);
				trainer.summarize();
				console.log(" ");
			});

			for (const trainer in results) {
				console.log(`Trainer ${trainer}: ${results[trainer]} wins`);
			}

			const champion = Object.keys(results).reduce((a, b) =>
				results[a] > results[b] ? a : b
			);
			console.log(`\n🏆 The champion is Trainer ${champion}!`);
		}

		// 5 trainers battle
		else if (trainer_count == 5) {
			// double-elimination bracket
			console.log("⚔️ Double Elimination Tournament ⚔️");

			let winners_bracket = [...this.players]; // initial players
			let losers_bracket = [];
			let eliminated_players = [];
			let results = {}; // initialize results to track wins
			let advanced_player,
				additional_player = [];

			// initialize losses and wins for all players
			this.players.forEach((player) => {
				player.losses = 0;
				results[player.name] = 0; // initialize win count for each player
			});

			// double-elimination phase
			while (winners_bracket.length > 1 || losers_bracket.length > 1) {
				console.log("\n🔥 Starting a new round of battles...");

				const next_round_winners = [];
				const next_round_losers = [];

				// winners' bracket battles
				for (let i = 0; i < winners_bracket.length; i += 2) {
					if (i + 1 >= winners_bracket.length) {
						// odd number of players, auto-advance
						advanced_player = winners_bracket[i];
						break;
					}

					const battle = new Battle(winners_bracket[i], winners_bracket[i + 1]);
					const winner = battle.start_battle();
					const loser =
						winner === winners_bracket[i]
							? winners_bracket[i + 1]
							: winners_bracket[i];

					loser.losses++;

					// eliminate players with 2 losses
					if (loser.losses === 2) {
						console.log(`❌ Trainer ${loser.name} has been eliminated!`);
						eliminated_players.push(loser);
					} else {
						console.log(
							`🔄 Trainer ${loser.name} moves to the losers' bracket.`
						);
						next_round_losers.push(loser);
					}

					// Advance winner
					next_round_winners.push(winner);

					// Track results
					results[winner.name]++;
				}

				winners_bracket = next_round_winners;
				losers_bracket = next_round_losers;

				console.log(
					"Updated Winners Bracket:",
					winners_bracket.map((p) => p.name)
				);
				console.log("eeee nxt win " + next_round_winners.length);
				console.log("yyyy nxt lose " + next_round_losers.length);
				console.log("aaaaa winner bracket" + winners_bracket);
				console.log("ssssss loser brac" + losers_bracket);
				console.log("2222 elimn" + eliminated_players);

				// Losers' bracket battles
				if (losers_bracket.length > 1) {
					console.log("\n⚔️ Battles in the losers' bracket!");
					// const updated_losers = [];

					for (let i = 0; i < losers_bracket.length; i += 2) {
						if (i + 1 >= losers_bracket.length) {
							// Odd number of players, auto-advance
							console.log(
								`🔄 Trainer ${losers_bracket[i].name} auto-advances in the losers' bracket.`
							);
							updated_losers.push(losers_bracket[i]);
							break;
						}

						const battle = new Battle(losers_bracket[i], losers_bracket[i + 1]);
						const winner = battle.start_battle();
						const loser =
							winner === losers_bracket[i]
								? losers_bracket[i + 1]
								: losers_bracket[i];

						loser.losses++;

						// Eliminate players with 2 losses
						if (loser.losses === 2) {
							console.log(`❌ Trainer ${loser.name} has been eliminated!`);
							eliminated_players.push(loser);
						}
						// else {
						// 	console.log(
						// 		`🔄 Trainer ${loser.name} continues in the losers' bracket.`
						// 	);

						// }
						// updated_losers.push(loser);
						// Advance winner

						console.log(
							`🏆 Trainer ${winner.name} wins the loser's bracket tournament!`
						);
						additional_player.push(winner);

						// Track results
						results[winner.name]++;
					}
				}
			}

			// fight the advanced player and a random winner
			let random_player;
			do {
				const random_index = Math.floor(Math.random() * winners_bracket.length);
				random_player = winners_bracket[random_index];
			} while (random_player === advanced_player); // Ensure random_player is not the advanced one

			console.log("\n🔥 Winner's Bracket Match 🔥");
			console.log(
				`🏅 Advanced Trainer ${advanced_player.name} will battle Trainer ${random_player.name}!`
			);

			const ad_battle = new Battle(advanced_player, random_player);
			const ad_winner = ad_battle.start_battle();

			console.log(`🎉 Trainer ${ad_winner.name} moves to the winner bracket!`);
			results[ad_winner.name]++;
			additional_player.push(ad_winner);
			additional_player.push(losers_bracket[0]);
			let final_players = additional_player;

			console.log(
				"add",
				additional_player.map((p) => p.name)
			);

			console.log(
				"win",
				winners_bracket.map((p) => p.name)
			);

			console.log(
				"lose",
				losers_bracket.map((p) => p.name)
			);

			// Final battle between the winners of both brackets
			// if (winners_bracket.length === 1 && losers_bracket.length === 1) {
			// 	console.log(`

			// 🔥 ******** Winner's Bracket vs. Loser's Bracket ******** 🔥
			// 			`);

			// 	const final_battle = new Battle(winners_bracket[0], losers_bracket[0]);
			// 	const final_winner = final_battle.start_battle();
			// 	console.log(`\n🏆 Trainer ${final_winner.name} wins the tournament!`);

			// 	// Track the final results
			// 	results[final_winner.name]++;
			// }

			// transition to round-robin tournament if there are 3 or fewer players left
			if (final_players.length == 3) {
				console.log("\n⚔️ Round-Robin Tournament for the Final Players ⚔️");

				const results = {};
				winners_bracket.forEach((trainer) => (results[trainer.name] = 0));

				for (let i = 0; i < final_players.length; i++) {
					for (let j = i + 1; j < final_players.length; j++) {
						const battle = new Battle(final_players[i], final_players[j]);
						const winner = battle.start_battle();
						results[winner.name]++;
					}
				}
			}

			// final winner
			console.log("\n🏆 ******** Round-Robin Tournament Results ******** 🏆");

			this.players.forEach((trainer) => {
				// shows a summary using the summarize() function
				console.log(`Trainer ${trainer.name}'s Pokemon after battle:`);
				trainer.summarize();
				console.log(" ");
			});

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
