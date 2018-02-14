import React, { Component } from 'react';

import {
    View, FlatList
} from 'react-native';

import styles from './styles';

import ProductItem from '../../components/productItem';
import GraphQL from "../../networking/GraphQL";

export default class ProductList extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoading: false,
            products: []
        };
    }

    componentDidMount(){
        this.setState({isLoading: true})
        GraphQL.query(GraphQL.POC_CATEGORY_SEARCH, GraphQL.POC_CATEGORY_SEARCH_ARGS(this.props.navigation.state.params.id)).then((res) =>{

            this.setState({isLoading: false})
            console.log('productList componentDidMount()')
            console.log(res)

            let products = []

            for ( var i = 0; i < res.poc.products.length; i++ )
                for ( var j = 0; j < res.poc.products[i].productVariants.length; j++ )
                    products.push(res.poc.products[i].productVariants[j])

            this.setState({products: products})

            console.log(products)
        }).catch((error) => {

            this.setState({isLoading: false})
            console.log(error)
        })
    }

    renderProducts = (product) => {
        return(
            <ProductItem product={{title: product.title, imageUrl: product.imageUrl,
                price: product.price
            }}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.products}
                    renderItem={({item}) => this.renderProducts(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}