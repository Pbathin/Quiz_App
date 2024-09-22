//   import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput,
//     TouchableOpacity,
//     Image,
// } from "react-native";
// import React, { useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { WindowHeight, WindowWidth } from "../GlobalCSS";
// import { ScrollView } from "react-native-gesture-handler";
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

// export default function Registration({ navigation }) {
//     const [user, setUser] = useState({
//         name: "",
//         phone: "",
//         email: "",
//         password: "",
//     });
//     const [passwordVisible, setPasswordVisible] = useState(false);

//     const handleChange = (value, key) => {
//         setUser({ ...user, [key]: value });
//     };

//     const handleClear = () => {
//         setUser({
//             name: "",
//             phone: "",
//             email: "",
//             password: "",
//         });
//     };

//     const Register = async () => {
//         let old_data = await AsyncStorage.getItem("register");
//         old_data = JSON.parse(old_data) || [];
//         let user_id = 1001;
//         if (old_data) {
//             if (old_data.length === 0 || old_data.length == null) {
//                 user_id = 1001;
//             } else {
//                 user_id = old_data[old_data.length - 1].user_id + 1;
//             }
//         }
//         let details = {
//             user_id: user_id,
//             name: user.name,
//             phone: user.phone,
//             email: user.email,
//             password: user.password,
//         };

//         let all_details = [...old_data, details];
//         await AsyncStorage.setItem("register", JSON.stringify(all_details));
//         navigation.navigate("Login");
//     };

//     return (
//         <ScrollView style={styles.mainContainer}>
//             <View>
//                 <View>
//                     <Image
//                         style={styles.image}
//                         source={{
//                             uri: "https://raw.githubusercontent.com/Pbathin/Quiz_App/0085862ff0271b3142ad959bab1dd8b29eae0571/Images/Register.jpg",
//                         }}
//                     />
//                 </View>
//                 <Text style={styles.heading}>Register to continue</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter your Name"
//                     onChangeText={(value) => handleChange(value, "name")}
//                 />

//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter your Phone Number"
//                     onChangeText={(value) => handleChange(value, "phone")}
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter Your Email"
//                     onChangeText={(value) => handleChange(value, "email")}
//                 />

//                 <View style={styles.passwordContainer}>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Enter Your Password"
//                         secureTextEntry={!passwordVisible}
//                         onChangeText={(value) => handleChange(value, "password")}
//                     />
//                     <TouchableOpacity
//                         style={styles.icon}
//                         onPress={() => setPasswordVisible(!passwordVisible)}
//                     >
//                         <Icon
//                             name={passwordVisible ? "visibility" : "visibility-off"}
//                             size={24}
//                             color="#005320"
//                         />
//                     </TouchableOpacity>
//                 </View>

//                 <TouchableOpacity style={styles.button1} onPress={Register}>
//                     <Text style={styles.forgotText}>Register</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={handleClear} style={styles.button2}>
//                     <Text style={styles.forgotText}>Clear</Text>
//                 </TouchableOpacity>
//                 <View>
//                     <Text style={styles.ForLogin}>
//                         Do you have an account?{" "}
//                         <Text
//                             onPress={() => navigation.navigate("Login")}
//                             style={styles.Login}
//                         >
//                             Login
//                         </Text>
//                     </Text>
//                 </View>
//             </View>
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     mainContainer: {
//         flex: 1,
//         backgroundColor: "white",
//     },
//     image: {
//         width: WindowWidth * 1,
//         height: WindowHeight * 0.29,
//         borderRadius: 30,
//     },
//     heading: {
//         fontSize: 25,
//         marginTop: 20,
//         textAlign: "center",
//         marginBottom: 20,
//         color: "#005320",
//     },
//     input: {
//         borderWidth: 1,
//         borderRadius: 30,
//         height: "auto",
//         width: WindowWidth - 18,
//         margin: 8,
//         padding: 10,
//         marginLeft: 10,
//         textAlign: "center",
//         borderColor: "#005320",
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
//     button1: {
//         backgroundColor: "#C9E2E5",
//         height: "auto",
//         width: "45%",
//         elevation: 10,
//         shadowColor: "gray",
//         marginTop: 30,
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
//     button2: {
//         backgroundColor: "#C9E2E5",
//         height: "auto",
//         width: "45%",
//         elevation: 10,
//         shadowColor: "gray",
//         marginLeft: "52%",
//         shadowOffset: {
//             width: 6,
//             height: 6,
//         },
//         shadowRadius: 15,
//         shadowOpacity: 50,
//         paddingBottom: 20,
//         marginTop: -63,
//         borderRadius: 40,
//     },
//     forgotText: {
//         color: "#005320",
//         paddingHorizontal: 25,
//         justifyContent: "center",
//         textAlign: "center",
//         paddingTop: 15,
//         fontSize: 18,
//     },
//     ForLogin: {
//         alignContent: "center",
//         textAlign: "center",
//         paddingTop: 15,
//         color: "#005320",
//     },
//     Login: {
//         textDecorationLine: "underline",
//         color: "grey",
//         textAlign: "center",
//     },
// });

//--------------------------------------------------------------------------------------------------------------

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WindowHeight, WindowWidth } from "../GlobalCSS";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

export default function Registration({ navigation }) {
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    });
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleChange = (value, key) => {
        setUser({ ...user, [key]: value });
    };

    const handleClear = () => {
        setUser({
            name: "",
            phone: "",
            email: "",
            password: "",
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

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };

    const Register = async () => {
        if (!validatePhone(user.phone)) {
            Alert.alert("Invalid Phone Number", "Phone number must be exactly 10 digits.");
            return;
        }
        if (!validateEmail(user.email)) {
            Alert.alert("Invalid Email", "Email must be a valid.");
            return;
        }
        if (!validatePassword(user.password)) {
            Alert.alert("Invalid Password", "Password must be 6-12 characters long and include at least one uppercase letter, one number, and one special character.");
            return;
        }

        let old_data = await AsyncStorage.getItem("register");
        old_data = JSON.parse(old_data) || [];
        let user_id = 1001;
        if (old_data) {
            if (old_data.length === 0 || old_data.length == null) {
                user_id = 1001;
            } else {
                user_id = old_data[old_data.length - 1].user_id + 1;
            }
        }
        let details = {
            user_id: user_id,
            name: user.name,
            phone: user.phone,
            email: user.email,
            password: user.password,
        };

        let all_details = [...old_data, details];
        await AsyncStorage.setItem("register", JSON.stringify(all_details));
        navigation.navigate("Login");
    };

    return (
        <ScrollView style={styles.mainContainer}>
            <View>
                <View>
                    <Image
                        style={styles.image}
                        source={{
                            uri: "https://raw.githubusercontent.com/Pbathin/Quiz_App/0085862ff0271b3142ad959bab1dd8b29eae0571/Images/Register.jpg",
                        }}
                    />
                </View>
                <Text style={styles.heading}>Register to continue</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Name"
                    onChangeText={(value) => handleChange(value, "name")}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Enter your Phone Number"
                    onChangeText={(value) => handleChange(value, "phone")}
                    keyboardType="numeric"
                />
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
                            color="#005320"
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button1} onPress={Register}>
                    <Text style={styles.forgotText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleClear} style={styles.button2}>
                    <Text style={styles.forgotText}>Clear</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.ForLogin}>
                        Do you have an account?{" "}
                        <Text
                            onPress={() => navigation.navigate("Login")}
                            style={styles.Login}
                        >
                            Login
                        </Text>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "white",
    },
    image: {
        width: WindowWidth * 1,
        height: WindowHeight * 0.29,
        borderRadius: 30,
    },
    heading: {
        fontSize: 25,
        marginTop: 20,
        textAlign: "center",
        marginBottom: 20,
        color: "#005320",
    },
    input: {
        borderWidth: 1,
        borderRadius: 30,
        height: "auto",
        width: WindowWidth - 18,
        margin: 8,
        padding: 10,
        marginLeft: 10,
        textAlign: "center",
        borderColor: "#005320",
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
    button1: {
        backgroundColor: "#C9E2E5",
        height: "auto",
        width: "45%",
        elevation: 10,
        shadowColor: "gray",
        marginTop: 30,
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
    button2: {
        backgroundColor: "#C9E2E5",
        height: "auto",
        width: "45%",
        elevation: 10,
        shadowColor: "gray",
        marginLeft: "52%",
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowRadius: 15,
        shadowOpacity: 50,
        paddingBottom: 20,
        marginTop: -63,
        borderRadius: 40,
    },
    forgotText: {
        color: "#005320",
        paddingHorizontal: 25,
        justifyContent: "center",
        textAlign: "center",
        paddingTop: 15,
        fontSize: 18,
    },
    ForLogin: {
        alignContent: "center",
        textAlign: "center",
        paddingTop: 15,
        color: "#005320",
    },
    Login: {
        textDecorationLine: "underline",
        color: "grey",
        textAlign: "center",
    },
});
