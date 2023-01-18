import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
} from "react-native";
import { TouchableOpacity as TouchableOpacityGesture } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { styles } from "./config/componentColourPalette.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import FruitScreen from "./screens/FruitScreen";
import AnimalScreen from "./screens/AnimalScreen";
import RandomScreen from "./screens/RandomScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ExampleScreen from "./screens/ExampleScreen";
import LogIn from "./screens/LoginScreen.js";
import Reg from "./screens/RegScreen.js";
import {TTSText, Say} from "./Components/TTS.js";
import * as Speech from 'expo-speech';


//Starting screen of app
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TTSText style={{ fontSize: 26, fontWeight: "medium" }} phrase="Welcome back" text="Welcome back"/>
      <TTSText style={{ fontSize: 26, fontWeight: "medium", color: "#00cc00" }} phrase={""+global.fname} text={""+global.fname} />
      <Say phrase="What would you like to do?"/>

      {/* Quiz Navigation Button */}
      <TouchableOpacity
        style={styles.lightButton}
        onPress={() => {
          navigation.navigate("Categories"); Speech.stop(); Speech.speak("take a quiz");
        }}
      >
        <TTSText style={{ margin: 10, fontSize: 40 }} phrase="Take a quiz?" text="Quiz!"/>

        <Ionicons
          name="library-outline"
          size={50}
          style={styles.darkIcon}
        />

      </TouchableOpacity>

      <Say phrase="or?"/>

      <View style={{ flexDirection: "row", marginTop: "10%" }}>
        {/* Profile Navigation Button */}
        <TouchableOpacity
          style={styles.darkButton}
          onPress={() => {
            navigation.navigate("Profile"); Speech.stop(); Speech.speak("Profile");
          }}
        >
          <TTSText style={{ margin: 10, fontSize: 40 }} phrase="View your profile" text="Profile"/>
          <Ionicons
            name="ios-person-circle-outline"
            size={50}
            style={styles.lightIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CategoriesScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#003f5c",
      }}
    >
      <TouchableOpacity
        style={styles.fruitButton}
        onPress={() => {
          navigation.navigate("Fruit"); Speech.stop(); Speech.speak("Fruit quiz");
        }}
      >
        <TTSText style={styles.buttonText} phrase="Fruit quiz" text="Fruit" />

        <Ionicons name="nutrition" size={50} style={styles.catIcon}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.animalButton}
        onPress={() => {
          navigation.navigate("Animal"); Speech.stop(); Speech.speak("Animal quiz");
        }}
      >
        <TTSText style={styles.buttonText} phrase="Animal quiz" text="Animal"/>

        <Ionicons name="paw" size={50} style={styles.catIcon}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.randomButton}
        onPress={() => {
          navigation.navigate("Random"); Speech.stop(); Speech.speak("Random quiz");
        }}
      >
        <TTSText style={styles.buttonText} phrase="Random quiz" text="Random"/>

        <Ionicons name="help" size={50} style={styles.catIcon}></Ionicons>
      </TouchableOpacity>

      <Say phrase="Or"/>

      <TouchableOpacity
        style={styles.cHomeButton}
        onPress={() => {
          navigation.navigate("Home"); Speech.stop(); Speech.speak("Home");
        }}
      >
        <TTSText style={styles.buttonText} phrase="Go home" text="Home"/>

        <Ionicons name="home" size={50} style={styles.catIcon}></Ionicons>
      </TouchableOpacity>
    </View>
  );
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Register" component={Reg} />
        <Stack.Group
          screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
        <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Group>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Example" component={ExampleScreen} />
        <Stack.Group
          screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
          <Stack.Screen name="Fruit" component={FruitScreen} />
          <Stack.Screen name="Animal" component={AnimalScreen} />
          <Stack.Screen name="Random" component={RandomScreen} />
        </Stack.Group>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
