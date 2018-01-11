
import API_KEYS from '../constants.js';

const defaultString = "https://poly.googleapis.com/downloads/6dM1J6f6pm9/fA_mIl2jzUR/Mesh_Cat.obj";
function onResults( data ) {
				var asset = data.assets[0];
				if ( asset ) {
					return asset.formats[0].root.url;
				} else {
          console.log("no results");
				}
			}

const PolyServices = {

    getPolyAssetList: (_params) => {
            // https://poly.googleapis.com/v1/assets?key=API_KEYS.POlY_API_KEY
        return  fetch(`https://poly.googleapis.com/v1/assets?keywords=${_params}&format=OBJ&key=${API_KEYS.POLY_API_KEY}`,
           {mode: 'no-cors'})
            .then(response => response.json())
            .then(response => {
                return {obj: response.assets[0].formats[0].root.url, 
                        mtl: response.assets[0].formats[0].resources[0].url, 
                        text: response.assets[0].formats[0].resources[1].url,
                        metadata: {
                            modelName: response.assets[0].displayName,
                            authorName: response.assets[0].authorName
                        }};
            })
            .catch(error => {
                console.error(error);
            });
    },
    getPolyAsset: (_params) =>{
        fetch(`https://poly.googleapis.com/v1/?name=assets/${_params}&key=${API_KEYS.POLY_API_KEY}`)
            .then(response => console.log(response))
            .catch(error => {
                console.error(error);
            });
    }
}


export default PolyServices;