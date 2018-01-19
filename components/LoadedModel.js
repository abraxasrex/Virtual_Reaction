import React from 'react';
import {Model, Text} from 'react-vr';
import {StyleSheet} from 'react-native';
import mainUIComponentStyles from '../styles/mainpage.js';


export default class LoadedModel extends React.Component{
    constructor(props, context){
      super(props, context);
         // modelformat:
         // {obj: response.assets[0].formats[0].root.url, 
      //   mtl: response.assets[0].formats[0].resources[0].url, 
      //   metadata: {
      //       modelName: response.assets[0].displayName,
      //       authorName: response.assets[0].authorName
      //   }};
    //  console.log(props);
    }
    render (){  
     if(this.props.isLoaded){
       console.log(this);
        return <Model
        source={{
          obj: this.props.model.obj,
          mtl: this.props.model.mtl
        }}
        onClick={()=> this.loadingMessage}
        style={{ color: "pink", layoutOrigin: [0, 0], transform: [{translate: [25, 0, -150]}, {rotateY: this.props.rotation}, {scale: 1}]}}
        />
     } else {
          console.log("no props, default image");
        // return <Model 
        //   source={{
        //     obj: "https://poly.googleapis.com/downloads/6dM1J6f6pm9/fA_mIl2jzUR/Mesh_Cat.obj",
        //     mtl:"https://poly.googleapis.com/downloads/6dM1J6f6pm9/fA_mIl2jzUR/Mesh_Cat.mtl",
        //     texture:"https://poly.googleapis.com/downloads/6dM1J6f6pm9/fA_mIl2jzUR/Tex_Cat.png"
        //   }} 
        //   style={{layoutOrigin: [2, -15],   transform: [{rotateY: this.props.rotation / 2}, {translate: [2, 0, -15]}, {scale: 0.15}]}}
        //   lit={true}
        // />
        return <Text> Loading... </Text>
     }


        // let _model = <Model
        //   source={{
        //     obj: this.model.obj,
        //     mtl: this.model.mtl
        //     // texture: this.model.text
        //   }}
        //   style={{ color: "pink", layoutOrigin: [0, 0], transform: [{translate: [25, 0, -100]}, {rotateY: this.props.rotation}, {scale: 1}]}}
        //   lit={true}
        //  />
        // return _model;
   


    }
    
  }