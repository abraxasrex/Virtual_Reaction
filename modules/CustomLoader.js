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
      this.object_loader = new THREE.OBJLoader();
      this.material_loader = new THREE.MTLLoader();
      this.material_loader.setCrossOrigin('');
      this.rotation = 0;
      this.scaleModifier = 1;
    }
    init(scene){
     this.scene = scene;
    }
    scaleModel(newScale){
     let modifier = this.scaleModifier;
     console.log("MODIFIER: ", modifier);
      this.currentObject.scale.set(newScale / this.scaleModifier, newScale / this.scaleModifier,  newScale / this.scaleModifier);
      console.log("Scale made to module, it is now: ", this.currentObject.scale);
    }
    clearModel(){
        this.scene.remove(this.currentObject);
    }
    getModel(model){
        this.model = model;
        let path = model.mtl.split("/");
        let end = path.pop();
        path = path.join("/") + "/";
        this.material_loader.setTexturePath(path);
        this.material_loader.setPath(path);
        let object_loader = this.object_loader;
        this.material_loader.load(end, (materials)=> {
            materials.preload();
            this.loadObject(materials, path);
        }, (xhr)=>{}, (err)=>{
            console.log("Error loading materials: ", err);
        });
      }
      getScaleModifer(object){
        var bbox = new THREE.Box3().setFromObject(object);
        let xDist = bbox.max.x - bbox.min.x;
        let yDist = bbox.max.y - bbox.min.y;
        let zDist = bbox.max.z - bbox.min.z;
        let scaleModifier = 1;
        console.log("bbox dists: ", xDist, yDist, zDist);
        if(xDist > 12 || yDist > 12 || zDist > 12){
            scaleModifier = 12;
            console.log("original scale way too large");
        }
        else if(xDist > 8 || yDist > 8 || zDist > 8){
            scaleModifier = 8;
            console.log("original scale too large");
        } 
         else if(xDist < 3 || yDist < 3 || zDist < 3){
             scaleModifier = 0.3;
             console.log("original scale too small.");
         } else {
             scaleModifier = 1;
         }
         return scaleModifier;
      }
      loadObject(materials, path){
        this.object_loader.setMaterials(materials);
        this.object_loader.setPath(path);
        this.object_loader.load(this.model.obj.split("/").pop(), (object) => {
            object.position.set(0, -0.5, -3.5);
            let current = this.currentObject;
            if(!!current){
                this.scene.remove(current);
            }
            this.scaleModifier = this.getScaleModifer(object);
            this.scene.add(object);
            this.currentObject = object;
            this.scaleModel(0.25);

            this.animatorTime = setInterval(()=>{
                this.rotation += 0.01;
                 this.currentObject.rotation.set(0, this.rotation, 0);
               }, 200);

        }, (xhr)=>{}, (err)=>{
            console.log("Error loading object: ", err);
        });
      }
  }

  