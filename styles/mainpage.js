
import {StyleSheet} from 'react-native';


const mainUIComponentStyles = StyleSheet.create({
  mainComponent: {
      backgroundColor: 'brown',
            fontSize: 0.1,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.1,
            paddingRight: 0.1,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [-0.05, 2, -1.5]}],
            justifyContent: 'flex-start',
            width: 1.5
  },
  rightButton: {
    backgroundColor: '#777879',
    fontSize: 0.3,
    fontWeight: '400',
    layoutOrigin: [0.5, 0.5],
    textAlign: 'center',
    textAlignVertical: 'center',
    transform: [{translate: [2.5, 1.5, -3]}],
    width: 2,
    borderRadius: 0.1
  },
  leftButton: {
    backgroundColor: '#777879',
    fontSize: 0.3,
    fontWeight: '400',
    layoutOrigin: [0.5, 0.5],    
    textAlign: 'center',
    textAlignVertical: 'center',
    transform: [{translate: [-2.5, 1.9, -3]}],
    width: 2,
    borderRadius: 0.1
  },
  searchText:{
    fontSize: 0.3,
   transform: [{translate: [-2.7, 1.7, -3]}],
  },
  searchBar:{
    transform: [{translate: [-0.2, 1.55, -1]}],
  },
  modelComponent: {
    color: "pink", 
    layoutOrigin: [0, 0], 
    transform: [
      {translate: [25, 0, -100]}, 
      {rotateY: 0}, 
      {scale: 1}
    ]
  },
  mainButton: {
    marginTop: 1,
  },
});




export default mainUIComponentStyles;   