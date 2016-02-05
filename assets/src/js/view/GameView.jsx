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
            { winner, illegalMove, player } = state,
            { players }         = settings,
            player1class        = "", 
            player2class        = "",
            illegalMoveClass    = "";

        if (player === 1) {
            player1class = " active";
            illegalMoveClass = " TicTacToeGame-player1Color";
        } else if (player === 2) {
            player2class = " active";
            illegalMoveClass = " TicTacToeGame-player2Color";
        }

        return (
            <svg className="TicTacToeGame" viewBox="0 0 1200 705" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <symbol id="TicTacToeGame-cell-player1" dangerouslySetInnerHTML={{
                        __html: `<image width="55" height="55" xlink:href="./img/TicTacToeGame-cell-player1.svg" />`
                    }} />
                    <symbol id="TicTacToeGame-cell-player2" dangerouslySetInnerHTML={{
                        __html: `<image width="55" height="55" xlink:href="./img/TicTacToeGame-cell-player2.svg" />`
                    }} />
                    <symbol id="TicTacToeGame-cellbackground-active0-taken0" dangerouslySetInnerHTML={{
                        __html: `<image width="55" height="55" xlink:href="./img/TicTacToeGame-cellbackground-active0-taken0.svg" />`
                    }} />
                    <symbol id="TicTacToeGame-cellbackground-active1-taken0" dangerouslySetInnerHTML={{
                        __html: `<image width="55" height="55" xlink:href="./img/TicTacToeGame-cellbackground-active1-taken0.svg" />`
                    }} />
                    <symbol id="TicTacToeGame-cellbackground-active2-taken0" dangerouslySetInnerHTML={{
                        __html: `<image width="55" height="55" xlink:href="./img/TicTacToeGame-cellbackground-active2-taken0.svg" />`
                    }} />
                    <symbol id="TicTacToeGame-cellbackground-active0-taken1" dangerouslySetInnerHTML={{
                        __html: `<image width="55" height="55" xlink:href="./img/TicTacToeGame-cellbackground-active0-taken1.svg" />`
                    }} />
                    <symbol id="TicTacToeGame-cellbackground-active0-taken2" dangerouslySetInnerHTML={{
                        __html: `<image width="55" height="55" xlink:href="./img/TicTacToeGame-cellbackground-active0-taken2.svg" />`
                    }} />
                    <symbol id="round-past" dangerouslySetInnerHTML={{
                        __html: `<image width="30" height="30" xlink:href="./img/round-past.svg" />`
                    }} />
                    <symbol id="round-future" dangerouslySetInnerHTML={{
                        __html: `<image width="30" height="30" xlink:href="./img/round-future.svg" />`
                    }} />
                    <symbol id="round-current" dangerouslySetInnerHTML={{
                        __html: `<image width="30" height="30" xlink:href="./img/round-current.svg" />`
                    }} />
                    <symbol id="TicTacToeGame-avatar1" dangerouslySetInnerHTML={{
                        __html: `<image width="120" height="120" xlink:href="http://gravatar.com/avatar/${ players.emailHash[0] }?s=100&amp;d=mm" />`
                    }} />
                    <symbol id="TicTacToeGame-avatar2" dangerouslySetInnerHTML={{
                        __html: `<image width="120" height="120" xlink:href="http://gravatar.com/avatar/${ players.emailHash[1] }?s=100&amp;d=mm" />`
                    }} />
                </defs>

                { FieldView(state) }

                <g dangerouslySetInnerHTML={{
                    __html: `<use x="100" y="85" rx="0.1" ry="0.1" xlink:href="#TicTacToeGame-avatar1" />`
                }} />
                <g dangerouslySetInnerHTML={{
                    __html: `<use x="352" y="85" xlink:href="#TicTacToeGame-avatar2" />`
                }} />
                <text
                    x={ "158" }
                    y={ "235" }
                    className={"TicTacToeGame-playerName TicTacToeGame-player1Color" + player1class }>{ players.names[0] }</text>
                <text
                    x={ "410" }
                    y={ "235" }
                    className={"TicTacToeGame-playerName TicTacToeGame-player2Color" + player2class }>{ players.names[1] }</text>


                <text x="50%" y="60" className={"TicTacToeGame-illegalMove" + illegalMoveClass }>{ illegalMove }</text>
                <Overlay winner={ winner } />

            </svg>
        );
    });

    module.exports = GameView;
}());

