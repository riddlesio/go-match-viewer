(function (undefined) {

    const
        React      = require('react'),
        createView = require('omniscient'),
        classNames = require('classnames');

    var Cell;

    Cell = createView(function (data) {
        var { row, column, x, y, width, height, player } = data,
            className = "player" + player,
            id = "row" + row + "col" + column;

        return (
            <g className="GoGame-cell" >
                 <g id={ id } dangerouslySetInnerHTML={{
                     __html: `<use x="${ x }" y="${ y }" width="${ width }" height="${ height }" xlink:href="#GoGame-cell-${ className }" />`
                 }} />
            </g>
         );
    });

    // Private functions
    module.exports = Cell;
}());
