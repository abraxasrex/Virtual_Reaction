
import {StyleSheet} from 'react-native';


const mainUIComponentStyles = StyleSheet.create({
  modelInfoComponent: {
      backgroundColor: 'brown',
            fontSize: 0.1,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.1,
            paddingRight: 0.1,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [-0.05, 2.5, -1.5]}],
            justifyContent: 'flex-start',
            width: 1.5
  },
  standardButton: {
    fontSize: 0.4,
    fontWeight: '400',
    width: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 0.1,
    backgroundColor: '#99BE22'
  },
  rightButton: {
    layoutOrigin: [0.5, 0],
    transform: [{translate: [3, 1.5, -5]}],
  },
  leftButton: {
    layoutOrigin: [0.5, 1],
    transform: [{translate: [-3, 1.5, -5]}]
  },
  scaleButton: {
    backgroundColor: "#F3A31B",
    borderRadius: 0.5,
    fontSize: 0.3
  },
  SecretButton: {
    backgroundColor: '#777879',
    fontSize: 0.3,
    fontWeight: '400',
    layoutOrigin: [0.5, 0.5],
    textAlign: 'center',
    textAlignVertical: 'center',
    transform: [{translate: [0, 3, 3]}, {rotateY: 180}],
    width: 2,
    borderRadius: 0.1
  },
  searchText:{
  fontSize: 0.4,
   transform: [{translate: [0, 0.5, -1]}],
   backgroundColor: '#D53718',
   borderRadius: 0.1,
   textAlign: 'center'
  },
  searchBar:{
    transform: [{translate: [-5, 4, 0]}, {rotateY: 90}],
  },
  appTitle:{
    fontSize: 0.075, 
    width: 1, 
    textAlign: 'center', 
    backgroundColor: "#F3A31B", 
    transform:[{translate:[-1.5, 1.75, -1.75]}]
  },
  appSubtitle: {
    fontSize: 0.1, 
    width: 1, 
    textAlign: 'center', 
    backgroundColor: 'brown', 
    transform:[{translate:[-1.5, 1.75, -1.75]}]
  },
  mainButton: {
    marginTop: 1,
  },
});




export default mainUIComponentStyles;