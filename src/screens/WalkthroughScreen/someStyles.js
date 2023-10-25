import { StyleSheet } from "react-native";


const someStyles = StyleSheet.create({
    container: {
      flex: 1,
      //padding: 24,
      //backgroundColor: 'grey',
    },

    image: {
        width: '100%',
        height: '100%',
        //opacity:0.1,
        //aspectRatio: 1,
      },

      textSpecfic:{
        marginTop:40,
        width:350,
        height:150,
        backgroundColor:'grey'
      },

      texContainer: {
          marginTop:40,
          width:350,
          height:160,
          borderRadius:20,
          backgroundColor:'grey',
          marginLeft:10,
          borderWidth:3,
          borderColor:'black',
          opacity:0.9

      },
    
      viewContainer:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'left',
        //backgroundColor: appStyles.colorSet[colorScheme].mainThemeForegroundColor,
      },

      viewImage: {

        width: 350,
        height: 350,
        borderRadius:60,
        borderWidth:3,
        borderColor:'black',
      },

      carouselImage: {
    
        width: 420,
        height: 420,
        borderWidth:3,
        borderColor:'black',
        borderRadius:40,
        resizeMode:'fit',
        marginTop:10,
        //alignItems:'center'
      },

      centeredContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'left',
        fontFamily:'Times New Roman',
        fontSize:42
        //backgroundColor: '#000000a0',
      },
    
});


export default someStyles;