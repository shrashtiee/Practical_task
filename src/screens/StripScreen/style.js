import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../utility/colorConstant';
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainerStyle:{
        width: deviceWidth,
        paddingVertical: 10,   
    },
    headerTextStyle:{
        fontSize:25,
        color: '#000C66',
        fontWeight:'bold',
        marginLeft: 10,
    },
    numberStyle:{
        fontSize:16,
        color: Colors.BLACK_COLOR,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        backgroundColor:'#787878',
        textAlign:'left'
    },
    headlineText:{
        fontSize:18,
        color: '#787878',
        padding:8,
        marginBottom:10,
        width: '60%',
        alignItems:'center'
    }
});

export default styles;