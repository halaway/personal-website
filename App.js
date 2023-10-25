import React, { useEffect, useState } from "react";
// import Appearance from 'react-native'
// import { AppearanceProvider, Appearance } from "react-native-appearance";
import WalkthroughScreen from "./src/screens/WalkthroughScreen/WalkthroughScreen";
import WalkthroughAppConfig from "./src/WalkthroughAppConfig";
import DynamicAppStyles from "./src/DynamicAppStyles";
import {Text, StyleSheet, View, ImageBackground} from 'react-native';
import dynamicStyles from "./src/screens/WalkthroughScreen/styles";
import someStyles from "./src/screens/WalkthroughScreen/someStyles";
import { Image, SafeAreaView, ScrollView,} from "react-native";
//import carousel from "./src/screens/WalkthroughScreen/carousel";
import Carousel from 'react-bootstrap/Carousel';
import Slider from 'react-touch-drag-slider';
//import images from './assets'
import 'bootstrap/dist/css/bootstrap.min.css';

//import WalkthroughAppConfig from "./src/WalkthroughAppConfig";


export default function App() {


    const images = [ ("./avatar.jpeg"), ('./mount.jpeg') ]

  return (

    <SafeAreaView style={{flex: 1}}>

        <ScrollView>
         <View style={someStyles.container}> 
            <ImageBackground style={someStyles.image}
              source = {require("../abstract.jpeg")}>

                <Text style={someStyles.text}> Donnolis</Text>
                <View style={{flex:1, alignItems:'center', marginTop:10}}> 
                  <img style= {someStyles.viewImage}
                      src={require("../avatar.jpeg")} 
                      >
                    </img>

                    <div className='text-container'>
                      <p style={{fontSize:20,marginTop:40,
          
                        borderRadius:20,
                        backgroundColor:'grey',
                        marginLeft:10,flexDirection:'row',
            
                        borderColor:'black',
          opacity:0.9}}>   Hello there! I am Daniel Alfaro!"A Brooklyn-based ambitiously aspiring Software Developer and Computer Science extraordinaire!" </p>
                    </div>

                </View>
                

                {/* <View style={{ flex: 1, alignItems: 'left ',flexDirection:'row' }}>
                  <Image style= {someStyles.viewImage}
                    source={require("../avatar.jpeg")} 
                    >
                  </Image>

                    <View style={someStyles.texContainer}>
                    <Text style={someStyles.textSpecfic}> Hello there! I am Daniel Alfaro!"A Brooklyn-based ambitiously aspiring Software Developer and Computer Science extraordinaire!" - The Daily Bugel Over the past few months, I've had the opportunity to conduct my own research, using software to better understand the vast information around us. Here you'll find a few of my recent works, along with passion projects and exciting upcoming endeavors. 🚀</Text>
                    </View>
              </View> */}

             
              <Carousel style={{flex:1,alignSelf:'center' }} >


                <Carousel.Item style={{marginTop:70,}}>
                  <img style={someStyles.carouselImage}
                      src={require('../imageNYC.jpeg')}
                        alt="First slide" > 
                        
                      </img>
             
                  <Carousel.Caption>
                    <p1>This is a setting</p1>
                  </Carousel.Caption>

                  
                </Carousel.Item>
               

                 <Carousel.Item style={{marginTop:70}}>
                  <Image style={someStyles.carouselImage}
                      source={require('../imageNLP.jpeg')}
                        alt="Second slide"
                  />

                </Carousel.Item>

                </Carousel>
            
            </ImageBackground>        


            <ImageBackground style ={someStyles.image}
            source={require('../green.jpeg')}>
              
              </ImageBackground>     
          </View>

            </ScrollView>

        </SafeAreaView>
        
  );
}

