
import {StyleSheet} from 'react-native';


mainUIComponentStyle = {
            backgroundColor: 'purple',
            fontSize: 0.5,
            fontWeight: '400',
            layoutOrigin: [1, 1],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -25]}]
}

buttonStyle = {
};

const mainUIComponentStyles = StyleSheet.create({
  mainComponent: {
      backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}]
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