const _ = require('lodash');

function parsePlayerNames(playerData, settings) {

    settings.players.names = [];
    settings.players.emailHash = [];

    playerData.forEach((player) => {
        const name = player.name ? player.name : '';
        const hash = player.emailHash ? player.emailHash : '';

        settings.players.names.push(name);
        settings.players.emailHash.push(hash);
    });

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
