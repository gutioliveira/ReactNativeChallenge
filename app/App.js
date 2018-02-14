import React, { Component } from 'react';

import Home from './screens/home/';
import ProductList from './screens/productList/';

import {
    StackNavigator,
} from 'react-navigation';

const Stack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Home'
        }
    },
    ProductList: {
        screen: ProductList,
        navigationOptions: {
            headerTitle: 'Product List'
        }
    }
});

export default class App extends Component {

    render() {
        return (
            <Stack/>
        );
    }
}