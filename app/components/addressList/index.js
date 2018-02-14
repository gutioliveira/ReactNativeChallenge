import React, { Component } from 'react';

import {
    FlatList, Text, TouchableWithoutFeedback, View
} from 'react-native';

import {styles} from './styles';
import PropTypes from 'prop-types';

export default class AddressList extends Component {

    constructor(props){
        super(props);
    }

    renderRow = (item) => {

        return(
            <TouchableWithoutFeedback
                onPress={ () => {
                this.props.onPress && this.props.onPress(item)
            }}>
                <View style={styles.item}>
                    <Text>
                        {item.formatted_address}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        return (
            <FlatList
                data={this.props.items ? this.props.items : []}
                renderItem={({item}) => this.renderRow(item)}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}

AddressList.propTypes = {

    onPress: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        imageUrl: PropTypes.string,
        price: PropTypes.number
    })).isRequired
}