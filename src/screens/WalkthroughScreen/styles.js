import { StyleSheet } from 'react-native';

const dynamicStyles = (appStyles, colorScheme) => {
  return StyleSheet.create({
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 25,
      color: 'white',
    },
    text: {
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
      paddingLeft: 10,
      paddingRight: 10,
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 60,
      borderRadius:20,
      //tintColor: 'white',

    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'left',
      backgroundColor: appStyles.colorSet[colorScheme].mainThemeForegroundColor,
    },
    button: {
      fontSize: 18,
      color: 'white',
      marginTop: 10,
    },
  });
};

export default dynamicStyles;
