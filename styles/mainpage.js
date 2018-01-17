
import {StyleSheet} from 'react-native';


const mainUIComponentStyles = StyleSheet.create({
  mainComponent: {
      backgroundColor: '#777879',
            fontSize: 0.4,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [-2, 0, -3]}],
            justifyContent: 'flex-start',
            width: 2
  },
  rightButton: {
    backgroundColor: '#777879',
    fontSize: 0.4,
    fontWeight: '400',
    layoutOrigin: [0.5, 0.5],
    textAlign: 'center',
    textAlignVertical: 'center',
    transform: [{translate: [2.5, 1, -3]}],
    width: 2
  },
  leftButton: {
    backgroundColor: '#777879',
    fontSize: 0.4,
    fontWeight: '400',
    layoutOrigin: [0.5, 0.5],    
    textAlign: 'center',
    textAlignVertical: 'center',
    transform: [{translate: [-2.5, 1.5, -3]}],
    width: 2
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