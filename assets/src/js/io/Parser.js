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
            initialState.player = -1;
            initialState.round = 0;
            initialState.field = initialState.field.replace(/1|2/g, '0');
            initialState.players[0].score = 0;
            initialState.players[0].stones = 0;
            data.states.unshift(initialState);

            data.states;

            return _.map(data.states, function (state) {

                var { round, column, winner, field, illegalMove, player, players } = state;

                if (winner && winner != "none") {
                    winner = settings.players.names[parseInt(winner.replace("player", "")) - 1];
                }
                return {
                    round,
                    column,
                    winner,
                    illegalMove,
                    player,
                    players,
                    cells: _.chain(field)
                        .thru((string) => string.split(/,|;/))
                        .map(function (cellType, index) {
                            var player = cellType,
                                row     = Math.floor(index / 19),
                                column  = index % 19,
                                x       = column * width + marginleft,
                                y       = row * height + margintop,
                                key     = row + '-' + column;
                            return { key, row, column, x, y, width, height, player};
                        })
                        .value()
                };
            });

            return states;
        }
    };

    module.exports = Parser;
}());
