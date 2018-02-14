import React, { Component } from 'react';
import {
    TextInput,
} from 'react-native';

import PropTypes from 'prop-types';

export default class DelayTextInput extends Component {

    constructor() {
        super()
        this.state = {
            timeout: null
        }
    }

    render() {

        let {onPauseText, pauseDelay, onChangeText} = this.props
        let {timeout} = this.state

        return (
            <TextInput
                {...this.props}
                onChangeText={(text) => {

                    if (onPauseText) {

                        if (timeout)
                            window.clearTimeout(timeout)

                        timeout = window.setTimeout(() => onPauseText(text), pauseDelay)

                        this.setState({timeout})
                    }

                    if (onChangeText)
                        onChangeText(text)
                }}
            />
        )
    }

}

DelayTextInput.propTypes = {
    onPauseText: PropTypes.func,
    pauseDelay: PropTypes.number
}

DelayTextInput.defaultProps = {
    pauseDelay: 500
}