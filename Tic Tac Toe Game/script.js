/*
The GameBoard represents the state of the Tic Tac Toe board
Each square holds a Cell and we have a playMove method to be able to add Cells to squares
*/
function GameBoard(){
    const rows = 3;
    const columns = 3;
    const board = [];

    // Nested Loop to create 2d array for the tic tac toe grid
    for(let i = 0; i<rows; i++){
       board[i] = [];
       for(let j = 0; j<columns; j++){
            board[i].push(Cell());
       }
    }

    // This will be the method to access our tic tac toe board.
    const getBoard = () => board;

    // This will be the method for player to pick the square in the tic tac toe grid
    const playMove = (row, column, player) => {
        const cellValue = board[row][column].getValue()
        if(cellValue != undefined){
            console.log("You cannot fill up a Cell that is already filled!")
            switchPlayerTurn();
            return
        };

        board[row][column].addSymbol(player);
    }
    

    // This method will be used to print the tic tac toe board game with the players moves to the console
    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
    }

    const displayBoard = () => {
        board.map((row) => row.map((cell) => cell.getValue()));
    }

    return {getBoard, playMove, printBoard, displayBoard};

}


/*
The Cell method is responsible for each cell in the Tic Tac Toe Board.
*/
function Cell(){
    let value;

    //Accepts a player's symbol, either "X" or "O", and change the value of the cell
    const addSymbol = (player) => {
        value = player;
    }

    // How we will retrieve the current value of this cell through closure
    const getValue = () => value;

    return {addSymbol, getValue}

}


/* 
The GameController method will be responsible for controlling the flow and state 
of the game's turns as well as whether anybody has won the game or when the game
has tied; ending the game altogether.
*/
function GameController (playerOneName="Player One", playerTwoName="Player Two"){
    const board = GameBoard();

    const boardState = board.getBoard();

    const players = [ {name: playerOneName, symbol: "X"}, {name: playerTwoName, symbol: "O"}];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };
    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    }

    const checkWin = () => {

        //This method is to check if the active player has won horizontally in the tic tac toe game
        const checkHorizontal = () => {
            for(let index=0; index<3; index++){
                const horizontalWin = boardState[index].filter((column) => column.getValue() === getActivePlayer().symbol);
                if(horizontalWin.length === 3){
                    console.log(`Congratulations ${getActivePlayer().name}, you have won!`)
                     return true
                }
                
                
            }
        }

        // This method is to check if the active player has won vertically in the tic tac toe game
        const checkVertical = () => {
            for(let index=0; index<3; index++){
                const verticalWin = boardState.map((row) => row[index]).filter((column) => column.getValue() === getActivePlayer().symbol);
                if(verticalWin.length === 3){
                    console.log(`Congratulations ${getActivePlayer().name}, you have won!`)
                    return true
                }
            }
        }

        // This method is to check if the active player has won diagonally in the tic tac toe game
        const checkDiagonal = () => {
            if(boardState[1][1].getValue() === getActivePlayer().symbol){
                if(boardState[0][2].getValue() === getActivePlayer().symbol && boardState[2][0].getValue() === getActivePlayer().symbol){
                    console.log(`Congratulations ${getActivePlayer().name}, you have won!`)
                    return true
                } else if (boardState[0][0].getValue() === getActivePlayer().symbol && boardState[2][2].getValue() === getActivePlayer().symbol){
                    console.log(`Congratulations ${getActivePlayer().name}, you have won!`)
                    return true
                }
            }

        }

        checkHorizontal();
        checkVertical();
        checkDiagonal();

        return{checkHorizontal, checkVertical, checkDiagonal}
    }
    

    const checkDraw = () => {
        const allCells = [...boardState[0], ...boardState[1], ...boardState[2]];
        const emptyCells = allCells.filter((cells) => cells.getValue() === undefined);
        if(!emptyCells.length){
            console.log("Its a Draw!")
            return true
        }
        return false
        
    }


    const playRound = (row, column) => {
        console.log(`Placing ${getActivePlayer().name}'s symbol into the row and column of the Tic Tac Toe Board`);
        board.playMove(row ,column, getActivePlayer().symbol);

        
        checkWin();
        checkDraw();
        printNewRound();
}


    return {playRound, getActivePlayer, getBoard: board.getBoard, checkWin, checkDraw, switchPlayerTurn}
}



/*
The Screen Controller Function will be responsible of the DOM that will connect the GameBoard function to
the web browser. 
*/
function ScreenController() {
    const game = GameController();
    const playerTurnDiv = document.querySelector('.playerTurnDisplay');
    const boardDiv = document.querySelector('.boardDisplay');
    const restartBtn = document.querySelector('.restart');
  
    const updateScreen = () => {
      
      boardDiv.textContent = "";
  
      
      const board = game.getBoard();
      const activePlayer = game.getActivePlayer();
      const checkWin = game.checkWin();
      const checkDraw = game.checkDraw();


      if(checkWin.checkHorizontal()  || checkWin.checkVertical()  || checkWin.checkDiagonal()){
        playerTurnDiv.textContent = `Congratulations, ${activePlayer.name}'s has won!!! Restart Game?`
      } else{
        playerTurnDiv.textContent = `${activePlayer.name}'s turn...`
      }

  
      

  
      // Render board squares
      board.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
          const cellButton = document.createElement("button");
          cellButton.classList.add("cell");
          
          
          cellButton.dataset.column = columnIndex;
          cellButton.dataset.row = rowIndex;
          cellButton.textContent = cell.getValue();
          boardDiv.appendChild(cellButton);
        })
      })


      if(checkDraw === true){
        playerTurnDiv.textContent = `Its a Draw! Restart Game?`
      }

    }

    function restart(){
        ScreenController();
    }
    restartBtn.addEventListener("click", restart);

    
    function clickHandlerBoard(e) {
      const selectedColumn = e.target.dataset.column;
      const selectedRow = e.target.dataset.row;
      
      if (!selectedColumn && !selectedRow) return;
      game.playRound(selectedRow, selectedColumn);
      updateScreen();
      game.switchPlayerTurn();
    }
    boardDiv.addEventListener("click", clickHandlerBoard);
  
   
    updateScreen();
}
  
    

  
  ScreenController();
