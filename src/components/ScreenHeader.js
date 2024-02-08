import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import Colors from '../utility/colorConstant';
import { VectorIcon } from './index';

const ScreenHeader = () => {
  return (
    <View style={Styles.headerViewStyle}>
      <View style = {Styles.viewStyle}>
        </View>
        <View style ={Styles.width30}>
        <VectorIcon iconName='filter' iconSize={20} color={Colors.WHITE_COLOR} iconType={'FontAweSome5'} style ={{paddingHorizontal:10}}/>
        <VectorIcon iconName='search' iconSize={25} color={Colors.WHITE_COLOR} />

        </View>
     
    </View>
  );
};

const Styles = StyleSheet.create({
  headerViewStyle: {
    elevation: 5,
    height: 70,
    alignItems: 'center',
    backgroundColor: Colors.WHITE_COLOR,
    paddingHorizontal: 5,
    justifyContent:'center',
    backgroundColor: Colors.BLACK_COLOR,
    flexDirection:'row'
  },
  viewStyle:{
    width: '70%',
    alignItems:'center',
  },
  width30:{
    width: '30%',
    flexDirection:'row',
    justifyContent:'flex-end',
    paddingHorizontal:30,
  },
  textStyle: {
        color: Colors.WHITE_COLOR,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center'
  },
});

const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenHeader);

