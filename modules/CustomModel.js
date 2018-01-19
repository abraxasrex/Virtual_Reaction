
import {THREE} from 'three';
import {Module} from 'react-vr-web';
import * as ReactVR from 'react-vr-web';

export default class CustomModel extends Module{
  constructor(){
      super('CustomModel');
  }
  init(model, scene){
      this.model = model;
      let loader = new THREE.ObjectLoader();
      loader.load(model,
        function ( object ) {
            scene.add( object );
        },
        function ( xhr ) {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        function ( error ) {
            console.log( 'An error happened: ' + error);
        }
    );
    }
  changeModelSource(){
      console.log("blop.");
  }
}

class customModelView extends ReactVR.RCTBaseView {
    constructor(guiSys) {
      super();
      const light = new THREE.AmbientLight();
      this.view = new OVRUI.UIView(guiSys);
      this.view.add(light);
  
      Object.defineProperty(
        this.props,
        'intensity',
        {
          set: value => {
            light.intensity = value;
          },
        }
      );
  
      this.props.intensity = 1;
    }
  
    static describe() {
      return merge(super.describe(), {
        // declare the native props sent from react to runtime
        NativeProps: {
          intensity: 'number',
        },
      });
    }
  }