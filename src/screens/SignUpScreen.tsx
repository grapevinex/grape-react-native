import React from "react";
import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Fonts from "../constants/Fonts";
import { Center, Box, Text, Button, Link, Input } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

export default function SignUpScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [signupError, setSignupError] = useState("");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onHandleSignup = async () => {
    try {
      if (email !== "" && password !== "") {
        await createUserWithEmailAndPassword(auth, email, password).then(() =>
          console.log("signed up")
        );
      }
    } catch (error: any) {
      setSignupError(error.message);
    }
  };

  return (
    <SafeAreaView testID="SignUp" style={{ alignItems: 'center', flex: 1, overflow: 'hidden' }}>
      <Header screenTitle="Sign Up" />
      <Center
        width="100%"
        height="80%"
        _dark={{
          backgroundColor: "black",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "white",
        }}
      >
        <Link onPress={() => navigation.navigate("Account")}>Back to Account</Link>
        <Box
          maxW="90%"
          width={"420"}
          padding={"4"}
          rounded="lg"
          _dark={{
            backgroundColor: "black",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "white",
          }}
        >
          <Box style={{ paddingBottom: 16 }}>
            <Text style={{ paddingBottom: 8 }}>Email</Text>
            <Input
              size="xl"
              value={email}
              testID="username"
              placeholderTextColor="#DDDDDD"
              onChangeText={(text: string) => {
                setEmail(text);
              }}
            />
          </Box>
          <Box style={{ paddingBottom: 16 }}>
            <Text style={{ paddingBottom: 8 }}>Password</Text>
            <Input
              size="xl"
              value={password}
              testID="password"
              textContentType="password"
              placeholderTextColor="#DDDDDD"
              secureTextEntry
              onChangeText={(text: string) => {
                setPassword(text);
              }}
            />
          </Box>

          {signupError ? <Text>{signupError}</Text> : null}
          <Button size="lg" colorScheme={"red"} onPress={onHandleSignup}>
            Signup
          </Button>
          <Center paddingTop={12}>
            <Text>Already have an account?</Text>
            <Link onPress={() => navigation.navigate("Login")}>Go to Login</Link>
          </Center>
        </Box>
      </Center>
    </SafeAreaView>
  );
}
