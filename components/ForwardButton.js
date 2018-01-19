import React from 'react';
import {Text, VrButton} from 'react-vr';
import mainUIComponentStyles from '../styles/mainpage.js';

export default class ForwardButton extends React.Component {

    render(){
        return <VrButton
        onClick={()=>this.props.onViewClicked()}>
        <Text
        style={mainUIComponentStyles.rightButton}>
            Next
        </Text>
        </VrButton>
    }
    }