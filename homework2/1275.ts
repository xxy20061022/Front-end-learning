function tictactoe(moves: number[][]): string {
    const board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
    function checkWin(player: string): boolean {
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true; 
            if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true; 
        }
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true; 
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true; 
        return false;
    }

    
    for (let i = 0; i < moves.length; i++) {
        const [row, col] = moves[i];
        const player = i % 2 === 0 ? 'X' : 'O'; 
        board[row][col] = player;

        if (checkWin(player)) {
            return player === 'X' ? 'A' : 'B'; 
        }
    }
    return moves.length === 9 ? 'Draw' : 'Pending';
}
