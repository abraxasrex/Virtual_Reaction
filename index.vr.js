import React from 'react';
import {AppRegistry,asset,Pano,Text, VrButton, NativeModules, View, AmbientLight} from 'react-vr';
import mainUIComponentStyles from './styles/mainpage';
import PolyServices from './services/PolyServices';
import BackButton from './components/BackButton';
import ForwardButton from './components/ForwardButton';
import ScaleDownButton from './components/ScaleDownButton';
import ScaleUpButton from './components/ScaleUpButton';
import TextInput from './components/TextInput/textInput.js';

import Icon from './node_modules/react-icons-kit';

import { home } from './node_modules/react-icons-kit/icomoon';

const customModelLoader = NativeModules.CustomModelLoader;


export default class VirtualReaction extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      count: 0, 
      rotation: 130, 
      modelsLoaded: false, 
      scale: 0.25,
      currentModel: {
        obj:'',
        mtl:'',
        text: null,
        metadata:{
          modelName:'Loading...',
          authorName:''
        }
      },
      galleryIndex: 0,
      gallery:[]
    };
   this.setGallery("cats");
  }
  setGallery(string){
    PolyServices.getPolyAssetList(string).then((_gallery)=>{
      this.setState({gallery: _gallery, galleryIndex: 0, scale: 0.25, currentModel: _gallery[0], modelsLoaded: true});
      customModelLoader.getModel(_gallery[0]);
    });
  }
  cycleGalleryForward = () => {
    let i = this.state.galleryIndex += 1;
    if(i > this.state.gallery.length - 1){
      i = 0;
    }
    this.setState({galleryIndex: i, scale: 0.25, currentModel: this.state.gallery[i], isLoaded: this.state.modelsLoaded});
    customModelLoader.getModel(this.state.gallery[i]);
  }
  cycleGalleryBackward = () => {
    let i = this.state.galleryIndex -= 1;
    if(i < 0){
      i = this.state.gallery.length - 1;
    }
    this.setState({galleryIndex: i, scale: 0.25, currentModel: this.state.gallery[i], isLoaded: this.state.modelsLoaded});
    customModelLoader.getModel(this.state.gallery[i]);
  }
  scaleModelUp = () => {
    if(this.state.scale < 5){
      this.setState({scale: this.state.scale + 0.1});
      customModelLoader.scaleModel(this.state.scale + 0.1);
    } else{
      this.setState({scale: 5});
    }
  }
  scaleModelDown = () => {
   if(this.state.scale > 0){
    this.setState({scale: this.state.scale - 0.1});
    customModelLoader.scaleModel(this.state.scale - 0.1);
   }else{
     this.setState({scale: 0});
   }
  }
  updateModel = (_metadata) => {
    let model = this.state.currentModel;
    model.metadata.authorName = _metadata.authorName;
    model.metadata.modelName = _metadata.modelName;
    this.setState({modelsLoaded: true, currentModel: model});
  }
  submitHandler(string) {
    console.log('the text received by the submitHandler is ' + string);
    this.setGallery(string);
  }
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text style={mainUIComponentStyles.searchText}> Search: </Text>
        <View  style={mainUIComponentStyles.searchBar}>
          <TextInput onSubmit={this.submitHandler.bind(this)} rows={2} 
          cols={30} x={0} y={0} z={0} textColor={'white'} 
          backgroundColor={'grey'} keyboardColor={null} keyboardOnHover={null}/>
        </View>
        <View>
          <ScaleUpButton onViewClicked={this.scaleModelUp}>
          </ScaleUpButton>
          <ScaleDownButton style={{color:"#F3A31B"}} onViewClicked={this.scaleModelDown}>
          </ScaleDownButton>
          <ForwardButton style={{color:"#F2981D"}}  onViewClicked={this.cycleGalleryForward}>
          </ForwardButton>
          <BackButton style={{color:"#D53718"}}  onViewClicked={this.cycleGalleryBackward}>
          </BackButton>
        </View>
        <Text
          style={mainUIComponentStyles.mainComponent}>
          <Text style={{color:"#1FB2C1"}}> {this.state.currentModel.metadata.modelName}</Text>
          <Text> by {this.state.currentModel.metadata.authorName} </Text>
        </Text>
        <AmbientLight intensity={ 1}  />
      </View>
    );
  }
};

AppRegistry.registerComponent('VirtualReaction', () => VirtualReaction);
