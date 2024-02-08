import React from "react";
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import styles from "./style";
import icons from "../../utility/icons";
import { ScreenHeader, KeyBoardScrollView } from "../../components";

const StripView = props => {
  const { handleColorChange, data, color, value, data2, handleColorChangeChlorine , chlorineValue} = props;
  return (
    <KeyBoardScrollView>
      <View style={styles.mainContainerStyle}>
        <Text style={styles.headerTextStyle}>Test Strip</Text>    
         <View>
          <View style ={{flexDirection:'row'}}>
          <Text style={styles.headlineText}>Total Hardness(ppm)</Text>
          <Text style ={{height: 40, width: '30%', borderColor: '#a9a9a9', borderWidth:0.5,textAlign:'center',textAlignVertical:'center'}}>{value}</Text>
          </View>
          <View style={{ flexDirection: 'row'}}>
          <View style={{ backgroundColor: color, height: 28, width: 30, marginLeft: 10, marginRight: 30 }} />
          <View>
            <FlatList
              data={data}
              extraData={props}
              onEndReachedThreshold={0.01}
              horizontal={true}
              keyExtractor={item => item.name}
              renderItem={({ item }) => (
                <View>
                <TouchableOpacity onPress={handleColorChange} style={{ height: 28, width: 80, backgroundColor: item.color, borderRadius: 5, marginLeft: 10 }} />
                <Text style = {{textAlign:'center'}}>{item?.value}</Text>
                </View>
              )}
            />
          </View>
        </View>
        </View>
        <View>
          <View style ={{flexDirection:'row'}}>
          <Text style={styles.headlineText}>Total Chlorine(ppm)</Text>
          <Text style ={{height: 40, width: '30%', borderColor: '#a9a9a9', borderWidth:0.5,textAlign:'center',textAlignVertical:'center'}}>{chlorineValue}</Text>
          </View>
          <View style={{ flexDirection: 'row'}}>
          <View style={{ backgroundColor: color, height: 28, width: 30, marginLeft: 10, marginRight: 30 }} />
          <View>
            <FlatList
              data={data2}
              extraData={props}
              onEndReachedThreshold={0.01}
              horizontal={true}
              keyExtractor={item => item.name}
              renderItem={({ item }) => (
                <View>
                <TouchableOpacity onPress={handleColorChangeChlorine} style={{ height: 28, width: 80, backgroundColor: item.color, borderRadius: 5, marginLeft: 10 }} />
                <Text style = {{textAlign:'center'}}>{item?.value}</Text>
                </View>
              )}
            />
          </View>
        </View>
        </View>
        <View>
          <View style ={{flexDirection:'row'}}>
          <Text style={styles.headlineText}>Free Chlorine(ppm)</Text>
          <Text style ={{height: 40, width: '30%', borderColor: '#a9a9a9', borderWidth:0.5,textAlign:'center',textAlignVertical:'center'}}>{value}</Text>
          </View>
          <View style={{ flexDirection: 'row'}}>
          <View style={{ backgroundColor: color, height: 28, width: 30, marginLeft: 10, marginRight: 30 }} />
          <View>
            <FlatList
              data={data}
              extraData={props}
              onEndReachedThreshold={0.01}
              horizontal={true}
              keyExtractor={item => item.name}
              renderItem={({ item }) => (
                <View>
                <TouchableOpacity style={{ height: 28, width: 80, backgroundColor: item.color, borderRadius: 5, marginLeft: 10 }} />
                <Text style = {{textAlign:'center'}}>{item?.value}</Text>
                </View>
              )}
            />
          </View>
        </View>
        </View>
        <View>
          <View style ={{flexDirection:'row'}}>
          <Text style={styles.headlineText}>pH</Text>
          <Text style ={{height: 40, width: '30%', borderColor: '#a9a9a9', borderWidth:0.5,textAlign:'center',textAlignVertical:'center'}}>{value}</Text>
          </View>
          <View style={{ flexDirection: 'row'}}>
          <View style={{ backgroundColor: color, height: 28, width: 30, marginLeft: 10, marginRight: 30 }} />
          <View>
            <FlatList
              data={data}
              extraData={props}
              onEndReachedThreshold={0.01}
              horizontal={true}
              keyExtractor={item => item.name}
              renderItem={({ item }) => (
                <View>
                <TouchableOpacity style={{ height: 28, width: 80, backgroundColor: item.color, borderRadius: 5, marginLeft: 10 }} />
                <Text style = {{textAlign:'center'}}>{item?.value}</Text>
                </View>
              )}
            />
          </View>
        </View>
        </View>
        <View>
          <View style ={{flexDirection:'row'}}>
          <Text style={styles.headlineText}>Total Alkalinity(ppm)</Text>
          <Text style ={{height: 40, width: '30%', borderColor: '#a9a9a9', borderWidth:0.5,textAlign:'center',textAlignVertical:'center'}}>{value}</Text>
          </View>
          <View style={{ flexDirection: 'row'}}>
          <View style={{ backgroundColor: color, height: 28, width: 30, marginLeft: 10, marginRight: 30 }} />
          <View>
            <FlatList
              data={data}
              extraData={props}
              onEndReachedThreshold={0.01}
              horizontal={true}
              keyExtractor={item => item.name}
              renderItem={({ item }) => (
                <View>
                <TouchableOpacity style={{ height: 28, width: 80, backgroundColor: item.color, borderRadius: 5, marginLeft: 10 }} />
                <Text style = {{textAlign:'center'}}>{item?.value}</Text>
                </View>
              )}
            />
          </View>
        </View>
        </View>
        <View>
          <View style ={{flexDirection:'row'}}>
          <Text style={styles.headlineText}>Cyanuric Acid(ppm)</Text>
          <Text style ={{height: 40, width: '30%', borderColor: '#a9a9a9', borderWidth:0.5,textAlign:'center',textAlignVertical:'center'}}>{value}</Text>
          </View>
          <View style={{ flexDirection: 'row'}}>
          <View style={{ backgroundColor: color, height: 28, width: 30, marginLeft: 10, marginRight: 30 }} />
          <View>
            <FlatList
              data={data}
              extraData={props}
              onEndReachedThreshold={0.01}
              horizontal={true}
              keyExtractor={item => item.name}
              renderItem={({ item }) => (
                <View>
                <TouchableOpacity style={{ height: 28, width: 80, backgroundColor: item.color, borderRadius: 5, marginLeft: 10 }} />
                <Text style = {{textAlign:'center'}}>{item?.value}</Text>
                </View>
              )}
            />
          </View>
        </View>
        </View>
      </View>
    </KeyBoardScrollView>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(StripView);