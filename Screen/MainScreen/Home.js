// components/Home.js
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { WindowHeight, WindowWidth } from "../GlobalCSS";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  // const Homebg = require("D:/Projects/Quiz_App/Images/Homebg.jpg");
  // const gk_bg = require("D:/Projects/Quiz_App/Images/gk_bg.jpeg");
  // const tech_bg = require("D:/Projects/Quiz_App/Images/tech_bg.jpeg");
  // const Sci_bg = require("D:/Projects/Quiz_App/Images/Sci_bg.jpeg");
  return (
    <SafeAreaView>
      <ScrollView>
      <ImageBackground
          style={styles.image}
          source={{
            uri: "https://raw.githubusercontent.com/Pbathin/Quiz_App/0085862ff0271b3142ad959bab1dd8b29eae0571/Images/Homebg.jpg",
          }}
        >
          <View style={styles.container}>
            <Text style={styles.Text}>Let's start with Quiz </Text>
            <View style={styles.SubContainer1}>
            <ImageBackground
          style={styles.image1}
          source={{
            uri: "https://raw.githubusercontent.com/Pbathin/Quiz_App/0085862ff0271b3142ad959bab1dd8b29eae0571/Images/gk_bg.jpeg",
          }}
        >
              {/* <Text style={styles.headerText}>General </Text>
              <Text style={styles.headerText1}>Knowledge </Text> */}
              <TouchableOpacity
                style={styles.button1}
                onPress={() => navigation.navigate("GK")}
              >
              <Text style={styles.headerText1}>General Knowledge</Text>
              </TouchableOpacity>
              </ImageBackground>
            </View>
            <View style={styles.SubContainer1}>
            <ImageBackground
          style={styles.image1}
          source={{
            uri: "https://raw.githubusercontent.com/Pbathin/Quiz_App/0085862ff0271b3142ad959bab1dd8b29eae0571/Images/tech_bg.jpeg",
          }}
        >
              {/* <Text style={styles.headerText}>Technical </Text> */}
              <TouchableOpacity
                style={styles.button1}
                onPress={() => navigation.navigate("Technical")}
              >
                <Text style={styles.headerText1}>Technical</Text>
              </TouchableOpacity>
              </ImageBackground>
            </View>
            <View style={styles.SubContainer1}>
            <ImageBackground
          style={styles.image1}
          source={{
            uri: "https://raw.githubusercontent.com/Pbathin/Quiz_App/0085862ff0271b3142ad959bab1dd8b29eae0571/Images/Sci_bg.jpeg",
          }}
        >
              {/* <Text style={styles.headerText}>Science </Text> */}
              <TouchableOpacity
                style={styles.button1}
                onPress={() => navigation.navigate("Science")}
              >
                <Text style={styles.headerText1}>Science</Text>
              </TouchableOpacity>
              </ImageBackground>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    // backgroundColor: "#DBB68F",
    height: WindowWidth,
    height: WindowHeight + 100,
    paddingTop: 50,
  },
  SubContainer1: {
    height: WindowHeight * 0.25,
    width: WindowWidth * 0.6,
    // backgroundColor: "#046353",
    borderColor: "white",
    borderWidth: 2,
    marginTop: 20,
    marginLeft: 65,
    borderRadius: 25,
  },
  Text: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    marginLeft:30,
    color:"lightblue",
    fontWeight:"bold"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "white",
    textAlign: "center",
    marginTop: 30,
  },
  headerText1: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
    color: "black",
    // color: "#2d6336",
    textAlign: "center",
    marginTop: 6,
    marginLeft:1,
    marginRight:2,
    marginBottom:10,
  },
  image: {
    height: WindowHeight + 50,
    width: WindowWidth,
  },
  image1: {
    height: WindowHeight * 0.245,
    width: WindowWidth * 0.592,
    borderColor: "white",
    marginTop: 0.6,
    marginLeft: 0.1,
    borderRadius: 25, // Adding border radius for curved border
    overflow: "hidden",
  },
  button1: {
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 160,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    marginTop: 20,
    borderRadius: 10,
    alignSelf: "center",
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    marginLeft: 15,
  },
});

export default Home;
