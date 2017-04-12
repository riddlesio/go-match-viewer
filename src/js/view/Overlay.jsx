import React       from 'react';
import createView  from 'omniscient';
import classNames  from 'classnames';

const Overlay = createView('Overlay', function (props) {

    const { winner } = props;

    console.log(winner);

    const cx = classNames({
        'u-hidden': !winner,
    });

    let message;

    if (!winner) {
        message = 'The game is a draw';
    } else {
        message = `${winner} won the game!`;
    }

    return (
        <g className={ cx }>
            <rect x="0" y="0" width="100%" height="100%" className="GoGame-overlayBackground"/>
            <text x="50%" y="50%" className="GoGame-overlayMessage">{ message }</text>
        </g>
    );
});

export default Overlay;
