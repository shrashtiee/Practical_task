import React from "react";
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from "./style";
import icons from "../../utility/icons";
import {ScreenHeader, KeyBoardScrollView} from "../../components";

const HomeView = props => {
  const {  } = props;
  return (
    <KeyBoardScrollView>
      <ScreenHeader/>
      <View style = {styles.mainContainerStyle}>
      <Text>Home Screen..</Text>
      </View>
    </KeyBoardScrollView>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HomeView);