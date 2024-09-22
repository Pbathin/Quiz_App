// // components/Result.js
// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import { WindowHeight,WindowWidth } from "../GlobalCSS";
// import { SafeAreaView } from "react-native-safe-area-context";

// const Result = ({ route, navigation }) => {
//   const { score, totalQuestions } = route.params;
//   const backgroundImage = require("D:/Projects/Quiz_App/assets/Result sheet.jpeg");

//   return (
//     <SafeAreaView>
//     <ScrollView style={styles.MainContainer}>
//       <ImageBackground
//           style={styles.image}
//           source={backgroundImage}
//             // uri: "https://i.pinimg.com/originals/cc/b6/be/ccb6be59bb0ad459c133703388988f50.jpg",
         
//         >
//     <View   style={styles.container}>
//       <Text style={styles.resultText}>Quiz Completed...!</Text>
//       <Text style={styles.scoreText}>
//         Your Score is
//       </Text>
//       <Text style={styles.scoreText}>
//         {score}/{totalQuestions}
//       </Text>
//       <TouchableOpacity
//         style={styles.button1}
//         onPress={() => navigation.navigate("Home")}
//       >
//         <Text style={styles.text} >Go Home</Text>
//       </TouchableOpacity>
//     </View>
//     </ImageBackground>
//     </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   MainContainer:{
//     // backgroundColor: "#201bad",
//     height:WindowWidth, 
//     height: WindowHeight+100 ,
//     // paddingTop:10
//   },
//   container: {
//     height:WindowHeight *0.3,
//       width: WindowWidth * 0.8,
//       margin:40,
//       marginTop:130 ,
//       marginLeft:30
    
//   },
//   resultText: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color:"#98817b",
//     marginBottom: 16,
//     textAlign:"center",
//     marginTop:150,
//    marginLeft:35
//   },
//   scoreText: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 16,
//     textAlign:"center",
//     color:"#536872",
//     marginTop:20,
//     marginLeft:25
//   },
//   button1: {
//     // backgroundColor: "#d3d3d3",
//     alignItems: "center",
//     justifyContent: "center",
//     height: 19,
//     width: 60,
//     elevation: 10,
//     shadowColor: "black",
//     shadowOffset: { width: 6, height: 6 },
//     shadowRadius: 5,
//     shadowOpacity: 0.5,
//     marginTop:519,
//     borderRadius: 10,
//     alignSelf: "center",
//     position: "absolute",
//     alignSelf: "center",
//     marginLeft: 10,
//     paddingTop:5
    
//   },
//   text:{
//     color:"#483c32",
//     fontSize:15,
//     fontWeight:"bold"
//   },
//   image: {
//     height: WindowHeight +50,
//     width: WindowWidth,
//     borderRadius: 25, 
//     overflow: "hidden",

//   },
// });

// export default Result;
//----------------------------------------------------------------------------------------

// components/Result.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { WindowHeight, WindowWidth } from "../GlobalCSS";
import { SafeAreaView } from "react-native-safe-area-context";

const Result = ({ route, navigation }) => {
  const { score, totalQuestions } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.resultText}>Quiz Completed!</Text>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreLabelText}>Your Score is</Text>
              <Text style={styles.scoreValue}>
                {score}/{totalQuestions}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.buttonText}>Go Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f4f7", // Light grayish blue background color
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  cardContainer: {
    width: WindowWidth * 0.9,
    backgroundColor: "#e3f2fd", // Light blue background color for card container
    borderRadius: 25,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
  },
  card: {
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e88e5", // Dark blue color
    marginBottom: 16,
    textAlign: "center",
  },
  scoreContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  scoreLabelText: {
    fontSize: 22,
    color: "#6a1b9a", // Purple color
    marginBottom: 8,
    textAlign: "center",
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#d32f2f", // Red color
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1e88e5", // Dark blue color
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Result;
