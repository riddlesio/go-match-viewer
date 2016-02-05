(function (undefined) {

    const
        React      = require('react'),
        createView = require('omniscient'),
        classNames = require('classnames');

    var Cell;

    Cell = createView(function (data) {
        var { row, column, x, y, width, height, player } = data;

        var backgroundClassName = "active" + 0 + "-taken" + 0;
        var className = "player" + player;

        var id="row" + row + "col" + column;

        return (
            <g
            key="key"
            className="GoGame-cell" >
                 <g id={ id } dangerouslySetInnerHTML={{
                     __html: `<use x="${ x }" y="${ y }" width="${ width }" height="${ height }" xlink:href="#GoGame-cellbackground" />`
                 }} />
                 <g id={ id } dangerouslySetInnerHTML={{
                     __html: `<use x="${ x }" y="${ y }" width="${ width }" height="${ height }" xlink:href="#GoGame-cell-${ className }" />`
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
    function createClassName (cellType) {
        if (cellType == 1) { return "player1"; }
        if (cellType == 2) { return "player2"; }
    }



    module.exports = Cell;
}());
