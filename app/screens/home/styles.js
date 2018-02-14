import {StyleSheet} from "react-native";

import Dimensions from 'Dimensions';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerHorizontal: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'white'
    },
    delayTextInput: {
        flex: 1
    },
    addressList: {
        backgroundColor: 'white',
        flex: 1,
    },
    footer: {
        backgroundColor: 'grey',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    }
});
