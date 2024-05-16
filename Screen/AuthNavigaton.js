import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./AuthScreen/Landing";
import Registration from "./AuthScreen/Register";
import Home from "./MainScreen/Home";
import Login from "./AuthScreen/Login";
import Quiz from "./Quiz/Quiz";
import Results from "./Quiz/Results";
import Quiz1 from "./Quiz/Quiz1";
import Quiz2 from "./Quiz/Quiz2";
import Tab from "./MainScreen/Tab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createStackNavigator();
  // const Tab = createBottomTabNavigator();
export default function Navigation() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Landing"
          component={Landing}
        />
        <Stack.Screen name="Register" component={Registration} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen
          options={{ headerShown: false }}
          name="tab"
          component={Tab}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        
        <Stack.Screen name="GK" component={Quiz} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Results"
          component={Results}
        />
        <Stack.Screen name="Technical" component={Quiz1} />
        <Stack.Screen name="Science" component={Quiz2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
//------------------------------------------------------------------------------------------------------------------


// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// // Import Screens
// import Landing from "./AuthScreen/Landing";
// import Registration from "./AuthScreen/Register";
// import Home from "./MainScreen/Home";
// import Login from "./AuthScreen/Login";
// import Quiz from "./Quiz/Quiz";
// import Results from "./Quiz/Results";
// import Quiz1 from "./Quiz/Quiz1";
// import Quiz2 from "./Quiz/Quiz2";
// import Settings from "./MainScreen/Settings";
// import About from "./MainScreen/About";

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// // Define Stack Navigator for Auth Screens
// const AuthStack = () => (
//   <Stack.Navigator initialRouteName="Landing">
//     <Stack.Screen
//       options={{ headerShown: false }}
//       name="Landing"
//       component={Landing}
//     />
//     <Stack.Screen name="Register" component={Registration} />
//     <Stack.Screen name="Login" component={Login} />
//   </Stack.Navigator>
// );

// // Define Stack Navigator for Main Screens
// const MainStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen
//       options={{ headerShown: false }}
//       name="Home"
//       component={Home}
//     />
//     <Stack.Screen name="Quiz" component={Quiz} />
//     <Stack.Screen
//       options={{ headerShown: false }}
//       name="Results"
//       component={Results}
//     />
//     <Stack.Screen name="Quiz1" component={Quiz1} />
//     <Stack.Screen name="Quiz2" component={Quiz2} />
//   </Stack.Navigator>
// );

// // Define Bottom Tab Navigator
// const BottomTabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={MainStack} />
//     <Tab.Screen name="Settings" component={Settings} />
//     <Tab.Screen name="About" component={About} />
//   </Tab.Navigator>
// );

// export default function Navigation() {
//   return (
//     <NavigationContainer>
//       <AuthStack />
//     </NavigationContainer>
//   );
// }