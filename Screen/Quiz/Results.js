// components/Result.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { WindowHeight,WindowWidth } from "../GlobalCSS";
import { SafeAreaView } from "react-native-safe-area-context";

const Result = ({ route, navigation }) => {
  const { score, totalQuestions } = route.params;
  const backgroundImage = require("D:/Projects/Quiz_App/assets/Result sheet.jpeg");

  return (
    <SafeAreaView>
    <ScrollView style={styles.MainContainer}>
      <ImageBackground
          style={styles.image}
          source={backgroundImage}
            // uri: "https://i.pinimg.com/originals/cc/b6/be/ccb6be59bb0ad459c133703388988f50.jpg",
         
        >
    <View   style={styles.container}>
      <Text style={styles.resultText}>Quiz Completed...!</Text>
      <Text style={styles.scoreText}>
        Your Score is
      </Text>
      <Text style={styles.scoreText}>
        {score}/{totalQuestions}
      </Text>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text} >Go Home</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer:{
    // backgroundColor: "#201bad",
    height:WindowWidth, 
    height: WindowHeight+100 ,
    // paddingTop:10
  },
  container: {
    height:WindowHeight *0.3,
      width: WindowWidth * 0.8,
      margin:40,
      marginTop:130 ,
      marginLeft:30
    
  },
  resultText: {
    fontSize: 26,
    fontWeight: "bold",
    color:"#98817b",
    marginBottom: 16,
    textAlign:"center",
    marginTop:150,
   marginLeft:35
  },
  scoreText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign:"center",
    color:"#536872",
    marginTop:20,
    marginLeft:25
  },
  button1: {
    // backgroundColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center",
    height: 19,
    width: 60,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    marginTop:519,
    borderRadius: 10,
    alignSelf: "center",
    position: "absolute",
    alignSelf: "center",
    marginLeft: 10,
    paddingTop:5
    
  },
  text:{
    color:"#483c32",
    fontSize:15,
    fontWeight:"bold"
  },
  image: {
    height: WindowHeight +50,
    width: WindowWidth,
    borderRadius: 25, 
    overflow: "hidden",

  },
});

export default Result;
