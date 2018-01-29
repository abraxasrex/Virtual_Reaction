import React from 'react';
import {AppRegistry,asset,Pano,Text, VrButton, NativeModules, View, AmbientLight} from 'react-vr';
import mainUIComponentStyles from './styles/mainpage';
import PolyServices from './services/PolyServices';
import BackButton from './components/BackButton';
import ForwardButton from './components/ForwardButton';
import ScaleDownButton from './components/ScaleDownButton';
import ScaleUpButton from './components/ScaleUpButton';
import TextInput from './components/TextInput/textInput.js';


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
    let {gallery, galleryIndex, modelsLoaded} = this.state;
    let i = galleryIndex += 1;
    if(i > gallery.length - 1){
      i = 0;
    }
    this.setState({galleryIndex: i, scale: 0.25, currentModel: gallery[i], isLoaded: modelsLoaded});
    customModelLoader.getModel(gallery[i]);
  }

  cycleGalleryBackward = () => {
    let {gallery, galleryIndex, modelsLoaded} = this.state;
    let i = galleryIndex -= 1;
    if(i < 0){
      i = gallery.length - 1;
    }
    this.setState({galleryIndex: i, scale: 0.25, currentModel: gallery[i], isLoaded: modelsLoaded});
    customModelLoader.getModel(gallery[i]);
  }

  scaleModelUp = () => {
    let {scale} = this.state;
    if(scale < 5){
      this.setState({scale: scale + 0.1});
      customModelLoader.scaleModel(scale + 0.1);
    } else{
      this.setState({scale: 5});
    }
  }

  scaleModelDown = () => {
   let {scale} = this.state;
   if(scale > 0){
    this.setState({scale: scale - 0.1});
    customModelLoader.scaleModel(scale - 0.1);
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
    this.setGallery(string);
  }
  openLink(){
   NativeModules.LinkingManager.openURL('http://abraxasrex.github.io');
  }
  render() {
    return (
      <View>  
        <Pano source={asset('chess-world.jpg')}/>

          <ScaleUpButton onViewClicked={this.scaleModelUp}>
          </ScaleUpButton>
          <ScaleDownButton onViewClicked={this.scaleModelDown}>
          </ScaleDownButton>
          <ForwardButton  onViewClicked={this.cycleGalleryForward}>
          </ForwardButton>
          <BackButton  onViewClicked={this.cycleGalleryBackward}>
          </BackButton>
          
          <Text
            style={mainUIComponentStyles.modelInfoComponent}>
            <Text> {this.state.currentModel.metadata.modelName}</Text>
            <Text> by {this.state.currentModel.metadata.authorName} </Text>
          </Text>

          <Text style={mainUIComponentStyles.appTitle}> Google Poly Model Browser </Text>
          <Text style={mainUIComponentStyles.appSubtitle}> Look to the left to search for new models. </Text>

          <VrButton  onClick={this.openLink}>
            <Text style={mainUIComponentStyles.SecretButton}> Check out the rest of my projects. </Text>
          </VrButton>

          <View style={mainUIComponentStyles.searchBar}>
          <Text style={mainUIComponentStyles.searchText}> Search: </Text>
            <TextInput  onSubmit={this.submitHandler.bind(this)} rows={2} 
            cols={30} x={0.1} y={0} z={1} textColor={'white'} 
            backgroundColor={'grey'} keyboardColor={null} keyboardOnHover={null}/>
          </View>
     
        <AmbientLight intensity={ 1}  />
      </View>
    );
  }
};

AppRegistry.registerComponent('VirtualReaction', () => VirtualReaction);
