
function numIslands(grid) {

    function getAdjacentLands(i, j) {

        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0' || grid[i][j] === 'x') {
            return;
        }

        grid[i][j] = 'x'; 

        getAdjacentLands(i + 1, j);
        getAdjacentLands(i - 1, j);
        getAdjacentLands(i, j + 1);
        getAdjacentLands(i, j - 1);
    }

    const numRows = grid.length;
    const numCols = grid[0].length;
    let numIslands = 0;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (grid[i][j] === '1') {
                numIslands++;
                getAdjacentLands(i, j);
            }
        }
    }

    return numIslands;
}

const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

console.log(`Resualt: ${numIslands(grid1)}`);

const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];

console.log(`Resault: ${numIslands(grid2)}`);
