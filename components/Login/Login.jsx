import {
  View,
  Text,
  Button,
  Pressable,
  Image,
  FlatList,
  SectionList,
  TextInput,
} from "react-native";
import Styles from "../Style/Styles";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import * as Font from "expo-font";
import logo from "../../assets/preto.png";
import { getAuth } from "firebase/auth";
// import { firebase } from "@react-native-firebase/auth";

import { app } from "../firebase/firebase_config";
import UsuarioService from "../Services/UsuarioService";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    async function loadFont() {
      return await Font.loadAsync({
        titulo: require("../Style/Inter-Bold.ttf"),
        texto: require("../Style/Inter-Light.ttf"),
      });
    }
    loadFont().then(() => {
      setFontReady(true);
    });
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        navigation.navigate("aa")
        // ...
      } 
    });

  }, []);

  const acaoBotao = () => {
    UsuarioService.signIn(auth, email, senha, (userCredential) => {
      console.log(userCredential);
    });
  };

  return (
    <View style={Styles.background}>
      <View style={Styles.grid}>
        <Image style={Styles.logo} source={require("../../assets/preto.png")} />

        <View style={Styles.form}>
          <Text
            style={[Styles.titulo, { fontFamily: "titulo", color: "#F2F2F2" }]}
          >
            Entrar
          </Text>
          <TextInput
            style={Styles.input}
            placeholder="E-mail ou Usuário"
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            style={Styles.input}
            placeholder="Senha"
            keyboardType="numeric"
            onChangeText={(senha) => setSenha(senha)}
          />
          <Text
            style={{
              fontFamily: "texto",
              color: "#F2F2F2",
              fontWeight: "bold",
              marginTop: 15,
            }}
          >
            Esqueceu a senha?
          </Text>
          <Pressable style={Styles.button} onPress={acaoBotao}>
            <Text
              style={{ fontFamily: "texto", fontWeight: "bold", fontSize: 18 }}
            >
              Entrar
            </Text>
          </Pressable>
        </View>
        <View>
          <Text
            style={[Styles.texto, { fontFamily: "texto", color: "#F2F2F2" }]}
          >
            Ou entre com
          </Text>
          <View style={Styles.socialMedia}>
            <Image
              style={Styles.icon}
              source={require("../../assets/google.png")}
            />
            <Image style={Styles.icon} source={require("../../assets/x.png")} />
            <Image
              style={Styles.icon}
              source={require("../../assets/face.png")}
            />
          </View>
        </View>
        <Pressable  onPress={() => navigation.navigate("cadastrar")}>
          <Text
            style={[
              Styles.texto,
              { fontFamily: "texto", color: "#F2F2F2", fontWeight: "bold" },
            ]}
          >
            Não possuí conta? Criar conta
          </Text>
        </Pressable>
        
      </View>
    </View>
  );
};

export default Login;
