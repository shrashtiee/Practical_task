import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryView from "./view";

const CategoryScreen = (props) => {
    const { navigation } = props;
    const [categoryData, setCategoryData] = useState([]);
    const [subCategoryData, setSubCategoryData] = useState([]);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        handleCatgeoryData();
        handleSubCategoryData();
        handleProductData();
    },[])

    const handleCatgeoryData = () => {
        fetch("http://esptiles.imperoserver.in/api/API/Product/DashBoard", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              CategoryId:0,
              DeviceManufacturer:"Google",
              DeviceModel:"Android SDK built for x86",
              DeviceToken:" ",
              PageIndex:1
              }),
          })
            .then((response) => response.json(
            ))
            .then((responseData) => {
                setCategoryData(responseData);
            })
            .done();
    }

    const handleSubCategoryData = () => {
        fetch("http://esptiles.imperoserver.in/api/API/Product/DashBoard", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    CategoryId:56,
                    PageIndex:2
              }),
          })
            .then((response) => response.json(
            ))
            .then((responseData) => {
                setSubCategoryData(responseData);
                // console.log('RESPONSE==========>>>', JSON.stringify(responseData));
            })
            .done();
    }

    const handleProductData = () => {
        fetch("http://esptiles.imperoserver.in/api/API/Product/ProductList", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    PageIndex:2,
                    SubCategoryId:71
              }),
          })
            .then((response) => response.json(
            ))
            .then((responseData) => {
                setProductData(responseData);
            })
            .done();
    }

    const handleBackButton = () => {
        navigation.goBack();
    }

    return (
        <CategoryView
            handleBackButton={handleBackButton}
            categoryData={categoryData}
            subCategoryData={subCategoryData}
            productData={productData}
        
        />
    );
}
CategoryScreen.navigationOptions = () => ({
});

CategoryScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    // Access state from Store.
});

export default connect(mapStateToProps)(CategoryScreen);
