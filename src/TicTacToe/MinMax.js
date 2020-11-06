class MinMaxTicTac {
    constructor(depth) {
        this.max_depth = depth;
        this.n_nodes = 0;
    }

    getNodes() { return this.nodes; }
    setNodes(n) { this.nodes = n; }

    minMax(tb) {
        /*
         * The min max algorithm will call the min and max one after the
         *      other until a solution is produced.
         * Note that we start with the max, for we want to maximize the AI
         *      score and minimize the Human score
         * In this method we also count the time it takes to produce an
         *      answer as well as the number of nodes created in the search
         */
        this.nodes = 0;
        return this.maxP(new TableTicTac(tb), 0);
    }

    maxP(tb, depth) {
        if (tb.isGameOver() || depth == this.max_depth)
            return new PlayTicTac(
                tb.getPlay().getRow(),
                tb.getPlay().getCol(),
                tb.utility(depth)
            );

        var maxPlay = new PlayTicTac(Number.MIN_SAFE_INTEGER);
        for (let son of tb.getDescendents('O')) { //use for-of, for-in is to enumerate
            this.nodes++;
            let p = this.minP(son, depth + 1);
            if (p.getUtility() > maxPlay.getUtility()) {
                maxPlay.setRow(son.getPlay().getRow());
                maxPlay.setCol(son.getPlay().getCol());
                maxPlay.setUtility(p.getUtility());
            }
        }
        return maxPlay;
    }

    minP(tb, depth) {
        if (tb && (tb.isGameOver() || depth == this.max_depth))
            return new PlayTicTac(
                tb.getPlay().getRow(),
                tb.getPlay().getCol(),
                tb.utility(depth)
            );

        var maxPlay = new PlayTicTac(Number.MAX_SAFE_INTEGER);
        for (let son of tb.getDescendents('X')) {
            this.nodes++;
            let p = this.maxP(son, depth + 1);
            if (p.getUtility() < maxPlay.getUtility()) {
                maxPlay.setRow(son.getPlay().getRow());
                maxPlay.setCol(son.getPlay().getCol());
                maxPlay.setUtility(p.getUtility());
            }
        }
        return maxPlay;
    }
}