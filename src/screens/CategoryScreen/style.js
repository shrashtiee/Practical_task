import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../utility/colorConstant';
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainerStyle:{
        width: deviceWidth,
    },
    flatlistView:{
        paddingHorizontal: 10,
        backgroundColor: Colors.BLACK_COLOR,
    },
    textStyle:{
        fontSize: 16,
        color: Colors.WHITE_COLOR,
        paddingBottom:10,
        paddingHorizontal:5,
    },
    subCategoryText:{
        fontSize: 16,
        color: Colors.BLACK_COLOR,
        marginLeft: 10,
        marginTop:10,
        paddingBottom:8,
    },
    imageViewStyle:{
        width: 170,
        height:120,
        paddingHorizontal:10,
    },
    imageStyle:{
        width: '100%',
        height:'100%',
        borderRadius:5,
    },
    productNameStyle:{
        fontSize: 10,
        color: Colors.BLACK_COLOR,
        marginLeft: 12,
        paddingVertical:8
    },
    subCategoryView:{
        marginTop:10,
    }
});

export default styles;