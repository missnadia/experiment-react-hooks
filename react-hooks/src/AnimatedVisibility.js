import React, { Component } from 'react'
import { Animated } from 'react-animated-css';

class AnimatedVisibility extends Component {
    constructor(props) {
        super(props)
        this.state = { noDisplay: false, visible: this.props.visible }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (!nextProps.visible) {
            this.setState({ visible: false })
            setTimeout(() => this.setState({ noDisplay: true }), 650)
        }
    }

    render() {
        return (
            <Animated
                animationIn="zoomIn"
                animationOut="zoomOut"
                isVisible={this.state.visible}
                style={this.state.noDisplay ? { display: "none" } : null}
            >
                {this.props.children}
            </Animated>
        )
    }
}

export default Animated Visibility