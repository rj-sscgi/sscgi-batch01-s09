// Battle Prompt
do {
	var input = prompt("Do you want to start the battle? [Y/N]");
	if (input === "y" || input === "Y") {
		// create a new Tournament with the trainers
		function shuffle_array(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]]; // Swap elements
			}
		}

		const active_trainers = [...trainers]; // copy of trainers array

		shuffle_array(active_trainers);
		const tournament = new Tournament(active_trainers);

		// this will handle the tournament based on trainer count
		tournament.start_tournament();
		break;
	}

	// error handling
	else if (input === "n" || input === "N") {
		console.log("Okay.");
		break;
	} else if (input === null || input.trim() === "") {
		alert("Input cannot be empty. Please try again!");
	} else {
		alert("Invalid input! Please enter Y or N.");
	}
} while (true);

// Tournament Prompt
do {
	var restart = prompt("Do you want to start a new tournament? [Y/N]");

	if (restart === "y" || restart === "Y") {
		location.reload();
		break;
	}

	// error handling
	else if (restart === "n" || restart === "N") {
		console.log("Okay.");
		break;
	} else if (restart === null || restart.trim() === "") {
		alert("Input cannot be empty. Please try again!");
	} else {
		alert("Invalid input! Please enter Y or N.");
	}
} while (true);
