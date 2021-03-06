// Create an array of the three game choices (Rock, Paper, or Scissors).
var gameChoices = ['r', 'p', 's'];

// Create variables to hold the number of wins, losses, and ties. They start at 0.
var win = '0';
var loss = '0';
var tie = '0';

for (var i = 0; i < 3; i++) {
    // Randomly choose a choice from the gameChoices array. This is the computer's turn.
    var computerTurn = 
        gameChoices[Math.floor(Math.random() * gameChoices.length)];

    // Collect the user's response and convert to lower case. This is the user's turn.
    var userTurn = prompt('Enter r, p, or s to choose your move!');
    userTurn = userTurn.toLowerCase();

    // The game logic to run if the user chooses a valid game choice
    if (userTurn === 'r' || userTurn === 'p' || userTurn === 's') {
        alert('The computer chose ' + computerTurn);
      
        //win-loose-tie conditions
        if (
            (userTurn === 'r' && computerTurn === 's') ||
            (userTurn === 'p' && computerTurn === 'r') ||
            (userTurn === 's' && computerTurn === 'p')
        ) {
            win++;
            alert('🎉 You won! 🎉 \nwins: ' + win)
        } else if (userTurn === computerTurn) {
            tie++;
            alert('⚖️ You tied. ⚖️ \nties: ' + tie)
        } else{
            loss++;
            alert(' 😣 You lost. 😣 \nlosses: ' + loss)
        }

    //Prompt user to select a valid choice
    } else{
        alert('Please enter r, p, or s to play!')
    }
}

// When the game is over, alert the final total to the user. 
alert(
    'Total wins: ' + win + 
    '\nTotal ties: ' + tie +
    '\nTotal losses: ' + loss
);