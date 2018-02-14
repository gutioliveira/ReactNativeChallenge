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
        backgroundColor: 'red'
    },
    delayTextInput: {
        flex: 1
    },
    addressList: {
        backgroundColor: 'white',
        height: 100,
        position: 'absolute', top: 50,
        left: 0
    }
});
