import React from 'react';
import {AppRegistry,asset,Pano,Text,View,VrButton,Model} from 'react-vr';
import {StyleSheet} from 'react-native';
import mainUIComponentStyles from './styles/mainpage.js';
import PolyServices from './services/PolyServices.js';
import * as THREE from 'three';

const searchId = '6dM1J6f6pm9';
const defaultObj = 'http://people.sc.fsu.edu/~jburkardt/data/obj/slot_machine.obj';


function incrementCount(state, props){
  return {count : state.count + 1}
}
// retrieve one model for now

function LoadedModel(props){
  if(props.objPath){
        return  <Model
          source={{
            obj: asset(defaultObj)
          }}
        />
  }
}


export default class VirtualReaction extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {count: 0};
    this.currentObj = defaultObj;
  //  this.currentObj = PolyServices.getPolyAssetList('cats');
  }
  onViewClicked(){
    this.setState(incrementCount);
  }
  render() {
    return (
      <View>
        <Pano source={asset('lutry.jpg')}/>
        <Text
          style={mainUIComponentStyles.mainComponent}>
          count: {this.state.count}
        </Text>
      <VrButton
        style={mainUIComponentStyles.mainButton }
        onClick={()=>this.onViewClicked()}>
            <Text
            style={mainUIComponentStyles.mainComponent}>
          this is a button. click me.
        </Text>
      </VrButton>
     {/*<LoadedModel
          objPath={this.currentObj}
        /> */}
        <Model
          source={{
            obj: defaultObj
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('VirtualReaction', () => VirtualReaction);
