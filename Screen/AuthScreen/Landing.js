import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { WindowHeight } from "../GlobalCSS";
  import { WindowWidth } from "../GlobalCSS";
  
  export default function Landing({ navigation }) {
    // const backgroundImage = require("D:/Projects/Quiz_App/Images/landing.jpg");
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://raw.githubusercontent.com/Pbathin/Quiz_App/0085862ff0271b3142ad959bab1dd8b29eae0571/Images/landing.jpg",
          }}
        />
        </View>
  
        <View style={styles.boardHeader}>
          <Text style={styles.label}>Hi.., </Text>
          <Text style={styles.label}>Let's learn by </Text>
          <Text style={styles.label}>playing </Text>
          <Text style={[styles.label, { paddingBottom: -5 }]}>Quiz...! </Text>
        </View>
  
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.StartedBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.BtnLabel}>Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      height: WindowHeight + 90,
      width: WindowWidth,
      backgroundColor: "white",
    },
    image: {
      height: WindowHeight * 0.4,
      width: WindowWidth,
      marginTop:50
    },
    boardHeader: {
      paddingHorizontal: 20,
      paddingVertical: 15,
      marginTop: 10,
    },
    label: {
      fontSize: 50,
      fontWeight: "bold",
      marginBottom: -10,
      color: "orange",
      paddingBottom: 20,
    },
    StartedBtn: {
      backgroundColor: "red",
      width: 180,
      padding: 20,
      borderRadius: 200,
      margin: 15,
      marginTop:30,
      alignItems: "center",
      elevation: 2,
    },
    BtnLabel: {
      fontSize: 20,
      color: "white",
    },
  });
  