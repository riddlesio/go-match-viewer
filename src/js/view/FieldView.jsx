(function (undefined) {

    const
        _           = require('lodash'),
        React       = require('react'),
        createView  = require('omniscient'),
        Cell        = require('./Cell.jsx');

    var FieldView;

    FieldView = createView('FieldView', function (state) {
        var { cells } = state;

        return <g key='fieldview'>
                 <g id='GoGame-board' className="GoGame-board" dangerouslySetInnerHTML={{
                     __html: `<use x="280" y="12" width="640" height="640" xlink:href="#GoGame-board" />`
                 }} />
                <g id='GoGame-grid' x="280" y="12" className="GoGame-grid">
                    { _.map(cells, Cell) }
                </g>

            </g>;
    });

    module.exports = FieldView;
}());
