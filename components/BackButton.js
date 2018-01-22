import React from 'react';
import {Text, VrButton} from 'react-vr';
import mainUIComponentStyles from '../styles/mainpage.js';
import {FaArrow} from 'react-icons/fa/arrow-circle-left';

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
