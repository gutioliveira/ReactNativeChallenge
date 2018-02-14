import React, { Component } from 'react';

import RadioButton from 'radio-button-react-native';

import {
    View, FlatList, Text, TouchableWithoutFeedback
} from 'react-native';

import styles from './styles';

export default class CategoryList extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: -1
        }
    }

    handleOnPress = (value) => {
        this.state.value = value.toString();
        this.setState(this.state)
        console.log("setState: "+this.state.value);
    }

    renderRadioButtons = (category) => {
        return(
            <TouchableWithoutFeedback
                key={category.id}
                onPress={() => {
                    this.handleOnPress(category.id)
                    this.props.onPress(category.id)
            }}>
                <View style={styles.radioButton}>
                    <RadioButton currentValue={this.state.value}
                                 value={category.id} onPress={() => {
                                    this.handleOnPress(category.id)
                                    this.props.onPress(category.id)
                    }}>
                        <Text style={styles.text}>{category.title}</Text>
                    </RadioButton>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        return (
            <View>
                {
                    this.props.category.map((item) => {
                        return (this.renderRadioButtons(item))
                    })
                }
            </View>
        );
    }
}