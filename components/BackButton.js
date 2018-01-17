import React from 'react';
import {Text, VrButton} from 'react-vr';
import {StyleSheet} from 'react-native';
import mainUIComponentStyles from '../styles/mainpage.js';

export default class BackButton extends React.Component {

render(){
    return <VrButton
    onClick={()=>this.props.onViewClicked()}>
    <Text
    style={mainUIComponentStyles.leftButton}>
        Last
    </Text>
    </VrButton>
}
}
