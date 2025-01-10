do {
	var input = prompt("Do you want to start the battle? [Y/N]");
	if (input === "y" || input === "Y") {
		// Create a new Tournament with the trainers
		if (input === "y" || input === "Y") {
			function shuffle_array(array) {
				for (let i = array.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[array[i], array[j]] = [array[j], array[i]]; // Swap elements
				}
			}

			const active_trainers = [...trainers]; // Copy of trainers array

			shuffle_array(active_trainers);
			const tournament = new Tournament(active_trainers); // assuming trainers is an array of trainer objects
			tournament.start_tournament(); // This will handle the tournament based on trainer count
			break;
		}
	} else if (input === "n" || input === "N") {
		console.log("Okay.");
		break;
	} else if (input === null || input.trim() === "") {
		alert("Input cannot be empty. Please try again!");
	} else {
		alert("Invalid input! Please enter Y or N.");
	}
} while (true);

// do {
// 	var input = prompt("Do you want to start the battle? [Y/N]");
// 	if (input === "y" || input === "Y") {
// 		function shuffle_array(array) {
// 			for (let i = array.length - 1; i > 0; i--) {
// 				const j = Math.floor(Math.random() * (i + 1));
// 				[array[i], array[j]] = [array[j], array[i]]; // Swap elements
// 			}
// 		}

// 		const active_trainers = [...trainers]; // Copy of trainers array

// 		while (active_trainers.length > 1) {
// 			// Randomize the trainers
// 			shuffle_array(active_trainers);

// 			// Select the first two trainers
// 			const trainer1 = active_trainers.shift();
// 			const trainer2 = active_trainers.shift();

// 			// Start the battle

// 			const battle = new Battle(trainer1, trainer2);
// 			const winner = battle.start_battle();

// 			// Advance the winner
// 			active_trainers.push(winner);
// 		}

// 		const final_winner = active_trainers[0];
// 		console.log(`\n🏆 The final winner is Trainer ${final_winner.name}! 🏆`);
// 		console.log("********* END OF TOURNAMENT *********");

// 		console.log(`\n************* Summary ***************`);
// 		ash.summarize();
// 		brock.summarize();

// 		if (trainer_count === 5) {
// 			console.log(" ");
// 			misty.summarize();
// 			console.log(" ");
// 			leon.summarize();
// 			console.log(" ");
// 			lance.summarize();
// 		} else if (trainer_count === 4) {
// 			console.log(" ");
// 			misty.summarize();
// 			console.log(" ");
// 			leon.summarize();
// 		} else if (trainer_count >= 3) {
// 			console.log(" ");
// 			misty.summarize();
// 		}
// 		console.log("\n****************************************\n");
// 		break;
// 	} else if (input === "n" || input === "N") {
// 		console.log("Okay.");
// 		break;
// 	} else if (input === null || input.trim() === "") {
// 		alert("Input cannot be empty. Please try again!");
// 	} else {
// 		alert("Invalid input! Please enter Y or N.");
// 	}
// } while (true);

// do {
// 	var input = prompt("Do you want to start the battle? [Y/N]");
// 	if (input === "y" || input === "Y") {
// 		function shuffle_array(array) {
// 			for (let i = array.length - 1; i > 0; i--) {
// 				const j = Math.floor(Math.random() * (i + 1));
// 				[array[i], array[j]] = [array[j], array[i]]; // swap elements
// 			}
// 		}

// 		while (trainers.length > 1) {
// 			// randomize the trainers
// 			shuffle_array(trainers);

// 			// select the first two trainers
// 			const trainer1 = trainers[0];
// 			const trainer2 = trainers[1];

// 			// start the battle
// 			const battle = new Battle(trainer1, trainer2);
// 			const winner = battle.start_battle();

// 			// eliminate the loser and continue with the winner
// 			trainers.shift();
// 			trainers[0] = winner;
// 		}

// 		console.log(`\nThe final winner is ${trainers[0].name}!`);
// 		console.log(`********* END OF TOURNAMENT *********`);

// 		console.log(`\n************* Summary ***************`);
// 		ash.summarize();
// 		console.log(" ");
// 		brock.summarize();

// 		if (trainer_count === 5) {
// 			// show all for 5 trainers
// 			console.log(" ");
// 			misty.summarize();
// 			console.log(" ");
// 			leon.summarize();
// 			console.log(" ");
// 			lance.summarize();
// 		} else if (trainer_count === 4) {
// 			// show misty and leon for 4 trainers
// 			console.log(" ");
// 			misty.summarize();
// 			console.log(" ");
// 			leon.summarize();
// 		} else if (trainer_count >= 3) {
// 			// show misty for 3 or more trainers
// 			console.log(" ");
// 			misty.summarize();
// 		}
// 		console.log("\n****************************************\n");
// 		break;
// 	} else if (input === "n" || input === "N") {
// 		console.log("Okay.");
// 		break;
// 	} else if (input === null || input.trim() === "") {
// 		location.reload();
// 	} else {
// 		console.log("Invalid input! Please try again!");
// 	}
// } while (input);
