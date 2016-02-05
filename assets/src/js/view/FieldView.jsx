(function (undefined) {

    const
        _           = require('lodash'),
        React       = require('react'),
        createView  = require('omniscient'),
        Cell        = require('./Cell.jsx'),
        MoveNumber  = require('./MoveNumber.jsx');

    var FieldView;

    FieldView = createView('FieldView', function (state) {
        var { round, column, winner, field, fieldWidth, fieldHeight, cells, moves } = state;

        return <g
            key="key"
            className="TicTacToeGame-playerView" >
                <g className="TicTacToeGame-grid">
                    { _.map(cells, Cell) }
                </g>
                <text x="130" y="284" className="TicTacToeGame-rounds">Moves</text>
                <g className="TicTacToeGame-rounds">
                    { _.map(moves, MoveNumber) }
                </g>

            </g>;
    });

    module.exports = FieldView;
}());
