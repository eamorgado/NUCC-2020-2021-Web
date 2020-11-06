class TicTacToe {
    constructor(max_depth) {
        this.max_depth = max_depth;
        this.reset();
    }

    reset() {
        getIdElement('win-overlay').style.width = '0%';
        this.is_running = true;
        this.game = new TableTicTac();
        this.game.setPlayer(true); //start random;
        this.generateBoard();
        this.displayTurn();
    }

    tttGridExists() {
        return getIdElement('tic-tac-toe-game') != null;
    }

    generateLayout() {
        var main_page = getClassElement('content-wrap')[0];

        if (this.tttGridExists()) { //Remove
            main_page.removeChild(getIdElement('tic-tac-toe-game'));
        }
        if (getIdElement('connect-four-game') != null)
            main_page.removeChild(getIdElement('connect-four-game'));

        //Add tic tac toe game
        var ttt_div = document.createElement('div');
        ttt_div.setAttribute('id', 'tic-tac-toe-game');
        ttt_div.setAttribute('class', 'game-container');

        var container = document.createElement('div');
        container.setAttribute('class', 'container');

        //Add title, headers and game grid placeholder container
        var title = document.createElement('h1');
        title.setAttribute('class', 'title');
        title.innerHTML = 'Tic <span>Tac</span> Toe';

        var header = document.createElement('div');
        header.setAttribute('class', 'status-action-ttt');

        var placeholder = document.createElement('div');
        placeholder.setAttribute('id', 'game-grid-ttt');

        container.appendChild(title);
        container.appendChild(header);
        container.appendChild(placeholder);

        ttt_div.appendChild(container);
        main_page.appendChild(ttt_div);
    }

    generateBoard() {
        this.generateLayout();
        var grid_placeholder = getIdElement('game-grid-ttt');
        var game_grid_class, game_cell_class;
        [game_grid_class, game_cell_class] = ['game-grid-ttt', 'game-cell-ttt'];

        //Generate game grid
        var grid = document.createElement('div');
        grid.setAttribute('class', game_grid_class);
        grid_placeholder.appendChild(grid);

        //Start cells empty + add event listener for click
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                let cell = document.createElement('div');
                cell.setAttribute('class', game_cell_class);
                cell.setAttribute('id', 'game-cell-ttt-' + i + '-' + j);
                cell.innerHTML = '';
                cell.addEventListener('click', () => {
                    this.userClick(cell.id);
                });
                grid.appendChild(cell);
            }
        }

        //Display turn and reset
        var turn, reset;
        turn = document.createElement('div');
        reset = document.createElement('div');

        turn.setAttribute('class', 'status-ttt');
        reset.setAttribute('class', 'reset-ttt');
        reset.innerHTML = 'Reset';

        getClassElement('status-action-ttt')[0].appendChild(turn);
        getClassElement('status-action-ttt')[0].appendChild(reset);

        //Add event listener to reset
        getClassElement('reset-ttt')[0].addEventListener('click', () => {
            this.reset();
        });
    }

    displayTurn() {
        getClassElement('status-ttt')[0].innerHTML = this.game.getPlayer() + " turn";
        if (!this.game.isPlayerTurn()) this.playAI();
    }

    nextTurn() {
        this.game.setPlayer(this.game.getPlayer() === 'X' ? 'O' : 'X');
        this.displayTurn();
    }

    userClick(cell_id) {
        let id_slit = cell_id.split('-');
        if (!this.game.isGameOver()) {
            if (this.game.isPlayerTurn()) {
                let cell = getIdElement(cell_id);
                let i, j;
                [i, j] = [id_slit[3], id_slit[4]];
                if (cell.innerHTML == '' && this.game.table[i][j] === '') {
                    cell.innerHTML = 'X';
                    cell.style.color = 'yellow';
                    this.game.makePlay(i, j, 'X');
                    this.game.makePlay(i, j, 'X');
                }
                if (!this.game.isGameOver())
                    this.nextTurn();
                else
                    this.winModal(this.game.getChampion());
            }
        } else {
            this.winModal(this.game.getChampion());
        }
    }

    editCell(i, j, ply) {
        var cell_id = 'game-cell-ttt-' + i + '-' + j;
        var cell = getIdElement(cell_id);
        cell.innerHTML = ply;
        if (ply == 'X') cell.style.color = 'yellow';
    }

    playAI() {
        if (!this.game.isGameOver()) {
            let i, j, cell;
            //The min max alg
            let play = this.moveAI();
            if (play != null) {
                let i, j;
                [i, j] = [play.getRow(), play.getCol()]
                this.editCell(i, j, 'O');
                this.game.makePlay(i, j, 'O');
                this.nextTurn();
            }
            if (this.game.isGameOver()) this.winModal(this.game.getChampion());
        } else {
            this.winModal(this.game.getChampion());
        }
    }

    moveAI() {
        return new MinMaxTicTac(this.max_depth).minMax(new TableTicTac(this.game));
    }


    winModal(champion) {
        var overlay_content = getIdElement('win-overlay-content')

        //Title
        var title = getIdElement('win-title');
        title.innerHTML = 'Tic <span>Tac</span> Toe - Results';

        var winner, loser, draw;
        var text = getIdElement('win-des');
        if (champion == 'X') {
            text.innerHTML = '<b>Human</b> wins';
            [winner, loser, draw] = ['X', 'O', false]
        } else if (champion == 'O') {
            text.innerHTML = '<b>AI</b> wins';
            [winner, loser, draw] = ['O', 'X', false]
        } else {
            text.innerHTML = '<b>Draw</b>';
            [winner, loser, draw] = ['X', 'O', true]
        }

        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                getIdElement('game-cell-ttt-' + i + '-' + j).style.pointerEvents = 'none';


        //close button
        const game = this;
        var close = getIdElement('win-close');
        close.addEventListener('click', () => {
            game.reset();
        });

        getIdElement('win-overlay').style.width = '100%';

        updateResults('ttt', winner, loser, draw);
    }
}