(function (undefined) {

    const
        _           = require('lodash'),
        React       = require('react'),
        createView  = require('omniscient'),
        Cell        = require('./Cell.jsx');

    var FieldView;

    FieldView = createView('FieldView', function (state) {
        var { round, column, winner, field, fieldWidth, fieldHeight, cells } = state;

        return <g
            key="key"
            className="TicTacToeGame-playerView" >
                <g className="TicTacToeGame-grid">
                    { _.map(cells, Cell) }
                </g>

            </g>;
    });

    module.exports = FieldView;
}());
