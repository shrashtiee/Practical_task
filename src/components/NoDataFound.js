import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import KeyBoardScrollView from './KeyBoardScrollView';
import Icons from '../utility/icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const NoDataFound = () => (
  <KeyBoardScrollView>
    <View style={Styles.mainViewStyle}>
      <Image source={Icons.NO_DATA_ICON} style={Styles.imageStyle} />
    </View>
  </KeyBoardScrollView>
);

export default NoDataFound;

const Styles = StyleSheet.create({
  mainViewStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    height: height * 0.5,
    width: width * 0.9,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
