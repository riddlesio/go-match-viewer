import React        from 'react';
import component    from 'omniscient';
import _            from 'lodash';
import FieldView    from './FieldView.jsx';
import PlayerView   from './PlayerView.jsx';
import Overlay      from './Overlay.jsx';

const GameView = component('GameView', function (props) {

    const { state, settings } = props;
    const { winner, illegalMove, player, players, round } = state;
    const playerSettings      = settings.players;
    const colors              = settings.colors.players;
    const illegalMoveClass    = player === 0 || player === 1 ? ` GoGame-player${player}Color` : '';

    players.map((p, index) => {
        p.name = playerSettings.names[index];
        p.activePlayer = player;
        p.id = index;
        p.color = colors[p.id];
        p.key = 'playerview-' + p.id;

        return p;
    });

    return (
        <svg className="GoGame" viewBox="0 0 1200 705" preserveAspectRatio="xMidYMid meet">
            <defs>
                <image
                    id="image"
                    width="15"
                    height="633"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAJ5CAYAAABxMmq/AAAACXBIWXMAAAsSAAALEgHS3X78AAACB0lEQVR4Xu3QPU/CUBiGYWyrRPAjDEAImujA5GZi6i8gcSNMJBBWJ0YSjZOD+rPrU/sccyAtibP3cOcNL+c6adsqiqJ1oKND/zeBsiQq7BpxOJCqTJ1EZd7vXLKPUx/uqAt16dnxPlywgwNsq3M1UNfqxnPgfTu+IODyvY5VVw3VRN2r3HPifdfnkoDDxylv7alboyc188y97/ncz0eMH/lU9dWdmqq1evacet/3uTTG5dcsH2lUVI85Vxv14jn3fuRzWR0eqwe1UFv17rnwftyEz9RVUb3fUr2qD8+l91c+14gf1Uq9qU/Plfd/wl9gMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg/83/vwrztVSvaoPz6X3jbirxupBLdRWvXsuvB/7XC0eqXs1Vxv14jn3flSHU3Wq+upOTdVaPXtOve/7XBrjRLVVT90W1fs9qZln7n3P55KAW/5xXFSPNFSTonrM3HPifdfnyvOtgMOjl7eeq4G6VjeeA+/bPncU4/iCE9VRF+rSs+P9L6zD4YLMh0NZBGvx/iVJ1A46hPcvavz/G+oMITkiQBy9AAAAAElFTkSuQmCC"
                />
                <image
                    id="image-2"
                    width="633"
                    height="15"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnkAAAAPCAYAAACY7dlUAAAACXBIWXMAAAsSAAALEgHS3X78AAABlklEQVR4Xu3dO2sUURzG4Y1Rg3dSJCIqmCKVlYKXTxBIl1SBKNY2loKXykL82Jv3xR3ZNRvINtkJPMXTDHP6H/85Z85kOp1OLrABAMDoLW25i+Luxsxm3AQAYHTaaUOznYu9ZZO7LrgVW3En7s3cBwBg7YY2a6e119pt7beFyd7/kbc5e7kLt2MnnsTTmWcAAKzN0GTts3Zae63d1n4bQm8h8obAux0P4nHsxct4FW/iXbwHAGBt2mPtsvZZO6291m5rv7Xj/oXefOT12+7d2I39eBsHcRwncRof4iMAAFeuHdYea5e1z9pp7bV2W/utHdeeW4i8bthr/T2M5/E6DuNTfImv8T1+xE8AAK5cO6w91i5rn7XT2mvttvZbO649166bzJ+m7cNH8WL6dxR4FJ/jW/yK3/EHAIC1aY+1y9pn7bT2Wrut/daOGyJvwyQPAOB6WHmSZ08eAMD4tcNW3pPndC0AwPitfLrWf/IAAMZvaLJL/yfPjRcAANfDyjdezMeeu2sBAMbt0nfXLos9AADGbWnLnQGuiiEdHqtogwAAAABJRU5ErkJggg=="
                />
                <symbol id="GoGame-board" viewBox="0 0 672 672">
                    <g className="Board-1">
                        <polygon
                            className="Board-2"
                            points="12.42 672.02 672 672.02 672 12.03 660.01 0 0 0.02 0 660.52 12.42 672.02"
                        />
                        <polygon
                            className="Board-3"
                            points="0 660.52 660 660 660 0 0 0 0 660.52"
                        />
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="21" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(597.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="604.67" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(563.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="570.33" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(529.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="536" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(494.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="501.67" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(460.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="467.33" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(426.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="433" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(391.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="398.67" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(357.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="364.33" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(323.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="330" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(288.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="295.67" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(254.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="261.33" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(220.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="227" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(185.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="192.67" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(151.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="158.33" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(117.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="124" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(82.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="89.67" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(48.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="55.33" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(632.9 11.36)" xlinkHref="#image"/>
                            <rect className="Board-6" x="639" y="17.49" width="2" height="620"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 11.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="17.49" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 594.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="601.16" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 560.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="566.82" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 526.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="532.49" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 491.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="498.16" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 457.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="463.82" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 423.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="429.49" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 388.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="395.16" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 354.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="360.82" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 320.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="326.49" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 285.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="292.16" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 251.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="257.82" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 217.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="223.49" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 182.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="189.16" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 148.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="154.82" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 114.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="120.49" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 79.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="86.16" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 45.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="51.82" width="620" height="2"/>
                        </g>
                        <g className="Board-4">
                            <use className="Board-5" transform="translate(14.9 629.36)" xlinkHref="#image-2"/>
                            <rect className="Board-6" x="21" y="635.49" width="620" height="2"/>
                        </g>
                        <circle className="Board-7" cx="537.01" cy="327.49" r="7.5"/>
                        <circle className="Board-7" cx="125" cy="327.49" r="7.5"/>
                        <circle className="Board-7" cx="331.03" cy="327.49" r="7.5"/>
                        <circle className="Board-7" cx="331" cy="120.49" r="7.5"/>
                        <circle className="Board-7" cx="331" cy="533.49" r="7.5"/>
                        <circle className="Board-7" cx="125" cy="121.51" r="7.5"/>
                        <circle className="Board-7" cx="125" cy="533.49" r="7.5"/>
                        <circle className="Board-7" cx="538" cy="533.49" r="7.5"/>
                        <circle className="Board-7" cx="537" cy="121.51" r="7.5"/>
                        <polygon
                            className="Board-8"
                            points="0 660.38 12.42 672.02 672 671.36 660 659.29 0 660.38"
                        />
                    </g>
                </symbol>
                <symbol id="GoGame-cell-player0" viewBox="0 0 37 37">
                    <g>
                        <circle fill="#4458cc" cx="18.62" cy="18" r="12.5"/>
                        <circle fill="#6aa2fe" cx="18.5" cy="16" r="12.5"/>
                    </g>
                </symbol>
                <symbol id="GoGame-cell-player1" viewBox="0 0 37 37">
                    <g>
                        <circle fill="#cc4242" cx="17.71" cy="17.5" r="12.5"/>
                        <circle fill="#ff5552" cx="17.42" cy="15.5" r="12.5"/>
                    </g>
                </symbol>
                <symbol id="GoGame-avatar0" dangerouslySetInnerHTML={{
                    __html: `
                    <image width="120" height="120" clip-path="url(#roundedclip)"
                        xlink:href="http://gravatar.com/avatar/${playerSettings.emailHash[0]}?s=100&amp;d=mm" />
                    <rect width="120" height="120" rx="10" x="1" y="1"
                        style="stroke:${colors[0]};stroke-width:4;fill-opacity:0;stroke-opacity:1" />
                    `
                }} />
                <symbol id="GoGame-avatar1" dangerouslySetInnerHTML={{
                    __html: `
                    <image width="120" height="120" clip-path="url(#roundedclip)"
                        xlink:href="http://gravatar.com/avatar/${ playerSettings.emailHash[1] }?s=100&amp;d=mm" />
                    <rect width="120" height="120" rx="10" x="1" y="1"
                        style="stroke:${colors[1]};stroke-width:4;fill-opacity:0;stroke-opacity:1" />
                    `
                }} />
                <clipPath id="roundedclip">
                    <rect x="0" y="0" width="120" height="120" rx="10"/>
                </clipPath>
            </defs>
            <text x="15" y="30" className="GoGame-round">{ 'Round ' + round }</text>
            { _.map(players, PlayerView) }
            { FieldView(state) }
            <text x="50%" y="35" className={ 'GoGame-illegalMove' + illegalMoveClass }>
                { illegalMove }
            </text>
            <Overlay winner={ winner } />
        </svg>
    );
});

export default GameView;
