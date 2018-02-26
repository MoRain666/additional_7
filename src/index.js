module.exports = function solveSudoku(matrix) {

    const getSolutions = (row, col) => {
    let possibleOutcomes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let squareByRow = Math.floor(row / 3) * 3;
    let squareByCol = Math.floor(col / 3) * 3;
    let result = [];

    for (let i = 0; i < 9; i++) {
        result.push([matrix[row][i], matrix[i][col], matrix[squareByRow + i % 3][squareByCol + Math.floor(i / 3)]])
    }

    possibleOutcomes.filter((value) => !result.includes(value));
    return result;
}
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
        if (matrix[row][col] == 0) {
            let possibleOutcomes = getSolutions(row, col);
            for (let k of possibleOutcomes) {
                matrix[row][col] = k;
                let PossibleSolution = solveSudoku(matrix); //test selection
                if (true) return PossibleSolution;
            }
            matrix[row][col] = 0;
            return false;
        }
    }
}
return matrix;
}
