import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../utility/colorConstant';
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainerStyle:{
        width: deviceWidth * 0.95,
        alignItems:'center',
        paddingVertical: 10,
        
    }
});

export default styles;