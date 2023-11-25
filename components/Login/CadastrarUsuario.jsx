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
import UsuarioService from "../Services/UsuarioService";
import { useState } from "react";
import { app } from "../firebase/firebase_config";


const auth = getAuth(app)

const CadastrarUsuario = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

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

  const acaoBotao = () => {
    UsuarioService.signUp(
        auth,
        email,
        senha,
        (userCredential) => {
            console.log(userCredential)
        }
    )
  }

  return (
    <View style={Styles.background}>
      <View style={Styles.grid}>
        <View style={Styles.seta}>
          <Image
            style={Styles.icon_voltar}
            source={require("../../assets/icon_voltar.png")}
          />
          <Text
            style={{
              fontFamily: "titulo",
              color: "white",
              fontSize: 15,
              marginTop: 40,
            }}
          >
            Voltar
          </Text>
        </View>

        <View style={Styles.form}>
          <Text
            style={[Styles.titulo, { fontFamily: "titulo", color: "white" }]}
          >
            Criar conta
          </Text>
          <TextInput style={Styles.input} placeholder="Email" onChangeText={email => setEmail(email)} />
          <TextInput
            style={Styles.input}
            placeholder="Senha"
            keyboardType="numeric"
            onChangeText={senha => setSenha(senha)}
            
          />

          <Pressable style={Styles.button} onPress={acaoBotao}>
            <Text
              style={{ fontFamily: "texto", fontWeight: "bold", fontSize: 18 }}
            >
              Criar
            </Text>
          </Pressable>
        </View>
        <Text
          style={[
            Styles.texto,
            { fontFamily: "texto", color: "white", fontWeight: "bold" },
          ]}
        >
          Já tem uma conta? Entrar
        </Text>
      </View>
    </View>
  );
};

export default CadastrarUsuario;
