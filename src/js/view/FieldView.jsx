import _           from 'lodash';
import React       from 'react';
import createView  from 'omniscient';
import Cell        from './Cell.jsx';

const FieldView = createView('FieldView', function (state) {

    const { cells } = state;

    return (
        <g key="fieldview">
            <use x="280" y="12" width="640" height="640" xlinkHref="#GoGame-board" />
            <g x="280" y="12">
                { _.map(cells, Cell) }
            </g>
        </g>
    );
});

export default FieldView;
