import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Colors from '../utility/colorConstant';
import { VectorIcon } from './index';

const ScreenHeader = () => {
  return (
    <View style={Styles.headerViewStyle}>
      <View>
        <Text style = {Styles.textStyle}>Home Screen</Text>
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
    justifyContent:'center'
  },
  textStyle: {
    color: Colors.BLACK_COLOR,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center'
  },
});

const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenHeader);

