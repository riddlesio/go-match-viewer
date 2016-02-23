(function () {

    const _ = require('lodash');

    var Parser;

    /**
     * Singleton containing several utility functions for data parsing
     * @type {Object}
     */
    Parser = {

        parsePlayerNames: function (settings) {

            var names = window.frameElement.getAttribute("data-players"),
                emailHash = window.frameElement.getAttribute("data-emailhash");

            names = names ? names.split(',') : ['',''];
            emailHash = emailHash ? emailHash.split(',') : ['',''];

            settings.players.names = names;
            settings.players.emailHash = emailHash;
            return settings;
        },

        parseStates: function (data, settings) {

            var initialState,
                states,
                field                           = settings.field,
                { width, height, cellmargin }   = field.cell,
                { margintop, marginleft }       = field.margins;

            // create initial empty board state
            initialState = _.cloneDeep(data.states[0]);
            initialState.field = initialState.field.replace(/4|8/g, '0');
            initialState.player = -1;
            initialState.move = -1;
            data.states.unshift(initialState);

            return _.map(data.states, function (state) {

                var { move, column, winner, field, illegalMove, player, player1stonestaken, player2stonestaken, player1score, player2score } = state;

                if (winner) {
                    if (winner != "none") {
                        winner = settings.players.names[parseInt(winner.replace("player", "")) - 1];
                    }
                }
                return {
                    move,
                    column,
                    winner,
                    illegalMove,
                    player,
                    player1stonestaken,
                    player2stonestaken,
                    player1score,
                    player2score,
                    cells: _.chain(field)
                        .thru((string) => string.split(/,|;/))
                        .map(function (cellType, index) {
                            var player = cellType;
                            var row     = Math.floor(index / 19),
                                column  = index % 19,
                                x       = column * width + marginleft,
                                y       = row * height + margintop;
                            return { row, column, x, y, width, height, player};
                        })
                        .value()
                };
            });

            return states;
        }
    };

    module.exports = Parser;
}());
