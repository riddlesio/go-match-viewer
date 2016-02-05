(function (undefined) {

    const
        React      = require('react'),
        createView = require('omniscient'),
        classNames = require('classnames');

    var Cell;

    Cell = createView(function (data) {

        /**
         * Data should have the following structure:
         * {
         *    x: Number,
         *    y: Number,
         *    width: Number,
         *    height: Number,
         *    cellType: String
         * }
         */

        var { row, column, x, y, width, height, player, active, taken } = data;

        var backgroundClassName = createBackgroundClassName(active, taken);
        var className = createClassName(player);

        var id="row" + row + "col" + column;

        return (
            <g
            key="key"
            className="TicTacToeGame-cell" >
                 <g id={ id } dangerouslySetInnerHTML={{
                     __html: `<use x="${ x }" y="${ y }" width="${ width }" height="${ height }" xlink:href="#TicTacToeGame-cellbackground-${ backgroundClassName }" />`
                 }} />
                 <g id={ id } dangerouslySetInnerHTML={{
                     __html: `<use x="${ x }" y="${ y }" width="${ width }" height="${ height }" xlink:href="#TicTacToeGame-cell-${ className }" />`
                 }} />
            </g>
         );
    });

    // Private functions

    /**
     * Creates a className string based on the passed cellType
     * @param  {String} cellType A value from enum/CellType
     * @return {String}
     */
    function createBackgroundClassName (active, taken) {
        var name = "active" + active + "-taken" + taken;
        return name;
       
    }

    /**
     * Creates a className string based on the passed cellType
     * @param  {String} cellType A value from enum/CellType
     * @return {String}
     */
    function createClassName (cellType) {
        if (cellType == 1) { return "player1"; }
        if (cellType == 2) { return "player2"; }
    }



    module.exports = Cell;
}());
