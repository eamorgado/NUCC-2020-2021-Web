class Node {
    constructor(parent, table) {
        this.parent = parent;
        this.table = table;
        this.num_visits = 0;
        this.ai_wins = 0;
        this.descendents = new Array(7); //max 7
    }

    getParent() { return this.parent; }
    getVisits() { return this.num_visits; }
    getWins() { return this.ai_wins; }

    madeVisit() {
        this.num_visits++;
        return this.getVisits();
    }

    madeWin(res) {
        //node involved in another win => increment
        this.ai_wins += res;
        return this.getWins();
    }
}


class MonteCarloTreeSearch {
    /*
     * The Monte Carlo Tree Search is particularly interesting, it comes from
     *      the necessity of finding better search algorithms, both the minmax
     *      algorithm and its improvement do well in a small search tree, however
     *      when we expand too much the tree, they will become too slow and
     *      consume an enormous ammount of memmory, that is where the MTCS shines
     * It also stores the tree, however, it doesn't store all the tree, only the
     *      expanded nodes, at first, it will almost always store all the root's
     *      children, however, through time, it will learn and chose/save the 
     *      best nodes, that is, the nodes more visited, to ensure that the node
     *      visitation is fair, we use the UCT value, influenced by the victories
     *      of a node and its visitations as well as its parent visitations' 
     * The MCTS algorithm is composed of 4 parts:
     *      ->Selection, were it will chose a node, based on the best UCB value,
     *          until it is not leaf
     *      ->Expansion, once a leaf node is reached in the selection phase, 
     *          the algorithm will randomly chose one of its children, thats 
     *          when a new node is added to the tree
     *      ->Simulation, after having expanded the tree, it will simulate a game
     *          from that expanded node, during this phase, it will randomly 
     *          chose a play until a win/lose or draw state is reached, during
     *          this process, no node is stored;
     *      ->BackPropagation, having simulated a whole game and reached a
     *          terminal state, it will increment all the visits of its parents
     *          untill the root, and will update the parents victories, +1 if
     *          AI won, -1 if AI lost, 0 if reached Draw;
     * All this phases are in a while loop, in order to explore the game tree, 
     *      however, if we do not impose a limit the program will never stop,
     *      as such, a resource cap must e introduced, it can be a time usage
     *      limit or a node/memmory usage, we will use the node limit, that 
     *      limit can be given by the user (between 100 and 1000000), if no
     *      value is given we will use 100 as our limit
     */

    constructor(nodes_to_expand) {
        this.nodes_to_expand = !arguments.length ? 100 : nodes_to_expand;
    }

    MCTS(tb) {
        this.root = new Node(null, tb);
        var n = 1;
        while (n <= this.nodes_to_expand) {
            var node_selected = this.nodeSelection();
            if (node_selected == null) {
                n++;
                continue;
            }

            var node_expanded = this.nodeExpansion(node_selected);
            var result = this.nodeSimulation(node_expanded);
            this.nodeBackPropagation(node_expanded, result);
            n++;
        }

        var child_max = -1;
        for (let i = 0; i < 7; i++) {
            if (this.root.descendents[i] != null) {
                if (child_max == -1 || this.root.descendents[i].getVisits() > this.root.descendents[child_max].getVisits())
                    child_max = i;
            }
        }
        return new PlayConnect(tb.getLastFreeRowPosition(child_max), child_max);
    }

    nodeSelection() {
        return this.nodeSelectionRecursive(this.root);
    }

    nodeSelectionRecursive(parent) {
        for (let i = 0; i < 7; i++) {
            /*
             * This cycle will work as a check-in for every descendent of a 
             *      certain node, we will create all possible 7 children, 
             *      note that a child is produced by inserting a certain cell
             *      in one of 7 columns, as such if one of those columns is
             *      full, then we can do nothing, as such the descendent is
             *      unfit and must be ignored.
             *  Now, if the said column is not full, then a node has potential
             *      however, in case it hasn't been created, and nothe that this
             *      creation only happens in the expansion phase, then its value 
             *      is null, and we must stop this branch of recursion, hence 
             *      the return parent
             */
            if (parent.descendents[i] == null && !parent.table.isColumnFull(i))
                return parent;
        }
        /*
         * Now, we made the first test and eliminated unwanted children, so now
         *      we will cycle through the children, if they can not be produced,
         *      that is, the parent's column is full, we will ignore them, if
         *      such is false, then we will calculate its ucb and compare it to 
         *      the best found, this process is designed in order to find which,
         *      from all the parent's descendents has the best ucb, for that is
         *      the node where we want to focus our search
         */
        var max_ucb = -1;
        var max_ucb_index = -1;
        for (let i = 0; i < 7; i++) {
            if (parent.table.isColumnFull(i)) continue;

            var curr = parent.descendents[i];
            var wins;
            if (parent.table.getPlayer() == 'X') {
                //next player is AI
                wins = curr.getWins();
            } else {
                //next player is Human
                wins = curr.getVisits() - curr.getWins();
            }

            var ucb = (wins / curr.getVisits()) + Math.sqrt(2) * Math.sqrt(Math.log(parent.getVisits()) / curr.getVisits());
            //vall = ucb where c=sqrt(2)--wikipedia

            //choose best ucb
            if (ucb > max_ucb) {
                max_ucb = ucb;
                max_ucb_index = i;
            }
        }
        if (max_ucb_index == -1) return null;
        return this.nodeSelectionRecursive(parent.descendents[max_ucb_index]);
    }

    nodeExpansion(to_expand) {
        var to_visit = new Array(7);
        for (let i = 0; i < 7; i++) {
            if (to_expand.descendents[i] == null && !to_expand.table.isColumnFull(i)) {
                //can generate child, column free
                to_visit.push(i);
            }
        }

        var index = to_visit[Math.floor(Math.random() * to_visit.length)];
        var player = to_expand.table.getPlayer();
        var copy = new TableConnect(to_expand.table);

        player = player == 'X' ? 'O' : 'X';
        copy.makeNewPlay(index, player);
        to_expand.descendents[index] = new Node(to_expand, copy);
        return to_expand.descendents[index];
    }

    nodeSimulation(node_expanded) {
        var simulator = new TableConnect(node_expanded.table);
        var i = 0;
        var player = simulator.getPlayer();
        while (!simulator.isGameOver()) {
            i = Math.floor(Math.random() * 7);
            if (simulator.isColumnFull(i)) continue;
            player = player == 'X' ? 'O' : 'X';
            simulator.makeNewPlay(i, player);
        }
        return simulator.getChampion() == 'O' ? 1 :
            simulator.getChampion() == 'X' ? -1 :
            0;
    }

    nodeBackPropagation(explored, result) {
        var curr = explored;
        while (curr != null) {
            curr.madeVisit();
            curr.madeWin(result);
            curr = curr.parent;
        }
    }
}