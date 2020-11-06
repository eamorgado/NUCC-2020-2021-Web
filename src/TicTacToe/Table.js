class TableTicTac {
    /**
     * This class was designed to represent the game, therefore it must contain
     *      vital information about the game state that it represents, such as
     *      its configuration and the player that last played, arriving at this
     *      configuration.
     */

    constructor(table) {
        if (!arguments.length) { //new Table();
            this.player = '';
            this.play = new PlayTicTac();
            this.champion = '';
            this.table = [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ]

        } else { //new Table(table)
            this.player = table.getPlayer();
            this.play = table.getPlay();
            this.champion = table.getChampion();
            this.table = table.getTable();
        }
    }

    getPlay() { return this.play; }
    getPlayer() { return this.player; }
    getChampion() { return this.champion; }

    setPlayer(player_or_start) {
        if (player_or_start === true) //start => random player
        //Decide first player: X = P1/Human, O = P2/AI
            player_or_start = Math.floor(Math.random() * 2) == 0 ? 'X' : 'O';
        this.player = player_or_start;
    }
    setPlay(p) {
        this.play.setRow(p.getRow());
        this.play.setCol(p.getCol());
        this.play.setUtility(p.getUtility());
    }
    setChampion(c) { this.champion = c; }


    isPlayerTurn() { return this.player === 'X'; }

    getTable() {
        var t = [
            [],
            [],
            []
        ];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++)
                t[i][j] = this.table[i][j];
        }
        return t;
    }


    hasWin() {
        //check rows
        for (var i = 0; i < 3; i++)
            if (this.table[i][0] !== '' &&
                this.table[i][0] === this.table[i][1] &&
                this.table[i][0] === this.table[i][2]
            ) {
                this.setChampion(this.table[i][0]);
                return true;
            }

            //check cols
        for (var i = 0; i < 3; i++)
            if (this.table[0][i] !== '' &&
                this.table[0][i] === this.table[1][i] &&
                this.table[0][i] === this.table[2][i]
            ) {
                this.setChampion(this.table[0][i]);
                return true;
            }

            //check diagonals
        if (this.table[0][0] !== '' &&
            this.table[0][0] === this.table[1][1] &&
            this.table[0][0] === this.table[2][2]
        ) {
            this.setChampion(this.table[0][0]);
            return true;
        }

        if (this.table[0][2] !== '' &&
            this.table[0][2] === this.table[1][1] &&
            this.table[0][2] === this.table[2][0]
        ) {
            this.setChampion(this.table[0][2]);
            return true;
        }
        this.setChampion('');
        return false;
    }

    isGameOver() {
        // game is over if x wins or O wins or there is no more possible free position
        if (this.hasWin()) return true;


        //check if board has one free position
        for (var i = 0; i < 3; i++)
            for (var j = 0; j < 3; j++)
                if (this.table[i][j] === '')
                    return false;

        return true;
    }

    getDescendents(plyr) {
        var descendents = new Array();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.table[i][j] == '') {
                    let son = new TableTicTac();
                    son.table = this.getTable();
                    son.table[i][j] = plyr;
                    son.setPlayer(plyr);
                    son.setPlay(new PlayTicTac(i, j));
                    descendents.push(son);
                }
            }
        }
        return descendents;
    }


    /**
     * Heuristic:
     *  X wins: 10 - d
     *  O wins: d - 10
     *  Draw: 0
     *  d -> depth of search
     */
    utility(depth) {
        if (this.hasWin()) {
            if (this.getChampion() === 'X') //player won
                return depth - 10;
            else if (this.getChampion() === 'O')
                return 10 - depth;
        }
        return 0;
    }

    makePlay(row, col, plyr) {
        this.table[row][col] = plyr
        this.play = new PlayTicTac(row, col);
    }
}