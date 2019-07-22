import React from 'react'

function Box({ word }) {
    const color = colors[Math.floor(Math.random() * 9)];
    const [visible, setVisible] = useState(true);
    function hideMe() {
        setVisible(false);
    }
    let style = { borderColor: color, backgroundColor: color };
    if (!visible) style.display = "none";
    return (
        <div className="box" style={style}>
            {" "}
            <div className="center">{word}</div>{" "}
            <button className="button bottom-corner" onClick={hideMe}>
                {" "}
                <i className="center far fa-eye fa-lg" />{" "}
            </button>{" "}
        </div>
    );
}

export default Box