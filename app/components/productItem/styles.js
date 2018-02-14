import {StyleSheet} from "react-native";

import Dimensions from 'Dimensions';

const MARGIN = 10

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        width: Dimensions.get('window').width - 2 * MARGIN,
        height: 250,
        margin: MARGIN,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 150
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        margin: 10
    }
});
