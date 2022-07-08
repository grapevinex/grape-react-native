import React from "react";
import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Box, Input, Text, Center, Button, Link } from "native-base";
import Header from "../components/Header";
import Fonts from "../constants/Fonts";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const onLogin = async () => {
    try {
      if (email !== "" && password !== "") {
        await signInWithEmailAndPassword(auth, email, password).then(() =>
          navigation.navigate("Gabba")
        );
      }
    } catch (error: any) {
      setLoginError(error.message);
    }
  };

  return (
    <SafeAreaView
      testID="Login"
      style={{ alignItems: "center", flex: 1, overflow: "hidden" }}
    >
      <Header screenTitle="Login" />
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
        <Link onPress={() => navigation.navigate("Account")}>Back To Account</Link>
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
          <View style={{ paddingBottom: 16 }}>
            <Text style={{ paddingBottom: 8 }}>Email / Username</Text>
            <Input
              size="xl"
              value={email}
              testID="username"
              placeholderTextColor="#FFFFFF"
              onChangeText={(text: string) => {
                setEmail(text);
              }}
            />
          </View>
          <View style={{ paddingBottom: 16 }}>
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
          </View>

          {loginError ? <Text>{loginError}</Text> : null}
          <Button size="lg" colorScheme="red" onPress={onLogin}>
            Login
          </Button>
          <Center paddingTop={12}>
            <Text>Don't have an account?</Text>
            <Link onPress={() => navigation.navigate("SignUp")}>Sign Up</Link>
          </Center>
        </Box>
      </Center>
    </SafeAreaView>
  );
}
