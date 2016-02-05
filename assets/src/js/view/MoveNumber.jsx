(function (undefined) {

    const
        React      = require('react'),
        createView = require('omniscient'),
        classNames = require('classnames');

    var MoveNumber;

    MoveNumber = createView(function (data) {
        var { x, y, width, height, type, move } = data,
            id = "x" + x + "y" + y,
            textx = x + 15, 
            texty = y + 20;

        return (
         <g id={ id } dangerouslySetInnerHTML={{
             __html: `<use x="${ x }" y="${ y }" width="${ width }" height="${ height }" xlink:href="#round-${ type }" />
             <text x="${ textx }" y="${ texty }" class="round-${ type }">${ move }</text>`
         }} />             
        );
    });

    // Private functions

    module.exports = MoveNumber;
}());
