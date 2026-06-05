import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Lock, UserPlus } from "lucide-react-native";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function SignInScreen() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    if (mobile !== "" && password !== "") {
      const logindata = {
        mobile: mobile,
        password: password,
      };
      try {
        const response = await fetch("http://192.168.1.4:3000/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(logindata),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data.user);
          await AsyncStorage.setItem("user", JSON.stringify(data.user));
          alert("login success");
        } else {
          const data = await response.json();
          console.log(data.msg);
          alert("no user found");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.illustrationContainer}>
            <Image
              source={require("../assets/signin.jpg")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>SignIn</Text>
            <Text style={styles.subtitleText}>Please Sign in to continue.</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
              <UserPlus color="#8E8E93" size={20} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your Mobile"
                placeholderTextColor="#A9A9B0"
                keyboardType="phone-pad"
                value={mobile}
                onChangeText={setMobile}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Lock color="#8E8E93" size={20} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your Password"
                placeholderTextColor="#A9A9B0"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>

          <View style={styles.actionContainer}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={() => {
                login();
              }}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.footerContainer}>
              <Text style={styles.footerText}> Do not have account? </Text>
              <TouchableOpacity onPress={() => router.push("/signup")}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  illustrationContainer: {
    width: "100%",
    height: 260,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 6,
  },
  subtitleText: {
    fontSize: 14,
    color: "#7C7C80",
  },
  formContainer: {
    width: "100%",
    gap: 16, // Spacing between input boxes
    marginBottom: 24,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0EFF2",
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 54,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#000000",
  },
  actionContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#1A66FF",
    borderRadius: 25,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    // Optional shadow for subtle depth
    shadowColor: "#1A66FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: "#8E8E93",
  },
  signUpText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
});
