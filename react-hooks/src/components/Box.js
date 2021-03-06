import React from 'react'
import { Animated } from 'react-animated-css';

function Box({ word }) {
    const color = colors[Math.floor(Math.random() * 9)];
    const [visible, setVisible] = useState(true);

    function hideMe() {
        setFading(true)
        setTimeout(() => setVisible(false), 650)
    }

    let style = { borderColor: color, backgroundColor: color };

    return (
        <AnimatedVisibility visible={visible}>
            <div className="box" style={style}>
                <div className="center">{word}</div>
                <button className="button bottom-corner" onClick={hideMe}>
                    <i className="center far fa-eye fa-lg" />
                </button>
            </div>
        </AnimatedVisibility>
    );
}

export default Box