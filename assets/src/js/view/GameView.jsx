(function () {

    const
        _           = require('lodash'),
        React       = require('react'),
        createView  = require('omniscient'),
        FieldView  = require('./FieldView.jsx'),
        Overlay     = require('./Overlay.jsx').jsx;

    var GameView;

    GameView = createView('GameView', function (props) {
        
        var { state, settings } = props,
            { winner, illegalMove, player, player1stones, player2stones, player1stonestaken, player2stonestaken, player1score, player2score } = state,
            { players }         = settings,
            player1class        = "", 
            player2class        = "",
            illegalMoveClass    = "";

        if (player === 1) {
            player1class = " active";
            illegalMoveClass = " GoGame-player1Color";
        } else if (player === 2) {
            player2class = " active";
            illegalMoveClass = " GoGame-player2Color";
        }

        player1stonestaken = "x " + player1stonestaken;
        player2stonestaken = "x " + player2stonestaken;

        return (
            <svg className="GoGame" viewBox="0 0 1200 705" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <symbol id="GoGame-cell-player1" dangerouslySetInnerHTML={{
                        __html: `<image width="30" height="30" xlink:href="./img/GoGame-cell-player1.svg" />`
                    }} />
                    <symbol id="GoGame-cell-player2" dangerouslySetInnerHTML={{
                        __html: `<image width="30" height="30" xlink:href="./img/GoGame-cell-player2.svg" />`
                    }} />
                    <symbol id="GoGame-board" dangerouslySetInnerHTML={{
                        __html: `<image width="640" height="640" xlink:href="./img/GoGame-board.svg" />`
                    }} />
                    <symbol id="GoGame-avatar1" dangerouslySetInnerHTML={{
                        __html: `
                        <image width="120" height="120" clip-path="url(#roundedclip)" xlink:href="http://gravatar.com/avatar/${ players.emailHash[0] }?s=100&amp;d=mm" />
                        <rect width="120" height="120" rx="10" x="1" y="1" style="stroke:#2ba9fa;stroke-width:2;fill-opacity:0;stroke-opacity:1" />
                        `
                    }} />
                    <symbol id="GoGame-avatar2" dangerouslySetInnerHTML={{
                        __html: `
                        <image width="120" height="120" clip-path="url(#roundedclip)" xlink:href="http://gravatar.com/avatar/${ players.emailHash[1] }?s=100&amp;d=mm" />
                        <rect width="120" height="120" rx="10" x="1" y="1" style="stroke:#fb4f50;stroke-width:2;fill-opacity:0;stroke-opacity:1" />
                        `
                    }} />
                    <clipPath id="roundedclip">
                        <rect x="0" y="0" width="120" height="120" rx="10"/>
                    </clipPath>
                </defs>

                { FieldView(state) }

                <g dangerouslySetInnerHTML={{
                    __html: `<use x="70" y="60" xlink:href="#GoGame-avatar1" />`
                }} />
                <g dangerouslySetInnerHTML={{
                    __html: `<use x="1010" y="60" xlink:href="#GoGame-avatar2" />`
                }} />

                <rect x="70" y="260" width="120" height="360" rx="10" className='GoGame-panel GoGame-player1Panel'/>
                <rect x="70" y="380" width="120" height="1" className='GoGame-panel GoGame-player1Panel'/>
                <rect x="70" y="500" width="120" height="1" className='GoGame-panel GoGame-player1Panel'/>
                <rect x="1010" y="260" width="120" height="360" rx="10" className='GoGame-panel GoGame-player2Panel'/>
                <rect x="1010" y="380" width="120" height="1" className='GoGame-panel GoGame-player2Panel'/>
                <rect x="1010" y="500" width="120" height="1" className='GoGame-panel GoGame-player2Panel'/>


                <text
                    x={ "130" }
                    y={ "215" }
                    className={"GoGame-playerName GoGame-player1Color" + player1class }>{ players.names[0] }</text>
                <text
                    x={ "1070" }
                    y={ "215" }
                    className={"GoGame-playerName GoGame-player2Color" + player2class }>{ players.names[1] }</text>


                <text
                    x={ "130" }
                    y={ "325" }
                    className={"GoGame-playerScore GoGame-player1Color" }>{ player1score }</text>
                <text
                    x={ "130" }
                    y={ "350" }
                    className={"GoGame-playerLabel GoGame-player1Color" }>Total score</text>

                <text
                    x={ "1070" }
                    y={ "325" }
                    className={"GoGame-playerScore GoGame-player2Color" }>{ player2score }</text>
                <text
                    x={ "1070" }
                    y={ "350" }
                    className={"GoGame-playerLabel GoGame-player2Color" }>Total score</text>



                 <g dangerouslySetInnerHTML={{
                     __html: `<use x="95" y="415" width="60" height="60" xlink:href="#GoGame-cell-player2" />`
                 }} />

                 <g dangerouslySetInnerHTML={{
                     __html: `<use x="1030" y="415" width="60" height="60" xlink:href="#GoGame-cell-player1" />`
                 }} />
                <text
                    x={ "145" }
                    y={ "435" }
                    className={"GoGame-playerName GoGame-player1Color" }>{ player1stonestaken }</text>
                <text
                    x={ "130" }
                    y={ "465" }
                    className={"GoGame-playerLabel GoGame-player1Color" }>Prisoners</text>
                <text
                    x={ "1085" }
                    y={ "435" }
                    className={"GoGame-playerName GoGame-player2Color" }>{ player2stonestaken }</text>
                <text
                    x={ "1070" }
                    y={ "465" }
                    className={"GoGame-playerLabel GoGame-player2Color" }>Prisoners</text>


                <text
                    x={ "130" }
                    y={ "553" }
                    className={"GoGame-playerName GoGame-player1Color" }>{ player1stones }</text>
                <text
                    x={ "130" }
                    y={ "580" }
                    className={"GoGame-playerLabel GoGame-player1Color" }>Stones on board</text>
                <text
                    x={ "1070" }
                    y={ "553" }
                    className={"GoGame-playerName GoGame-player2Color" }>{ player2stones }</text>
                <text
                    x={ "1070" }
                    y={ "580" }
                    className={"GoGame-playerLabel GoGame-player2Color" }>Stones on board</text>

                <text x="50%" y="60" className={"GoGame-illegalMove" + illegalMoveClass }>{ illegalMove }</text>
                <Overlay winner={ winner } />

            </svg>
        );
    });

    module.exports = GameView;
}());

