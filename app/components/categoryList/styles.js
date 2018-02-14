import {StyleSheet} from "react-native";

import Dimensions from 'Dimensions';

export default styles = StyleSheet.create({
    radioButton: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        marginTop: 2,
        marginLeft: 10,
        marginBottom: 2,
        marginRight: 10,
    },
    text: {
        marginLeft: 10
    }
});
