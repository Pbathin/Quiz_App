//   import {
//     StyleSheet,
//     Text,
//     TextInput,
//     View,
//     Image,
//     TouchableOpacity,
//     SafeAreaView,
// } from "react-native";
// import React, { useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { WindowHeight, WindowWidth } from "../GlobalCSS";
// import { ScrollView } from "react-native-gesture-handler";
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

// export default function Login({ navigation }) {
//     const [user, setUser] = useState({});
//     const [passwordVisible, setPasswordVisible] = useState(false);

//     const handleChange = (value, name) => {
//         setUser({
//             ...user,
//             [name]: value,
//         });
//     };

//     const Login = async () => {
//         let data = await AsyncStorage.getItem("register");
//         data = JSON.parse(data);
//         let check = data.filter((item) => {
//             return item.email == user.email && item.password == user.password;
//         });
//         console.log(check.length);
//         if (check.length > 0) {
//             alert("Login Successful");

//             navigation.navigate("Home");
//         } else {
//             alert("Login Unsuccessful !!");
//         }
//     };

//     return (
//         <SafeAreaView style={styles.mainContainer}>
//             <ScrollView>
//                 <View>
//                     <Image
//                         style={styles.image}
//                         source={{
//                             uri: "https://raw.githubusercontent.com/Pbathin/Quiz_App/0085862ff0271b3142ad959bab1dd8b29eae0571/Images/login.jpg",
//                         }}
//                     />
//                 </View>
//                 <View style={styles.loginContainer}>
//                     <Text style={styles.heading}>Login to continue</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Enter Your Email"
//                         onChangeText={(value) => handleChange(value, "email")}
//                     />
//                     <View style={styles.passwordContainer}>
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Enter Your Password"
//                             secureTextEntry={!passwordVisible}
//                             onChangeText={(value) => handleChange(value, "password")}
//                         />
//                         <TouchableOpacity
//                             style={styles.icon}
//                             onPress={() => setPasswordVisible(!passwordVisible)}
//                         >
//                             <Icon
//                                 name={passwordVisible ? "visibility" : "visibility-off"}
//                                 size={24}
//                                 color="#6A5547"
//                             />
//                         </TouchableOpacity>
//                     </View>
//                     <TouchableOpacity style={styles.button} onPress={Login}>
//                         <Text style={styles.forgotText}>Login</Text>
//                     </TouchableOpacity>
//                     <View>
//                         <Text style={styles.ForRegister}>
//                             You don't have an account?{" "}
//                             <Text
//                                 onPress={() => navigation.navigate("Register")}
//                                 style={styles.SignUp}
//                             >
//                                 Sign Up
//                             </Text>
//                         </Text>
//                     </View>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     mainContainer: {
//         flex: 1,
//         backgroundColor: "white",
//     },
//     image: {
//         width: WindowWidth * 1,
//         height: WindowHeight * 0.4,
//         borderRadius: 30,
//         marginTop: 5,
//     },
//     container: {
//         alignItems: "center",
//         justifyContent: "center",
//         textAlign: "center",
//     },
//     heading: {
//         fontSize: 25,
//         marginTop: 15,
//         textAlign: "center",
//         marginBottom: 15,
//         color: "#92735D",
//     },
//     input: {
//         borderWidth: 1,
//         borderRadius: 30,
//         height: "auto",
//         width: WindowWidth - 18,
//         margin: 10,
//         padding: 15,
//         textAlign: "center",
//         borderColor: "#6A5547",
//         marginTop: 15,
//         marginBottom: 15,
//         fontSize: 18,
//     },
//     passwordContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//     },
//     icon: {
//         position: "absolute",
//         right: 30,
//     },
//     button: {
//         backgroundColor: "#E7E0E0",
//         height: "auto",
//         width: "50%",
//         elevation: 10,
//         marginLeft: 100,
//         shadowColor: "gray",
//         marginTop: 20,
//         shadowOffset: {
//             width: 6,
//             height: 6,
//         },
//         shadowRadius: 15,
//         shadowOpacity: 50,
//         margin: 10,
//         paddingBottom: 20,
//         borderRadius: 40,
//     },
//     forgotText: {
//         color: "#92735D",
//         paddingHorizontal: 25,
//         justifyContent: "center",
//         textAlign: "center",
//         paddingTop: 13,
//         fontSize: 18,
//     },
//     ForRegister: {
//         alignContent: "center",
//         textAlign: "center",
//         paddingTop: 10,
//         color: "#92735D",
//     },
//     SignUp: {
//         textDecorationLine: "underline",
//         color: "grey",
//         textAlign: "center",
//     },
//     loginContainer: {
//         flex: 1,
//         marginTop: 10,
//         borderTopLeftRadius: 35,
//         borderTopRightRadius: 35,
//     },
// });

//-----------------------------------------------------------------------------------------------

import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WindowHeight, WindowWidth } from "../GlobalCSS";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

export default function Login({ navigation }) {
    const [user, setUser] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleChange = (value, name) => {
        setUser({
            ...user,
            [name]: value,
        });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
        return passwordRegex.test(password);
    };

    const Login = async () => {
        if (!validateEmail(user.email)) {
            Alert.alert("Invalid Email", "Email must be a valid Gmail, Hotmail, or Outlook address.");
            return;
        }
        if (!validatePassword(user.password)) {
            Alert.alert("Invalid Password", "Password must be 6-12 characters long and include at least one uppercase letter, one number, and one special character.");
            return;
        }

        let data = await AsyncStorage.getItem("register");
        data = JSON.parse(data);
        let check = data.filter((item) => {
            return item.email == user.email && item.password == user.password;
        });
        console.log(check.length);
        if (check.length > 0) {
            Alert.alert("Login Successful");

            navigation.navigate("Home");
        } else {
            Alert.alert("Login Unsuccessful !!", "Incorrect Email or password");
        }
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View>
                    <Image
                        style={styles.image}
                        source={{
                            uri: "https://raw.githubusercontent.com/Pbathin/Quiz_App/0085862ff0271b3142ad959bab1dd8b29eae0571/Images/login.jpg",
                        }}
                    />
                </View>
                <View style={styles.loginContainer}>
                    <Text style={styles.heading}>Login to continue</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Your Email"
                        onChangeText={(value) => handleChange(value, "email")}
                    />
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Your Password"
                            secureTextEntry={!passwordVisible}
                            onChangeText={(value) => handleChange(value, "password")}
                        />
                        <TouchableOpacity
                            style={styles.icon}
                            onPress={() => setPasswordVisible(!passwordVisible)}
                        >
                            <Icon
                                name={passwordVisible ? "visibility" : "visibility-off"}
                                size={24}
                                color="#6A5547"
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={Login}>
                        <Text style={styles.forgotText}>Login</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.ForRegister}>
                            You don't have an account?{" "}
                            <Text
                                onPress={() => navigation.navigate("Register")}
                                style={styles.SignUp}
                            >
                                Sign Up
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "white",
    },
    image: {
        width: WindowWidth * 1,
        height: WindowHeight * 0.4,
        borderRadius: 30,
        marginTop: 5,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    heading: {
        fontSize: 25,
        marginTop: 15,
        textAlign: "center",
        marginBottom: 15,
        color: "#92735D",
    },
    input: {
        borderWidth: 1,
        borderRadius: 30,
        height: "auto",
        width: WindowWidth - 18,
        margin: 10,
        padding: 15,
        textAlign: "center",
        borderColor: "#6A5547",
        marginTop: 15,
        marginBottom: 15,
        fontSize: 18,
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        position: "absolute",
        right: 30,
    },
    button: {
        backgroundColor: "#E7E0E0",
        height: "auto",
        width: "50%",
        elevation: 10,
        marginLeft: 100,
        shadowColor: "gray",
        marginTop: 20,
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowRadius: 15,
        shadowOpacity: 50,
        margin: 10,
        paddingBottom: 20,
        borderRadius: 40,
    },
    forgotText: {
        color: "#92735D",
        paddingHorizontal: 25,
        justifyContent: "center",
        textAlign: "center",
        paddingTop: 13,
        fontSize: 18,
    },
    ForRegister: {
        alignContent: "center",
        textAlign: "center",
        paddingTop: 10,
        color: "#92735D",
    },
    SignUp: {
        textDecorationLine: "underline",
        color: "grey",
        textAlign: "center",
    },
    loginContainer: {
        flex: 1,
        marginTop: 10,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
});
