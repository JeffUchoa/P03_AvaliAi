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

const Login = () => {
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

  return (
    <View style={Styles.background}>
      <View style={Styles.grid}>
        <Image style={Styles.logo} source={require("../../assets/preto.png")} />

        <View style={Styles.form}>
          <Text
            style={[Styles.titulo, { fontFamily: "titulo", color: "white" }]}
          >
            Entrar
          </Text>
          <TextInput style={Styles.input} placeholder="E-mail ou Usuário" />
          <TextInput
            style={Styles.input}
            placeholder="Senha"
            keyboardType="numeric"
          />
          <Text
            style={{
              fontFamily: "texto",
              color: "white",
              fontWeight: "bold",
              marginTop: 15,
            }}
          >
            Esqueceu a senha?
          </Text>
          <Pressable style={Styles.button}>
            <Text
              style={{ fontFamily: "texto", fontWeight: "bold", fontSize: 18 }}
            >
              Entrar
            </Text>
          </Pressable>
        </View>
        <View>
          <Text style={[Styles.texto, { fontFamily: "texto", color: "white" }]}>
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
        <Text
          style={[
            Styles.texto,
            { fontFamily: "texto", color: "white", fontWeight: "bold" },
          ]}
        >
          Não possuí conta? Criar conta
        </Text>
      </View>
    </View>
  );
};

export default Login;
