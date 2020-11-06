//Start command
var GAME;

function updateResults(game, winner, loser, draw) {
    var date = new Date().toDateString();
    var points = 0;
    [winner, points] = (winner == 'X') ? ['Human', 1] : ['AI', 0];
    var results = new Array(draw, winner, date);
    if (typeof(Storage) != "undefined") {
        var map;
        if (game == 'ttt') {
            if (localStorage.computerGameResultsTTT == undefined) {
                map = new Map();
                map.set(0, points);
                map.set(1, results);
                localStorage.computerGameResultsTTT = JSON.stringify(Array.from(map.entries()));
            } else {
                map = new Map(JSON.parse(localStorage.computerGameResultsTTT));
                var i = map.size;
                points = points;
                map.set(0, points);
                map.set(i, results);
                localStorage.computerGameResultsTTT = JSON.stringify(Array.from(map.entries()));
            }
        } else {
            if (localStorage.computerGameResultsCN4 == undefined) {
                map = new Map();
                map.set(0, points);
                map.set(1, results);
                localStorage.computerGameResultsCN4 = JSON.stringify(Array.from(map.entries()));
            } else {
                map = new Map(JSON.parse(localStorage.computerGameResultsCN4));
                var i = map.size;
                points += map.get(0);
                map.set(0, points);
                map.set(i, results);
                localStorage.computerGameResultsCN4 = JSON.stringify(Array.from(map.entries()));
            }
        }
    }
}

function addEraseCache() {
    var bt = document.createElement('button');
    bt.setAttribute('id', 'delete-entries');
    bt.setAttribute('class', 'close');
    bt.textContent = 'Delete Entries';
    getIdElement('clear').appendChild(bt);
    bt.onclick = function() {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.computerGameResultsTTT != undefined) {
                localStorage.removeItem('computerGameResultsTTT');
                var parent = document.getElementById("TTT-Table");
                var header = document.getElementById("TTT-H");
                while (header.nextSibling) parent.removeChild(header.nextSibling);

                getIdElement('ttt-total-games').innerHTML = '';
                getIdElement('ttt-total-wins').innerHTML = '';
            }
            if (localStorage.computerGameResultsCN4 != undefined) {
                localStorage.removeItem('computerGameResultsCN4');
                var parent = document.getElementById("CN4-Table");
                var header = document.getElementById("CN4-H");
                while (header.nextSibling) parent.removeChild(header.nextSibling);

                getIdElement('cn4-total-games').innerHTML = '';
                getIdElement('cn4-total-wins').innerHTML = '';
            }
        }
    }
}

function openGameResult(name, type) {
    var tr, cont, t;
    tr = document.createElement('tr');
    tr.setAttribute('id', name + '-H');
    tr.setAttribute('class', 'tb-r-head');
    cont = new Array('Date', 'Winner');
    for (let el of cont) {
        t = document.createElement('th');
        t.innerHTML = el;
        tr.appendChild(t);
    }
    getIdElement(name + '-Table').appendChild(tr);
    if (typeof(Storage) !== "undefined") {
        if (type == 'ttt' && localStorage.computerGameResultsTTT == undefined) return;
        else if (type == 'cn4' && localStorage.computerGameResultsCN4 == undefined) return;
        var map = new Map(JSON.parse((type == 'ttt') ? localStorage.computerGameResultsTTT : localStorage.computerGameResultsCN4));
        var total = map.size;
        var wins = map.get(0);
        for (let i = 1; i < total; i++) {
            var draw, winner, date;
            var v = map.get(i);
            [draw, winner, date] = [v[0], v[1], v[2]];
            var c, p;
            [c, p] = draw ? ["", "Draw"] : [winner != 'AI' ? 'mark' : '', winner]
            var p = "<p class=\"" + c + "\">" + "<span>" + p + "</span>" + "</p>";
            tr = document.createElement('tr');
            cont = new Array(date, p);
            for (let el of cont) {
                t = document.createElement('td');
                t.innerHTML = el;
                tr.appendChild(t);
            }
            document.getElementById(name + '-Table').appendChild(tr);
        }
        getIdElement(type + '-total-games').innerHTML = total - 1;
        getIdElement(type + '-total-wins').innerHTML = wins;
    }
}

function openResults() {
    addEraseCache();
    openGameResult('TTT', 'ttt');
    openGameResult('CN4', 'cn4');
    getIdElement('games-overlay').style.width = '100%';
    getIdElement('results').style.pointerEvents = 'none';
    getIdElement('h-ttt').style.pointerEvents = 'none';
    getIdElement('h-cn4').style.pointerEvents = 'none';
}

function closeResults() {
    getIdElement('games-overlay').style.width = '0%';
    getIdElement('clear').removeChild(getIdElement('delete-entries'));
    var parent = getIdElement("TTT-Table");
    var header = getIdElement("TTT-H");
    while (parent.firstElementChild) parent.removeChild(parent.firstElementChild);

    parent = getIdElement("CN4-Table");
    header = getIdElement("CN4-H");
    while (parent.firstElementChild) parent.removeChild(parent.firstElementChild);

    getIdElement('results').style.pointerEvents = 'all';
    getIdElement('h-ttt').style.pointerEvents = 'all';
    getIdElement('h-cn4').style.pointerEvents = 'all';
}

function start(game) {
    if (game == 'ttt')
        GAME = new TicTacToe(5);
    else
        GAME = new ConnectFour(10000);
}

start('ttt');