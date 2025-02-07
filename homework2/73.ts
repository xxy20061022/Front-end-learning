function setZeroes(matrix: number[][]): void {
    const m = matrix.length;
    const n = matrix[0].length;
    let rowZero = false;
    let colZero = false;

    
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            rowZero = true;
            break;
        }
    }

    
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            colZero = true;
            break;
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0; 
                matrix[0][j] = 0; 
            }
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }


    if (rowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }


    if (colZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
}
