(function (undefined) {

    const
        React       = require('react'),
        createView  = require('omniscient');

    var PlayerView;

    PlayerView = createView('PlayerView', function (props) {
        var { activePlayer, score, stones, stonestaken, id, name, color } = props,
            activeClass = activePlayer === id ? " active" : "",
            posX = id === 1 ? 70 : 1010;

        stonestaken = "x " + stonestaken;

        return <g>
            <g dangerouslySetInnerHTML={{
                __html: `<use x="${posX}" y="60" xlink:href="#GoGame-avatar${id}" />`
            }} />
            <text
                x={`${posX + 63}`}
                y={ "210" }
                className={`GoGame-playerName GoGame-player${id}Color` + activeClass }>{ name }</text>

            <rect x={`${posX - 18}`} y="260" width="160" height="360" rx="10" 
                className={`GoGame-panel GoGame-player${id}Color GoGame-player${id}StrokeColor`} />
            <rect x={`${posX - 18}`} y="380" width="160" height="1" className={`GoGame-panel GoGame-player${id}StrokeColor`} />
            <rect x={`${posX - 18}`} y="500" width="160" height="1" className={`GoGame-panel GoGame-player${id}StrokeColor`} />

            
            <text
                x={`${posX + 60}`}
                y={ "325" }
                className={`GoGame-playerScoreBig GoGame-player${id}Color` }>{ score }</text>
            <text
                x={`${posX + 60}`}
                y={ "350" }
                className={`GoGame-playerLabel GoGame-player${id}Color` }>Total score</text>

             <g dangerouslySetInnerHTML={{
                 __html: `<use x="${posX + 30}" y="415" width="60" height="60" xlink:href="#GoGame-cell-player${2 - id + 1}" />`
             }} />
            <text
                x={`${posX + 65}`}
                y={ "435" }
                className={`GoGame-playerStonesCount GoGame-player${id}Color` }>{ stonestaken }</text>
            <text
                x={`${posX + 60}`}
                y={ "465" }
                className={`GoGame-playerLabel GoGame-player${id}Color` }>Prisoners</text>

            <text
                x={`${posX + 60}`}
                y={ "553" }
                className={`GoGame-playerScore GoGame-player${id}Color` }>{ stones }</text>
            <text
                x={`${posX + 60}`}
                y={ "580" }
                className={`GoGame-playerLabel GoGame-player${id}Color` }>Stones on board</text>
        </g>;
    });

    module.exports = PlayerView;
}());
