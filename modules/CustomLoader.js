import {VRInstance, Module} from 'react-vr-web';
import {Scene, TextureLoader} from 'three';

const THREE = require('three');
const OBJLoader = require('three-obj-loader');
const MTLLoader = require('./MTLLoader.js');

OBJLoader(THREE);
MTLLoader(THREE);

export default class CustomModelLoader extends Module {
    constructor(){
      super("CustomModelLoader");
    }
    init(scene){
     THREE.TextureLoader.prototype.crossOrigin = '';
     this.scene = scene;
     this.object_loader = new THREE.OBJLoader();
     this.material_loader = new THREE.MTLLoader();
     this.material_loader.setCrossOrigin('');
     this.texture_loader = new TextureLoader();
     this.texture_loader.setCrossOrigin('');
    }
    getModel(model){
        this.model = model;
        this.loadAll(model);
    }
    loadAll(model){
        let path = model.mtl.split("/");
        let end = path.pop();
        path = path.join("/") + "/";
        this.material_loader.setTexturePath(path);
        this.material_loader.setPath(path);
        let object_loader = this.object_loader;
        this.material_loader.load(end, (materials)=> {
            materials.preload();
            this.object_loader.setMaterials(materials);
            this.object_loader.setPath(path);
            this.object_loader.load(model.obj.split("/").pop(), (object) => {
                object.position.set(0, 0, -2);
                object.scale.set(0.25, 0.25, 0.25, 0.25);
                let current = this.currentObject;
                if(!!current){
                    this.scene.remove(current);
                }
                this.scene.add(object);
                this.currentObject = object;
            });
        
        });
      }
    _getModel(model){
      this.model = model;
      let currentObj = this.currentObject;

      this.object_loader.load(this.model.obj,
        ( _object )=> {
            
            let object = _object;
            object.position.set(0, 0, -2);
            object.scale.set(0.25, 0.25, 0.25, 0.25);
           this.getMaterial(object, currentObj);
        },
        ( xhr )=>{},( error )=> {
            console.log( 'An object loading error happened: ' + error);
        });
    }
    getMaterial(new_object, old_object){
        let path = this.model.mtl.split("/");
        let end = path.pop();
        path = path.join("/") + "/";
        this.material_loader.setTexturePath(path);
        this.material_loader.setPath(path);

      this.material_loader.load(end, 
      (_material)=>{
        // if(!!this.model.text){
        //     let text_end = this.model.text.split('/').pop();
        //     this.texture_loader.setPath(path);
        //     this.texture_loader.load(text_end, (texture)=>{
        //         _material.map = texture;
        //         _material.needsUpdate = true;
        //         new_object.material = _material;
        //         this.scene.remove(old_object);
        //         this.scene.add(new_object);
        //         this.currentObject = new_object;
        //     });
        // } else{
            new_object.material = _material;
            this.scene.remove(old_object);
            this.scene.add(new_object);
            this.currentObject = new_object;
       // }
      },
      (xhr)=> {}, (error)=>{
        console.log( 'A material loading error happened: ' + error);
     })
    }
  }

  