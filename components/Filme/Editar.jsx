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
import { useState } from "react";
import { ScrollView } from "react-native";
import FilmesServices from "../Services/FilmesServices";
import { firestoreDb } from "../firebase/firebase_config";
import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from 'uuid';


const Editar = ({ navigation, route}) => {
    const [nota,setNota] = useState(0)
    const [avaliacao2,setAvaliacao] = useState("")
    const [nome,setNome] = useState("")

    const auth = getAuth();
    const user = auth.currentUser;

    const key = uuidv4();


    const {filme} = route.params
    const {avaliacao} = route.params
    const {avId} = route.params
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
    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        setNome( profile.uid);
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
  }, []);

  const atualizar = () => {
    const novosDados = {comentario:avaliacao2,nota,
      userId:nome}
     
    FilmesServices.updateAvaliacao(firestoreDb,avId, novosDados, () => {
      console.log("Avaliação atualizada com sucesso!");
  });
  navigation.navigate("filme",{ filme: filme, chave:key })
  }

  return (
    <View
      style={[Styles.background, { backgroundColor: "rgba(28, 28, 28, 0.75)" }]}
    >
      <View style={[Styles.grid_modal, {}]}>
        <Pressable style={[Styles.icon_carrosel, { marginLeft: 295 }]}>
          
        </Pressable>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            style={[Styles.pesquisar_img, {}]}
            source={{
                uri: `https://image.tmdb.org/t/p/original/${filme.poster_path}`,
              }}
          />
          <View
            style={{ flexDirection: "column", marginLeft: 20, marginTop: 5 }}
          >
            <Text
              style={{
                fontFamily: "titulo",
                color: "#F2F2F2",
                fontSize: 22,
                wordWrap:"break-word",
                overflow:"hidden",
                width:"40%"
              }}
            >
              {filme.title}
            </Text>
            <View style={{ marginTop: 5, gap: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={Styles.icon_pesquisar}
                  source={require("../../assets/CalendarBlank_gray.png")}
                />
                <Text
                  style={{
                    fontFamily: "texto",
                    fontSize: 14,
                    color: "#92929D",
                    marginLeft: 2,
                  }}
                >
                  {filme.release_date}
                </Text>
              </View>
              
              
            </View>
          </View>
        </View>
        <Text
          style={{
            fontFamily: "titulo",
            color: "#F2F2F2",
            fontSize: 18,
            marginTop: 25,
          }}
        >
          Sua Nota
        </Text>
        <View
          style={{
            flexDirection: "row",
            
            gap: 6,
            marginTop: 15,
          }}
        >
          <TextInput
          defaultValue={avaliacao.nota}
          onChangeText={(nota) => setNota(nota)}
          style={[
            Styles.input,            
            

            { marginTop: 15, verticalAlign: "top",keyboardType:"numeric", },
            
          ]}
          
        />
        </View>
        <Text
          style={{
            fontFamily: "titulo",
            color: "#F2F2F2",
            fontSize: 18,
            marginTop: 20,
          }}
        >
          Sua Avaliação
        </Text>
        <TextInput
        onChangeText={(senha) => setAvaliacao(senha)}
          style={[
            Styles.input,
            { marginTop: 15, height: 135, verticalAlign: "top" },
          ]}
          defaultValue={avaliacao.comentario}
        />
        <Pressable style={[Styles.pressable, { marginTop: 15 }]} onPress={atualizar} >
          <Text
            style={{
              fontFamily: "texto",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Confirmar
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Editar;
