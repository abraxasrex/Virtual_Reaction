import React from 'react';
import {AppRegistry,asset,Pano,Text,View,VrButton,Model,AmbientLight} from 'react-vr';
import {StyleSheet} from 'react-native';
import mainUIComponentStyles from './styles/mainpage.js';
import PolyServices from './services/PolyServices.js';
import * as THREE from 'three';
//import { Grid, Row, Col } from './node_modules/react-flexbox-grid/dist';
// blah blah blah build
const searchId = '6dM1J6f6pm9';
const defaultObj = 'http://people.sc.fsu.edu/~jburkardt/data/obj/slot_machine.obj';


function incrementCount(state, props){
  return {count : state.count + 1}
}
// retrieve one model for now

class LoadedModel extends React.Component{
  constructor(props, context){
    super(props, context);
  }
  render (){
    if(this.props.objPath && this.props.objPath.length > 0){
      console.log("OBJ path!: ");
          return  <Model
            source={{
              obj: props.objPath,
              // obj: defaultObj,
              mtl: "https://poly.googleapis.com/downloads/6dM1J6f6pm9/fA_mIl2jzUR/Mesh_Cat.mtl"
            }} 
            texture="https://poly.googleapis.com/downloads/6dM1J6f6pm9/fA_mIl2jzUR/Tex_Cat.png"
            style={{   transform: [{translate: [0, 0, -15]}, {scale: 0.25}]}}
            lit={true}
          />
    } else {
      return <Model 
        source={{
          obj: "https://poly.googleapis.com/downloads/6dM1J6f6pm9/fA_mIl2jzUR/Mesh_Cat.obj",
          mtl:"https://poly.googleapis.com/downloads/6dM1J6f6pm9/fA_mIl2jzUR/Mesh_Cat.mtl"
        }} 
        texture="https://poly.googleapis.com/downloads/6dM1J6f6pm9/fA_mIl2jzUR/Tex_Cat.png"
        style={{   transform: [{translate: [0, 0, -15]}, {scale: 0.25}]}}
        lit={true}
      />
    }
  }
  
}


export default class VirtualReaction extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {count: 0, currentRotation: 0};
    this.currentObj = PolyServices.getPolyAssetList('cats') || defaultObj;
  }
  onViewClicked(){
    this.setState(incrementCount);
  }
  render() {
    return (
      <View>
        <Pano source={asset('lutry.jpg')}/>
       {/* <Grid fluid>
        <Row>
       <Col xs={6} md={3}> */}
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
        {/*<Model
          source={{
            obj: defaultObj
          }}
        />*/}
        {/*}  </Col>
        </Row>
      </Grid> */ }
      <AmbientLight intensity={ 2.6 }  />
        <LoadedModel
          objPath={this.currentObj}
        />
        
      </View>
    );
  }
};

AppRegistry.registerComponent('VirtualReaction', () => VirtualReaction);
