const _ = require('lodash');

/**
 * Singleton containing several utility functions for data parsing
 * @type {Object}
 */

function parsePlayerNames(playerData, settings) {

    let names = playerData.names;
    let emailHash = playerData.emailHash;

    names = names ? names.split(',') : ['', ''];
    emailHash = emailHash ? emailHash.split(',') : ['', ''];

    settings.players.names = names;
    settings.players.emailHash = emailHash;

    return settings;
}

function parseStates(data, settings) {

    let initialState;

    const field                     = settings.field;
    const { width, height }         = field.cell;
    const { margintop, marginleft } = field.margins;

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

        if (winner && winner != 'none') {
            winner = settings.players.names[parseInt(winner.replace('player', '')) - 1];
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
                    let player  = cellType;
                    let row     = Math.floor(index / 19);
                    let column  = index % 19;
                    let x       = column * width + marginleft;
                    let y       = row * height + margintop;
                    let key     = row + '-' + column;
                    return { key, row, column, x, y, width, height, player };
                })
                .value(),
        };
    });
}

export {
    parsePlayerNames,
    parseStates,
};
