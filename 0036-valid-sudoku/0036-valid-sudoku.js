/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    debugger; const rows = new Map();
    const cols = new Map();
    const squares = new Map();

    const n = 9;

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {

            const val = board[i][j];

            if (val === ".") {
                continue;
            }

            const squaresKey = `${Math.floor(i / 3)},${Math.floor(j / 3)}`

            if (rows.get(i)?.has(val) || cols.get(j)?.has(val) || squares.get(squaresKey)?.has(val)) {
                return false;
            }

            if (!rows.has(i)) {
                rows.set(i, new Set());
            }
            rows.get(i).add(val);

            if (!cols.has(j)) {
                cols.set(j, new Set());
            }
            cols.get(j).add(val);

            if (!squares.has(squaresKey)) {
                squares.set(squaresKey, new Set());
            }
            squares.get(squaresKey).add(val);
        }

    }

    return true;
};
