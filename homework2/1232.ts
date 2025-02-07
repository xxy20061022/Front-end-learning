function checkStraightLine(coordinates: number[][]): boolean {

    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];

    const dx = x2 - x1;
    const dy = y2 - y1;

    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        if (dy * (x - x2) !== dx * (y - y2)) {
            return false; 
        }
    }

    return true;
}
