import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StripView from "./view";

const StripScreen = (props) => {
    const { navigation } = props;
    const [color, setColor] = useState('#fff');
    const [value, setValue] = useState(0);
    const [chlorineValue, setChlorineValue] = useState(0);
    const data = [
        { id: 0, color: '#00FFFF' , value: 0},
        { id: 1, color: '#89CFF0' , value: 10},
        { id: 2, color: '#0000FF' , value: 100},
    ]
    const data2 = [
        { id: 0, color: '#ffff00' , value: 250},
        { id: 1, color: '#fff8dc' , value: 10},
        { id: 2, color: '#eee600' , value: 300},
    ]

    const handleBackButton = () => {
        navigation.goBack();
    }

    const handleColorChange = () => {
        if (color !== data[0]?.color) {
            setColor(data[0]?.color)
            setValue(data[0]?.value)
        }
        else if (color !== data[1]?.color) {
            setColor(data[1]?.color)
            setValue(data[1]?.value)
        }
        else if (color !== data[2]?.color) {
            setColor(data[2]?.color)
            setValue(data[2]?.value)
        }
        else {

        }

    }

    const handleColorChangeChlorine = () => {
        if (color !== data2[0]?.color) {
            setColor(data2[0]?.color)
            setChlorineValue(data2[0]?.value)
        }
        else if (color !== data2[1]?.color) {
            setColor(data2[1]?.color)
            setChlorineValue(data2[1]?.value)
        }
        else if (color !== data[2]?.color) {
            setColor(data2[2]?.color)
            setChlorineValue(data2[2]?.value)
        }
        else {

        }

    }

    return (
        <StripView
            handleBackButton={handleBackButton}
            handleColorChange={handleColorChange}
            handleColorChangeChlorine={handleColorChangeChlorine}
            data={data}
            color={color}
            value={value}
            data2={data2}
            chlorineValue={chlorineValue}
        />
    );
}
StripScreen.navigationOptions = () => ({
});

StripScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    // Access state from Store.
});

export default connect(mapStateToProps)(StripScreen);
