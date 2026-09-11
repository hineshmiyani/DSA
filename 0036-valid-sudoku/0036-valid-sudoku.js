/**
 * QUICK NOTES — Valid Sudoku
 *
 * Pattern:
 * Hash Map + Hash Set
 *
 * Core Idea:
 * Traverse every cell and track the numbers already seen
 * in its row, column, and 3x3 square.
 *
 * Key Trick:
 * Every cell belongs to exactly one row, one column, and one
 * 3x3 square. We create a unique squareKey to identify that square.
 *
 *     squareKey = `${Math.floor(row / 3)},${Math.floor(column / 3)}`
 *
 * Time / Space Complexity:
 * Time: O(9 × 9) → O(1)
 * Space: O(9 × 9) → O(1)
 *
 * Why I struggled:
 * The tricky part is understanding how to map each cell
 * to the correct 3x3 square.
 */

/**
 * Problem:
 * Determine whether a given 9x9 Sudoku board is valid.
 *
 * Rules:
 * - Each row must contain the digits 1-9 at most once.
 * - Each column must contain the digits 1-9 at most once.
 * - Each 3x3 square must contain the digits 1-9 at most once.
 * - Empty cells represented by "." should be ignored.
 *
 * Example:
 * [
 *     ["5","3",".",".","7",".",".",".","."],
 *     ["6",".",".","1","9","5",".",".","."],
 *     [".","9","8",".",".",".",".","6","."],
 *     ...
 * ]
 *
 * Output:
 * true
 *
 * ------------------------------------------------------------
 *
 * Approach: Hash Map + Hash Set
 * ----------------------------
 *
 * Step 1: Create three Maps.
 *   - rows → row index → Set of numbers already seen
 *   - columns → column index → Set of numbers already seen
 *   - squares → squareKey → Set of numbers already seen
 *
 * Step 2: Traverse every cell in the 9x9 board.
 *
 * Step 3: Ignore empty cells represented by ".".
 *
 * Step 4: Calculate the squareKey for the current cell.
 *
 *   First, calculate the square row:
 *
 *       Math.floor(row / 3)
 *
 *   This groups rows into:
 *
 *       Rows 0, 1, 2 → square row 0
 *       Rows 3, 4, 5 → square row 1
 *       Rows 6, 7, 8 → square row 2
 *
 *   Next, calculate the square column:
 *
 *       Math.floor(column / 3)
 *
 *   This groups columns into:
 *
 *       Columns 0, 1, 2 → square column 0
 *       Columns 3, 4, 5 → square column 1
 *       Columns 6, 7, 8 → square column 2
 *
 *   Combining both values gives us the unique 3x3 square:
 *
 *       `${Math.floor(row / 3)},${Math.floor(column / 3)}`
 *
 *   Example:
 *
 *       row = 4
 *       column = 7
 *
 *       Math.floor(4 / 3) = 1
 *       Math.floor(7 / 3) = 2
 *
 *       squareKey = "1,2"
 *
 * Step 5: Check whether the current value already exists in:
 *   - the current row
 *   - the current column
 *   - the current 3x3 square
 *
 *   If it exists in any one of them, return false.
 *
 * Step 6: Add the current value to the corresponding row,
 * column, and square Sets.
 *
 * Step 7: If the entire board is traversed without finding
 * a duplicate, return true.
 *
 * ------------------------------------------------------------
 *
 * Why this works:
 * - A Set provides an efficient way to detect duplicates.
 * - Every value is checked against its row, column, and square.
 * - Therefore, every Sudoku constraint is validated.
 *
 * Simple Intuition:
 * For every number, ask:
 *
 * "Have I already seen this number in this row,
 *  this column, or this 3x3 square?"
 *
 * Yes → return false.
 * No  → store it and continue.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = new Map();
    const columns = new Map();
    const squares = new Map();

    const boardSize = 9;

    for (let row = 0; row < boardSize; row++) {
        for (let column = 0; column < boardSize; column++) {
            const value = board[row][column];

            // Skip empty cells because "." does not represent a number.
            if (value === ".") {
                continue;
            }

            // Calculate which group of 3 rows this cell belongs to.
            //
            // Rows 0, 1, 2 → square row 0
            // Rows 3, 4, 5 → square row 1
            // Rows 6, 7, 8 → square row 2
            //
            // Example:
            // row = 4
            // Math.floor(4 / 3) = 1
            const squareRow = Math.floor(row / 3);

            // Calculate which group of 3 columns this cell belongs to.
            //
            // Columns 0, 1, 2 → square column 0
            // Columns 3, 4, 5 → square column 1
            // Columns 6, 7, 8 → square column 2
            //
            // Example:
            // column = 7
            // Math.floor(7 / 3) = 2
            const squareColumn = Math.floor(column / 3);

            // Combine the square row and square column into
            // one unique key representing the 3x3 square.
            //
            // Example:
            // squareRow = 1
            // squareColumn = 2
            //
            // squareKey = "1,2"
            //
            // This identifies the middle-right 3x3 square.
            const squareKey = `${squareRow},${squareColumn}`;

            // If the value already exists in the current row,
            // column, or 3x3 square, the board is invalid.
            if (
                rows.get(row)?.has(value) ||
                columns.get(column)?.has(value) ||
                squares.get(squareKey)?.has(value)
            ) {
                return false;
            }

            // Create a Set for the current row if it does not exist yet.
            if (!rows.has(row)) {
                rows.set(row, new Set());
            }

            // Add the current value to the current row.
            rows.get(row).add(value);

            // Create a Set for the current column if it does not exist yet.
            if (!columns.has(column)) {
                columns.set(column, new Set());
            }

            // Add the current value to the current column.
            columns.get(column).add(value);

            // Create a Set for the current 3x3 square if it does not exist yet.
            if (!squares.has(squareKey)) {
                squares.set(squareKey, new Set());
            }

            // Add the current value to the current 3x3 square.
            squares.get(squareKey).add(value);
        }
    }

    // No duplicate was found in any row, column, or 3x3 square.
    return true;
};