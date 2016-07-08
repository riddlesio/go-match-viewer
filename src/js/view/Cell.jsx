import React      from 'react';
import createView from 'omniscient';

const Cell = createView(function (data) {

    const { row, column, x, y, width, height, player } = data;
    const className = `player${player}`;
    const key       = `row${row}col${column}`;

    return (
        <g key={ key } className="GoGame-cell" >
            <use
                x={ x }
                y={ y }
                width={ width }
                height={ height }
                xlinkHref={ `#GoGame-cell-${className}` }
            />
        </g>
     );
});

export default Cell;
