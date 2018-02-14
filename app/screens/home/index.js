import React, { Component } from 'react';

import {
    View, Image, TouchableWithoutFeedback, Alert, Text
} from 'react-native';

import DelayTextInput from '../../components/delayTextInput/';
import AddressList from '../../components/addressList/';

import Networking from '../../networking/Networking';
import GraphQL from '../../networking/GraphQL';

import styles from './styles';
import SEARCH_ICON from '../../resources/ic_search.png';

import API_KEY from '../../../apiKey'; // DON'T FORGET TO GET YOUR OWN KEY

import Spinner from 'react-native-loading-spinner-overlay';

export default class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            address: '',
            addressList: [],
            isLoading: false,
        };
    }

    searchAddress = (address, action) => {

        console.log('searchAddress()')

        let body = {
            address: address,
            key: API_KEY
        }

        Networking.fetch(Networking.GOOGLE_MAPS, Networking.GET, body).then((res) => {

            console.log('LENGHT:')
            console.log(res.results.length)

            var listItems = res.results.map((item) => {
                return {
                    formatted_address: item.formatted_address,
                    location: item.geometry.location
                }
            })

            this.setState({addressList: listItems}, ()=>{action && action(listItems[0])})
        }).catch((error) => {
            this.setState({addressList: []})
            console.log(error)
        })
    }

    goToProductList = (item) => {
        this.setState({addressList: []})
        this.query(item.location.lat, item.location.lng)
    }

    query = (lat, long) => {

        this.setState({isLoading: true});

        GraphQL.query(GraphQL.POC_SEARCH_METHOD, GraphQL.POC_SEARCH_METHOD_ARGS(lat, long)).then( (res) => {

            console.log(res)
            if ( res.pocSearch && res.pocSearch.length > 0 )
                this.setState({isLoading: false}, () => {
                    this.props.navigation.navigate('ProductList', {id: res.pocSearch[0].id})
                })
            else
                Alert.alert('Erro!', 'Não existe nada no endereço informado!',[
                    {text: 'OK', onPress: () => this.setState({isLoading: false})},
                ])
        }).catch((error) => {

            console.log('ERROR')
            console.log(error)
            this.setState({isLoading: false})
        });
    }

    render() {
        return (
            <View style={styles.container}>

                <Spinner visible={this.state.isLoading} textContent={"Loading..."} textStyle={{color: '#FFF'}} />

                <View style={styles.containerHorizontal}>
                    <DelayTextInput
                        style={styles.delayTextInput}
                        placeholder={"buscar"}
                        onChangeText = {(text) => {
                            this.state.address = text
                        }}
                        onPauseText={(text) => {
                            console.log('onPauseText()')
                            this.searchAddress(text)
                        }}
                    />
                    <TouchableWithoutFeedback onPress={() => {
                        this.searchAddress(this.state.address, this.goToProductList)
                    }}>
                        <Image style={{height: 50, width: 50}} source={SEARCH_ICON}/>
                    </TouchableWithoutFeedback>
                </View>

                <View style={styles.addressList}>
                    <AddressList
                        onPress={(item) => {this.goToProductList(item)}}
                        items={this.state.addressList}/>
                </View>

                <View style={styles.footer}>
                    <Text>
                        {"Created by gustavo.cavalcante.oliveira@live.com"}
                    </Text>
                </View>
            </View>
        );
    }
}