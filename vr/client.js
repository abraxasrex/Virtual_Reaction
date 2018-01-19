// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance, Module} from 'react-vr-web';
import * as CustomModel from '../modules/CustomModel';
//import * as THREE from 'three';
import {Scene} from 'three';

var THREE = require('three');
var OBJLoader = require('three-obj-loader');
OBJLoader(THREE);



const testObjUrl = 'https://poly.googleapis.com/downloads/6dM1J6f6pm9/fA_mIl2jzUR/Mesh_Cat.obj';


function init(bundle, parent, options) {
  const scene = new Scene();
  const customModelLoader = new CustomModelLoader();

  const vr = new VRInstance(bundle, 'VirtualReaction', parent, {
    // Add custom options here
    nativeModules:[customModelLoader],
    scene: scene
  });
 // let x = false;
  customModelLoader.init(scene);
  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
   // console.log(vr);
  };

  //customModel.init(testObjUrl, scene);
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};

export default class CustomModelLoader extends Module {
  constructor(){
    super("CustomModelLoader");
  }
  init(scene){
   this.scene = scene;
  }
  getModel(model){
    this.model = model;
    //console.log("model and scene: ", model.obj, this.scene);
   // console.log("THREE + OBJLoader: ", THREE, OBJLoader);
    let loader = new THREE.OBJLoader();
    let scene = this.scene;
    let currentObj = this.currentObject;
    let ctx = this;
    loader.load(this.model.obj,
      ( _object )=> {
          let object = _object;
          object.position.set(0, 0, -2);
          object.scale.set(0.25, 0.25, 0.25, 0.25);
          console.log("object: ", object);
         // object.scale = 0.25;
          scene.remove(currentObj);
          scene.add( object );
          ctx.currentObject = object;
          //console.log("children!!!, ", scene.children);
      },
      ( xhr )=> {
          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      },
      ( error )=> {
          console.log( 'A loading error happened: ' + error);
      });
  }
}
