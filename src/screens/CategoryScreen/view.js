import React from "react";
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView
} from 'react-native';
import styles from "./style";
import { ScreenHeader } from "../../components";

const CategoryView = props => {
  const { categoryData, productData, subCategoryData } = props;
  return (
    <ScrollView>
      <ScreenHeader />
      <View style={styles.mainContainerStyle}>
        <FlatList
          data={categoryData?.Result?.Category}
          extraData={props}
          onEndReachedThreshold={0.01}
          horizontal={true}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <View style={styles.flatlistView}>
              <Text style={styles.textStyle} >{item.Name}</Text>
            </View>
          )}
        />
        <View style={styles.subCategoryView}>
          <FlatList
            data={subCategoryData?.Result?.Category[0]?.SubCategories}
            extraData={props}
            onEndReachedThreshold={0.01}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <View>
                 <Text style={styles.subCategoryText}>{item?.Name}</Text>
                <FlatList
                  data={productData?.Result}
                  extraData={props}
                  onEndReachedThreshold={0.01}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.name}
                  renderItem={({ item }) => (
                    <View>
                      <View style={styles.imageViewStyle}>
                        <Image
                          source={{ uri: item?.ImageName }}
                          style={styles.imageStyle}
                        />
                      </View>
                      <Text style={styles.productNameStyle}>{item?.Name}</Text>
                    </View>
                  )}
                />
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(CategoryView);