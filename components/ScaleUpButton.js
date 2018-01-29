import React from 'react';
import {Text, VrButton} from 'react-vr';
import mainUIComponentStyles from '../styles/mainpage.js';
import {FaArrow} from 'react-icons/fa/arrow-circle-up';
import { StyleSheet } from 'react-native';


export default class ScaleUpButton extends React.Component {
    render(){
        return <VrButton
        onClick={()=>this.props.onViewClicked()}>   
        <Text
        style={[mainUIComponentStyles.standardButton, mainUIComponentStyles.rightButton, mainUIComponentStyles.scaleButton]}>
         <Text style={{color:"#1FB2C1"}} > Scale Up </Text>
        </Text>
        </VrButton>
    }
    }