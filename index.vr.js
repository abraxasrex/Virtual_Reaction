import React from 'react';
import {AppRegistry,asset,Pano,Text,CylindricalPanel, View, VrButton, Model,AmbientLight} from 'react-vr';
import {StyleSheet} from 'react-native';
import mainUIComponentStyles from './styles/mainpage.js';
import PolyServices from './services/PolyServices.js';
import LoadedModel from './components/LoadedModel';
import * as THREE from 'three';

const searchId = '6dM1J6f6pm9';
const defaultObj = 'http://people.sc.fsu.edu/~jburkardt/data/obj/slot_machine.obj';

function incrementCount(state, props){
  return {count : state.count + 1}
}

export default class VirtualReaction extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      count: 0, 
      rotation: 130, 
      modelLoaded: false, 
      modelMetadata: { modelName: 'Loading...', authorName: ''}
    };
    this.animatorTime = setInterval(()=>{
     this.rotation += 2;
      let rotation = this.state.rotation;
      this.setState({rotation: rotation + 1});
    }, 200);
  }
  onViewClicked(){
    this.setState(incrementCount);
  }
  updateModel = (_metadata) => {
    let modelMetadata = this.state.modelMetadata;
    modelMetadata.authorName = _metadata.authorName;
    modelMetadata.modelName = _metadata.modelName;
    this.setState({modelLoaded: true, modelMetadata: modelMetadata});
  }
  render() {
    return (
      <View>
        <Pano source={asset('lutry.jpg')}/>
        <Text
          style={mainUIComponentStyles.mainComponent}>
          <Text> {this.state.modelMetadata.modelName} </Text>
          <Text> by {this.state.modelMetadata.authorName} </Text>
        </Text>
        <Text
          style={mainUIComponentStyles.mainComponent}>
          count: {this.state.count}
        </Text>
       {/*} <TextInput onSubmit={this.submitHandler.bind(this)} rows={2} 
      cols={20} x={-1} y={0.2} z={-1.5} textColor={'white'} backgroundColor={'grey'} keyboardColor={null} keyboardOnHover={null}/>*/}
              <VrButton
              style={mainUIComponentStyles.mainButton }
              onClick={()=>this.onViewClicked()}>
                <Text
                  style={mainUIComponentStyles.mainComponent}>
                  this is a button. click me.
                </Text>
            </VrButton>
      <AmbientLight intensity={ 2.6 }  />
        <LoadedModel
          modelPathPromise={PolyServices.getPolyAssetList}
          rotation={this.state.rotation}
          onModelLoaded={this.updateModel}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('VirtualReaction', () => VirtualReaction);
