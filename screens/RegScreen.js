import React, { useState } from "react";
import axios, { Axios } from "axios";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "../config/componentColourPalette.js";

export default function Reg({ navigation }) {
  const emailRegExp = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [age, setAge] = useState(0);

  function checkPasswords() {
    if (password == password1) {
      return 1;
    } else {
      return 0;
    }
  }

  function validatePassword() {
    if (password.length > 15 || password.length < 6) {
      return 0;
    } else {
      return 1;
    }
  }

  function validateEmail() {
    if (username == null) {
      Alert.alert("Alert", "Email can not be empty");
    } else {
      return emailRegExp.test(username);
    }
  }

  function validateAge() {
    if (age <= 0 || age > 101) {
      return 0;
    } else {
      return 1;
    }
  }

  const addUser = () => {
    axios
      .post("https://node-server-udw2.onrender.com/createuser", {
        fname: fname,
        lname: lname,
        age: age,
        email: username,
        password: password,
      })
      .then(() => {
        console.log("success");
      })
      .catch((error) => console.log(error));
  };

  //validate user input
  function onSubmitCallBack() {
    let validFlag = 1;
    if (!validateEmail()) {
      Alert.alert("Email", "Invalid Email Format");
      validFlag = 0;
    }
    if (!validatePassword()) {
      Alert.alert("Password", "Password must be between 6 and 15 characters");
      validFlag = 0;
    }
    if (!validateAge()) {
      Alert.alert("Age", "Age must be more than 0");
      validFlag = 0;
    }
    if (!checkPasswords()) {
      Alert.alert("Passwords", "Passwords must be the same");
      validFlag = 0;
    }
    if (validFlag) {
      addUser();
      navigation.navigate("Home");
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="Height">
      <View style={{ width: "100%" }}>
        <Image style={styles.Img} source={require("../assets/splash.png")} />
        <TextInput
          onChangeText={setFName}
          textContentType="FirstName"
          style={styles.TextComponentStyle}
          placeholder={"FirstName"}
          value={fname}
        ></TextInput>
        <TextInput
          onChangeText={setLName}
          textContentType="LastName"
          style={styles.TextComponentStyle}
          placeholder={"LastName"}
          value={lname}
        ></TextInput>
        <TextInput
          onChangeText={setUserName}
          textContentType="Email"
          style={styles.TextComponentStyle}
          placeholder={"Email"}
          value={username}
        ></TextInput>
        <TextInput
          keyboardType="number-pad"
          onChangeText={setAge}
          textContentType="none"
          style={styles.TextComponentStyle}
          placeholder={"Age"}
          value={age}
        ></TextInput>
        <TextInput
          onChangeText={setPassword}
          placeholder={"Password"}
          style={styles.TextComponentStyle}
          secureTextEntry={true}
          textContentType="password"
          value={password}
        ></TextInput>
        <TextInput
          onChangeText={setPassword1}
          placeholder={"Repeat Password"}
          style={styles.TextComponentStyle}
          secureTextEntry={true}
          textContentType="password"
          value={password1}
        ></TextInput>

        <View Style={{ marginTop: "10%", width: "80%" }}>
          <TouchableOpacity
            onPress={() =>onSubmitCallBack()}
            style={styles.ButtonComponentStyle}
          >
            <Text style={{ color: "white" }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}
