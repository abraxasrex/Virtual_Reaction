
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
  modelComponent: {
    transform: [{translate: [0, 0, -10]}],
    position: 'absolute'
  },
  mainButton: {
    marginTop: 1,
  },
});




export default mainUIComponentStyles;   