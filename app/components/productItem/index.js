import React, { Component } from 'react';

import {
    View, Text, Image, Button
} from 'react-native';


import styles from './styles';
import { formatBrazillianPrice } from '../../util/Currency';

import PropTypes from 'prop-types';

export default class ProductItem extends Component {

    constructor(props){
        super(props)
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <Text> {this.props.product.title} </Text>

                <Image style={styles.image} source={{uri: this.props.product.imageUrl}}/>

                <Text> {formatBrazillianPrice(this.props.product.price)} </Text>

                <View style={styles.buttonContainer}>

                    <View style={styles.button}>
                        <Button onPress={()=>{}} title={"Adicionar"}/>
                    </View>

                    <View style={styles.button}>
                        <Button onPress={()=>{}} title={"Remover"}/>
                    </View>
                </View>
            </View>
        );
    }
}

ProductItem.propTypes = {

    product: PropTypes.shape({
        title: PropTypes.string,
        imageUrl: PropTypes.string,
        price: PropTypes.number
    })
}

ProductItem.defaultProps = {
    product: {title: '', imageUrl: null, price: 0.0}
}