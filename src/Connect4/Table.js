class TableConnect {
    /**
     * This class was designed to represent the game, therefore it must contain
     *      vital information about the game state that it represents, such as
     *      its configuration and the player that last played, arriving at this
     *      configuration.
     */

    constructor(table) {
        if (!arguments.length) { //new Table();
            this.player = '';
            this.play = new PlayConnect();
            this.champion = '';
            this.table = [
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '']
            ]

        } else { //new Table(table)
            this.player = table.getPlayer();
            this.play = table.getPlay();
            this.champion = table.getChampion();
            this.table = table.getTable();
        }
        this.out_of_bounds = false;
    }

    getPlay() { return this.play; }
    getPlayer() { return this.player; }
    getChampion() { return this.champion; }
    isOutOfBounds() { return this.out_of_bounds; }
    setOutOfBounds(b) { this.out_of_bounds = b; }

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
            [],
            [],
            [],
            [],
        ];
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 7; j++)
                t[i][j] = this.table[i][j];
        }
        return t;
    }

    hasWin() {
        //check horizontal
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.table[i][j] != '') {
                    if (this.table[i][j] == this.table[i][j + 1] &&
                        this.table[i][j] == this.table[i][j + 2] &&
                        this.table[i][j] == this.table[i][j + 3]
                    ) {
                        this.setChampion(this.table[i][j]);
                        return true;
                    }
                }
            }
        }

        //check vertical
        for (let j = 0; j < 7; j++) {
            for (let i = 0; i < 3; i++) {
                if (this.table[i][j] != '') {
                    if (this.table[i][j] == this.table[i + 1][j] &&
                        this.table[i][j] == this.table[i + 2][j] &&
                        this.table[i][j] == this.table[i + 3][j]
                    ) {
                        this.setChampion(this.table[i][j]);
                        return true;
                    }
                }
            }
        }

        //check diagonal right
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.table[i][j] != '') {
                    if (this.table[i][j] == this.table[i + 1][j + 1] &&
                        this.table[i][j] == this.table[i + 2][j + 2] &&
                        this.table[i][j] == this.table[i + 3][j + 3]
                    ) {
                        this.setChampion(this.table[i][j]);
                        return true;
                    }
                }
            }
        }

        //check diagonal left
        for (let i = 3; i < 6; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.table[i][j] != '') {
                    if (this.table[i][j] == this.table[i - 1][j + 1] &&
                        this.table[i][j] == this.table[i - 2][j + 2] &&
                        this.table[i][j] == this.table[i - 3][j + 3]
                    ) {
                        this.setChampion(this.table[i][j]);
                        return true;
                    }
                }
            }
        }

        this.setChampion('');
        return false;
    }


    isGameOver() {
        // game is over if x wins or O wins or there is no more possible free position
        if (this.hasWin()) return true;


        //check if board has one free position
        for (var i = 0; i < 6; i++)
            for (var j = 0; j < 7; j++)
                if (this.table[i][j] === '')
                    return false;

        return true;
    }


    utility() {
        var u = 0;
        if (this.hasWin()) {
            if (this.getChampion() == 'X') return -512;
            else if (this.getChampion() == 'O') return 512;
        }

        if (this.isGameOver()) return 0;

        u += this.utilHorizontal();
        u += this.utilVertical();
        u += this.utilDiagonalRight();
        u += this.utilDiagonalLeft();

        if (this.getPlayer() == 'X') u -= 16;
        else if (this.getPlayer() == 'O') u += 16;
        return u;
    }

    utilHorizontal() {
        var u = 0;
        var x, o;
        x = o = 0;

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 4; j++) {
                [x, o] = [0, 0];
                for (let k = 0; k < 4; k++) {
                    if (this.table[i][j + k] == 'X') x++;
                    else if (this.table[i][j + k] == 'O') o++;
                }

                u = this.calcUt(u, x, o);
            }
        }
        return u;
    }

    utilVertical() {
        var u = 0;
        var x, o;
        x = o = 0;

        for (let j = 0; j < 7; j++) {
            for (let i = 0; i < 3; i++) {
                [x, o] = [0, 0];
                for (let k = 0; k < 4; k++) {
                    if (this.table[i + k][j] == 'X') x++;
                    else if (this.table[i + k][j] == 'O') o++;
                }

                u = this.calcUt(u, x, o);
            }
        }
        return u;
    }

    utilDiagonalRight() {
        var u = 0;
        var x, o;
        x = o = 0;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                [x, o] = [0, 0];
                for (let k = 0; k < 4; k++) {
                    if (this.table[i + k][j + k] == 'X') x++;
                    else if (this.table[i + k][j + k] == 'O') o++;
                }
                u = this.calcUt(u, x, o);
            }
        }
        return u;
    }

    utilDiagonalLeft() {
        var u = 0;
        var x, o;
        x = o = 0;

        for (let i = 3; i < 6; i++) {
            for (let j = 0; j < 4; j++) {
                [x, o] = [0, 0];
                for (let k = 0; k < 4; k++) {
                    if (this.table[i - k][j + k] == 'X') x++;
                    else if (this.table[i - k][j + k] == 'O') o++;
                }
                u = this.calcUt(u, x, o);
            }
        }
        return u;
    }

    calcUt(u, x, o) {
        if (o == 3 && x == 0) u += 50;
        else if (o == 2 && x == 0) u += 10;
        else if (o == 1 && x == 0) u += 1;
        else if (o == 0 && x == 1) u -= 1;
        else if (o == 0 && x == 2) u -= 10;
        else if (o == 0 && x == 3) u -= 50;

        return u;
    }


    getLastFreeRowPosition(col) {
        if (this.isColumnFull(col)) return null;
        let r;
        for (let i = 0; i < 6; i++)
            if (this.table[i][col] != '') break;
            else r = i;
        return r;
    }

    isColumnFull(col) {
        return !(this.table[0][col] == '');
    }

    makeNewPlay(col, plyr) {
        this.setPlayer(plyr);
        var r = this.getLastFreeRowPosition(col)
        this.setPlay(new PlayConnect(r, col))

        if (r != null) this.table[r][col] = plyr;
        else this.setOutOfBounds(true);

    }

    getDescendents(ply) {
        var descendents = new Array();
        for (let i = 0; i < 7; i++) {
            if (!this.isColumnFull(i)) {
                var son = new TableConnect();
                son.table = this.getTable();
                son.makeNewPay(i, ply);

                if (!son.isOutOfBounds())
                    descendents.push(son);
            }
        }
    }
}