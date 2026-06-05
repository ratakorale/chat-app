import { useRouter } from "expo-router";
import { Lock, Phone, User } from "lucide-react-native";
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

export default function SignUpScreen() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");

  const router = useRouter();

  async function signupRequest() {
    if (fname !== "" && lname !== "" && mobile !== "" && password !== "") {
      const data = {
        fname: fname,
        lname: lname,
        mobile: mobile,
        password: password,
      };
      try {
        const response = await fetch("http://192.168.1.4:3000/user/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const resdata = await response.json();
        alert(response.status + " : " + resdata.msg);
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
              source={require("../assets/signup.jpg")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>SignUp</Text>
            <Text style={styles.subtitleText}>
              Create your account to get started.
            </Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
              <User color="#8E8E93" size={20} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your First Name"
                placeholderTextColor="#A9A9B0"
                onChangeText={setfname}
              />
            </View>

            <View style={styles.inputWrapper}>
              <User color="#8E8E93" size={20} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your Last Name"
                placeholderTextColor="#A9A9B0"
                onChangeText={setlname}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Phone color="#8E8E93" size={20} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your Mobile"
                placeholderTextColor="#A9A9B0"
                keyboardType="phone-pad"
                onChangeText={setmobile}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Lock color="#8E8E93" size={20} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your Password"
                placeholderTextColor="#A9A9B0"
                secureTextEntry
                onChangeText={setpassword}
              />
            </View>
          </View>

          <View style={styles.actionContainer}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={() => {
                signupRequest();
              }}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.signInText}>Sign In</Text>
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
    height: 180, // Slightly reduced to accommodate more inputs smoothly
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 24,
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
    gap: 14,
    marginBottom: 24,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0EFF2",
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 52,
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
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
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
  signInText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
});
