import React from 'react';
import {AppRegistry,asset,Pano,Text,CylindricalPanel, View, VrButton, Model, AmbientLight} from 'react-vr';
import {StyleSheet} from 'react-native';
import mainUIComponentStyles from './styles/mainpage.js';
import PolyServices from './services/PolyServices.js';
import LoadedModel from './components/LoadedModel';
import BackButton from './components/BackButton';
import * as THREE from 'three';
//import { currentId } from 'async_hooks';

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
      modelsLoaded: false, 
      currentModel: {
        obj:'',
        mtl:'',
        metadata:{
          modelName:'Loading...',
          authorName:''
        }
      },
      galleryIndex: 0,
      gallery:[]
    };
    PolyServices.getPolyAssetList('cats').then((_gallery)=>{
      this.setState({gallery: _gallery, currentModel: _gallery[0], modelsLoaded: true});
    })
    this.animatorTime = setInterval(()=>{
     this.rotation += 2;
      let rotation = this.state.rotation;
      this.setState({rotation: rotation + 1});
    }, 200);

  }
  cycleGalleryForward = () => {
   // console.log(this.refs, "da refs");
    let i = this.state.galleryIndex += 1;
    if(i > this.state.gallery.length - 1){
      i = 0;
    }
    this.setState({galleryIndex: i, currentModel: this.state.gallery[i], isLoaded: this.state.modelsLoaded});
    this.modelRenderTime = setTimeout(()=>{
      this.setState({isLoaded: this.state.modelsLoaded});
    }, 200);
  }
  cycleGalleryBackward = () => {
    let i = this.state.galleryIndex -= 1;
    if(i < 0){
      i = this.state.gallery.length - 1;
    }
    this.setState({galleryIndex: i, currentModel: this.state.gallery[i], isLoaded: this.state.modelsLoaded});
    this.modelRenderTime = setTimeout(()=>{
      this.setState({isLoaded: this.state.modelsLoaded});
    }, 200);
  }
  // onViewClicked = () => {
  //   this.setState(incrementCount);
  //   this.cycleGalleryForward();
  // }
  updateModel = (_metadata) => {
    let model = this.state.currentModel;
    model.metadata.authorName = _metadata.authorName;
    model.metadata.modelName = _metadata.modelName;
    this.setState({modelsLoaded: true, currentModel: model});
  }
  render() {
    return (
      <View>
        <Pano source={asset('lutry.jpg')}/>

        <VrButton
        onClick={()=> this.cycleGalleryForward() }>
          <Text
            style={mainUIComponentStyles.rightButton}>
            Next -->
          </Text>
        </VrButton>
      
        <BackButton
          onViewClicked={this.cycleGalleryBackward}>
        </BackButton>

      <Text
        style={mainUIComponentStyles.mainComponent}>
        <Text> {this.state.currentModel.metadata.modelName} </Text>
        <Text> by {this.state.currentModel.metadata.authorName} </Text>
      </Text>

      <AmbientLight intensity={ 2.6 }  />
        <LoadedModel
          ref="testing"
          modelPathPromise={PolyServices.getPolyAssetList}
          rotation={this.state.rotation}
          onModelLoaded={this.updateModel}
          model ={this.state.currentModel}
          isLoaded={this.state.modelsLoaded}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('VirtualReaction', () => VirtualReaction);
