import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  Alert,
} from "react-native";
import { styles } from "../config/componentColourPalette.js";
import axios from "axios";
import { TTSText, Say } from "../Components/TTS.js";

export default function LogIn({ navigation }) {
  const [user_email, setUserName] = useState();
  const [user_password, setPassword] = useState();
  const [user, setUser] = useState();


  const loginCheck = () => {
    axios
      .get("https://node-server-udw2.onrender.com/login", {
        params: {
          //Parameters which use the variables from the TextInputs
          user_email: { user_email }, // in {} the variable name has to match our database name as it used as a query e.g. user_email = 'Test@test.com'
          user_password: { user_password },
        },
      })
      .then((response) => {
        {response.data.map((user) => (
          global.fname = user.user_fname      
        ))}

        console.log(response.data); //Displays data from the array, if there isn't any. Can use a check if empty to notify user
        if (!Object.keys(response.data).length) {
          // if no data is found alert user
          console.log("no data found");
          Alert.alert("Login", "Invalid Credentials");
        } else {
          global.email = user_email
          navigation.navigate("Home");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <Say phrase="Login page" />
      <Image style={styles.Img} source={require("../assets/splash.png")} />
      <View style={{ width: "100%" }}>
        <TextInput
          onChangeText={(inputUsername) => setUserName(inputUsername)}
          style={styles.TextComponentStyle}
          placeholder={"Email"}
        ></TextInput>
        <TextInput
          onChangeText={(inputPassword) => setPassword(inputPassword)}
          placeholder={"Password"}
          style={styles.TextComponentStyle}
          secureTextEntry={true}
          textContentType="password"
        ></TextInput>

        <View Style={{ marginTop: "10%", width: "80%" }}>
          <TouchableOpacity>
            <Text
              style={{
                alignContent: "center",
                alignSelf: "center",
                textDecorationLine: "underline",
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => loginCheck()}
            style={styles.ButtonComponentStyle}
          >
            <Text style={{ color: "white" }}>Log In</Text>
          </TouchableOpacity>

          <Text style={{ alignSelf: "center", paddingTop: 10 }}>OR</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.ButtonComponentStyle}
          >
            <Text style={{ color: "white" }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
