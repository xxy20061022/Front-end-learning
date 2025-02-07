function isRobotBounded(instructions: string): boolean {
    let x = 0, y = 0;
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; 
    let directionIndex = 0; 

    for (let instruction of instructions) {
        if (instruction === 'G') {
            x += directions[directionIndex][0];
            y += directions[directionIndex][1];
        } else if (instruction === 'L') {
            directionIndex = (directionIndex + 3) % 4; 
        } else if (instruction === 'R') {
            directionIndex = (directionIndex + 1) % 4; // Turn right 90 degrees
        }
    }

    // If the robot ends at (0, 0) or isn't facing North (not in the same direction), it's bounded
    return (x === 0 && y === 0) || directionIndex !== 0;
}
