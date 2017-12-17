
import API_KEYS from '../constants.js';

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
                console.log("Response: ", response);
                return onResults(response);
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