const
    _           = require('lodash'),
    React       = require('react'),
    createView  = require('omniscient'),
    FieldView   = require('./FieldView.jsx'),
    PlayerView  = require('./PlayerView.jsx'),
    Overlay     = require('./Overlay.jsx').jsx;

const GameView = createView('GameView', function (props) {

    var { state, settings } = props,
        { winner, illegalMove, player, players, round } = state,
        playerSettings      = settings.players,
        colors              = settings.colors.players,
        illegalMoveClass    = '';

    if (player === 1) {
        illegalMoveClass = ' GoGame-player1Color';
    } else if (player === 2) {
        illegalMoveClass = ' GoGame-player2Color';
    }

    players.map(function(p, index) {
        p.name = playerSettings.names[index];
        p.activePlayer = player;
        p.id = index + 1;
        p.color = colors[p.id];
        p.key = 'playerview-' + p.id;
        return p;
    });

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
                    __html: `<image width="640" height="640" xlink:href="./img/board.svg" />`
                }} />
                <symbol id="GoGame-avatar1" dangerouslySetInnerHTML={{
                    __html: `
                    <image width="120" height="120" clip-path="url(#roundedclip)"
                        xlink:href="http://gravatar.com/avatar/${playerSettings.emailHash[0]}?s=100&amp;d=mm" />
                    <rect width="120" height="120" rx="10" x="1" y="1"
                        style="stroke:${colors[1]};stroke-width:4;fill-opacity:0;stroke-opacity:1" />
                    `
                }} />
                <symbol id="GoGame-avatar2" dangerouslySetInnerHTML={{
                    __html: `
                    <image width="120" height="120" clip-path="url(#roundedclip)"
                        xlink:href="http://gravatar.com/avatar/${ playerSettings.emailHash[1] }?s=100&amp;d=mm" />
                    <rect width="120" height="120" rx="10" x="1" y="1"
                        style="stroke:${colors[2]};stroke-width:4;fill-opacity:0;stroke-opacity:1" />
                    `
                }} />
                <clipPath id="roundedclip">
                    <rect x="0" y="0" width="120" height="120" rx="10"/>
                </clipPath>
            </defs>

            <text x="15" y="30" className="GoGame-round">{ 'Round ' + round }</text>

            { _.map(players, PlayerView) }

            { FieldView(state) }

            <text x="50%" y="35" className={ 'GoGame-illegalMove' + illegalMoveClass }>{ illegalMove }</text>

            <Overlay winner={ winner } />

        </svg>
    );
});

export default GameView;
