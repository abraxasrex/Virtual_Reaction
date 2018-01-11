import React from 'react';
import {Model} from 'react-vr';
import {StyleSheet} from 'react-native';

export default class LoadedModel extends React.Component{
    constructor(props, context){
      super(props, context);
      this.loaded = false;
      this.model;
      this.props.modelPathPromise("cats").then((result)=>{
        this.loaded = true;
        this.model = result;
        this.props.onModelLoaded(this.model.metadata)
      });
      
    }
    render (){  
      if(this.loaded){
        let _model = <Model
          source={{
            obj: this.model.obj,
            mtl: this.model.mtl
            // texture: this.model.text
          }}
          style={{ color: "pink", layoutOrigin: [0, 0], transform: [{translate: [25, 0, -100]}, {rotateY: this.props.rotation}, {scale: 1}]}}
          lit={true}
         />
        return _model;
      } else {
          console.log("no props, default image");
        return <Model 
          source={{
            obj: "https://poly.googleapis.com/downloads/6dM1J6f6pm9/fA_mIl2jzUR/Mesh_Cat.obj",
            mtl:"https://poly.googleapis.com/downloads/6dM1J6f6pm9/fA_mIl2jzUR/Mesh_Cat.mtl",
            texture:"https://poly.googleapis.com/downloads/6dM1J6f6pm9/fA_mIl2jzUR/Tex_Cat.png"
          }} 
          style={{layoutOrigin: [2, -15],   transform: [{rotateY: this.props.rotation / 2}, {translate: [2, 0, -15]}, {scale: 0.15}]}}
          lit={true}
        />
      }

    }
    
  }