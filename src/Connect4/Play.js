class PlayConnect {
    /**
     * This class was designed to store the main values of a play, independently
     *      of the class Table, as to enable the backtracking process
     */
    constructor(a, b, c) {
        if (!arguments.length) { //new Payl();
            this.row = this.col = -1;
            this.utility = 0;

        } else if (arguments.length == 1) { //new Play(utiity)
            this.row = this.col = -1;
            this.utility = a;
        } else if (arguments.length == 2) { //new Play(row,col)
            this.row = a;
            this.col = b;
            this.utility = -1;
        } else { //new play(row,col,utility)
            this.row = a;
            this.col = b;
            this.utility = c;
        }
    }

    getRow() { return this.row; }
    getCol() { return this.col; }
    getUtility() { return this.utility; }

    setRow(r) { this.row = r; }
    setCol(c) { this.col = c; }
    setUtility(u) { this.utility = u; }
}