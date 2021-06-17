// 3. Tic-Tac-Toe
// Make a tic-tac-toe console application.
// You will receive an array of arrays. As you know there are two players in this game, so the first element of the input
// will be first player's chosen coordinates, the second element will be the second player's turn coordinates and so on.
// The initial state of the dashboard is
// [[false, false, false],
// [false, false, false],
// [false, false, false]]
// The first player's mark is X and the second player's mark is O.
// Input
// One parameter:
//  An array - the moves in row that players make
// Output
//  There are two players - X and O
//  If a player tries to take his turn on a space that's already taken, he should make his turn again and you
// should print the following message:
// "This space is already taken. Please choose another!"
//  If there are no free spaces on the dashboard and nobody wins, the game should end and you should print
// the following message:
// "The game has ended! Nobody wins :("
//  If someone wins, you should print the following message and the current state of the dashboard:
// "Player {X/0} wins"
// Note: When printing the state of the dashboard, the elements of each row of the dashboard should be
// separated by "\t" and each row should be on new line. 
// Constraints
// The elements in the input array will always be enough to end the game.
function main(matrix) {
    play(matrix);
}

function play(matrix) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let player = 'X';
    let hasWon = false;
    for (let i = 0; i < matrix.length; i++) {
        let line = matrix[i];
        let [row, col] = line.split(' ').map(num => (Number(num)));
        if (dashboard[row][col] === false) {
            dashboard[row][col] = player;
            if (ifWins(dashboard, player)) {
                hasWon = true;
                break;
            }
            player = player === 'X' ? 'O' : 'X';
        } else if (dashboard.every(row => row.every(el => el !== false))) {
            break;
        } else {
            console.log('This space is already taken. Please choose another!');
        }
    }
    if (hasWon) {
        console.log(`Player ${player} wins!`);
    } else {
        console.log('The game has ended! Nobody wins :(');
    }
    printMatrix(dashboard);

    function ifWins(dashboard, player) {
        return checkFirstDiagonal(dashboard, player) ||
            checkSecondDiagonal(dashboard, player) ||
            checkCols(dashboard, player) ||
            checkRows(dashboard, player);
    };

    function checkFirstDiagonal(dashboard, player) {
        return dashboard[0][0] === player &&
            dashboard[1][1] === player &&
            dashboard[2][2] === player;
    }

    function checkSecondDiagonal(dashboard, player) {
        return dashboard[2][0] === player &&
            dashboard[1][1] === player &&
            dashboard[0][2] === player;
    }

    function checkRows(dashboard, player) {
        return (dashboard[0][0] === player &&
                dashboard[0][1] === player && dashboard[0][2] === player) ||
            (dashboard[1][0] === player && dashboard[1][1] === player &&
                dashboard[1][2] === player) ||
            (dashboard[2][0] === player && dashboard[2][1] === player &&
                dashboard[2][2] === player);
    }

    function checkCols(dashboard, player) {
        return (dashboard[0][0] === player &&
                dashboard[1][0] === player &&
                dashboard[2][0] === player) ||
            (dashboard[0][1] === player && dashboard[1][1] === player &&
                dashboard[2][1] === player) ||
            (dashboard[0][2] === player && dashboard[1][2] === player &&
                dashboard[2][2] === player);
    }

    function printMatrix(dashboard) {
        dashboard.forEach(row => {
            console.log(row.join('\t'));
        });
    }
}

// Player O wins!
// O X X
// X O X
// O false O

// This space is already taken. Please choose
// another!
// Player X wins!
// X X X
// false O O
// false false false 

// The game has ended! Nobody wins :(
//     O X X
//     X X O
//     O O X