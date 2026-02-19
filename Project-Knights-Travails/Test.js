import {knightMoves} from "./KnightsTravails.js"

const UserInput = knightMoves([3, 3], [4, 3]);

console.log(`You made it in ${UserInput.length - 1} moves! Here's your path:`)
UserInput.forEach((path) => {
    console.log(path);
})