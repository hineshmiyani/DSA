/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = new Map();
    const cols = new Map();
    const squares = new Map();

    const n = 9;

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {

            const val = board[i][j];

            if (val === ".") {
                continue;
            }

            // const squareKey = `${Math.floor(i / 3)},${Math.floor(j / 3)}`
            const squareKey = Math.floor(i/3) * 3 + Math.floor(j/3);

            if (rows.get(i)?.has(val) || cols.get(j)?.has(val) || squares.get(squareKey)?.has(val)) {
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

            if (!squares.has(squareKey)) {
                squares.set(squareKey, new Set());
            }
            squares.get(squareKey).add(val);
        }

    }

    return true;
};
