export {knightMoves}

function knightMoves([x1, y1], [x2, y2]) {

    if (x1 === x2 && y1 === y2){
        return [[x1, y1]]
    }

    const knightDirections = [
        [1, 2],
        [-1, 2],
        [1, -2],
        [-1, -2],
        [2, 1],
        [-2, 1],
        [2, -1],
        [-2, -1]
    ]

    const queue = [[x1, y1]];

    const visitedCoordinates = new Set();
    visitedCoordinates.add([x1, y1]);

    while (queue.length > 0){

        const current = queue.shift();


        for (let [dx, dy] of knightDirections){
            const newX = dx + current[0];
            const newY = dy + current[1];

            if (newX >= 0 && newX <= 7 && newY >= 0 && newY <=7){

                queue.push([newX, newY]);
                
                if (newX === x2 && newY === y2){
                    const knightMove = knightMoves([x1, y1], current);
                    knightMove.push([newX, newY]);
                    return knightMove;
                }
            }
        }

    }
}