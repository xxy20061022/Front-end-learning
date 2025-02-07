function judgeCircle(moves: string): boolean {
    let x = 0, y = 0;

    for (let move of moves) {
        if (move === 'U') y++;
        if (move === 'D') y--;
        if (move === 'L') x--;
        if (move === 'R') x++;
    }

    return x === 0 && y === 0;
}
