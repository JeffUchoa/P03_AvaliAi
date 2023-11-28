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

const Filme = ({ navigation,route }) => {
  const {filme} = route.params

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

  function obterGeneroFilme(...numeros) {
    // Mapeamento de números para gêneros
    const generos = {
      28: "Ação",
      12: "Aventura",
      16: "Animação",
      35: "Comédia",
      80: "Crime",
      99: "Documentário",
      18: "Drama",
      10751: "Família",
      14: "Fantasia",
      36: "História",
      27: "Terror",
      10402: "Música",
      9648: "Mistério",
      10749: "Romance",
      878: "Ficção Científica",
      10770: "Filme de TV",
      53: "Suspense",
      10752: "Guerra",
      37: "Faroeste"
    };

    // Filtra os números que não estão no mapeamento
    const generosEncontrados = numeros.filter(numero => generos.hasOwnProperty(numero));

    // Retorna uma string com os gêneros encontrados
    if (generosEncontrados.length > 0) {
      return generosEncontrados.map(numero => generos[numero]).join(", ");
    } else {
      return "Nenhum gênero encontrado";
    }
  }

  return (
    <View style={Styles.background}>
      
      <View style={Styles.grid_carrosel}>
        
        <ScrollView style={{marginTop:30,marginBottom:30}}>
          <View style={[Styles.seta, { flexDirection: "row" }]}>
            <Pressable style={[Styles.seta, { flexDirection: "row" }]}  onPress={() => navigation.goBack()}>
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
            </Pressable>
            
            <Text
              style={[
                Styles.fonte,
                {
                  fontFamily: "titulo",
                  color: "white",
                  marginTop: 30,
                  marginLeft: 60,
                },
              ]}
            >
              Detalhes
            </Text>
            <Image
              style={[Styles.icon_save, { marginTop: 35, marginLeft: 100 }]}
              source={require("../../assets/Salvar.png")}
            />
          </View>
          <Image
            style={[Styles.img_fundo2, { position: "absolute" }]}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${filme.poster_path}`,
            }}
          />
          <View style={{ flexDirection: "row", gap: 15, marginTop: 245 }}>
            <Image
              style={[Styles.pesquisar_img, { marginLeft: 20 }]}
              source={{
                uri: `https://image.tmdb.org/t/p/original/${filme.poster_path}`,
              }}
            />
            <View style={{ marginTop: "20%" }}>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#38393D",
                  borderRadius: 8,
                  width: 55,
                  height: 25,
                  alignItems: "center",
                }}
              >
                <Image
                  style={[Styles.icon_pesquisar, { marginLeft: 7 }]}
                  source={require("../../assets/Star.png")}
                />
                <Text
                  style={{
                    fontFamily: "texto",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#FF8700",
                  }}
                >
                  9.5
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: "texto",
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "white",
                  marginTop: 5,
                }}
              >
                {filme.title}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "center",
              gap: 5,
              margin: 20,
            }}
          >
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
            <Text
              style={{
                fontFamily: "texto",
                fontSize: 14,
                color: "#92929D",
                marginLeft: 2,
              }}
            >
              |
            </Text>
           
            
            
            <Image
              style={Styles.icon_pesquisar}
              source={require("../../assets/Ticket_Gray.png")}
            />
            <Text
              style={{
                fontFamily: "texto",
                fontSize: 14,
                color: "#92929D",
                marginLeft: 2,
              }}
            >
              {obterGeneroFilme(...filme.genre_ids)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 40,
              margin: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "texto",
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
                marginLeft: 2,
              }}
            >
              Sobre
            </Text>
            <Text
              style={{
                fontFamily: "texto",
                fontSize: 15,
                color: "white",
                marginLeft: 2,
              }}
            >
              Avaliações
            </Text>
            <Text
              style={{
                fontFamily: "texto",
                fontSize: 15,
                color: "white",
                marginLeft: 2,
              }}
            >
              Elenco
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "texto",
              fontSize: 14,
              color: "white",
              textAlign: "justify",
              marginTop: 20,
              marginBottom: 70,
            }}
          >
            {filme.overview}
          </Text>
          <Pressable style={Styles.pressable}>
            <View style={{ flexDirection: "row", gap: 7 }}>
              <Image
                style={Styles.icon_pesquisar}
                source={require("../../assets/add_box.png")}
              />
              <Text
                style={{
                  fontFamily: "texto",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Avaliar
              </Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>
      <View style={Styles.rodape}>
        <View style={Styles.rodape_icons}>
          <Image
            style={Styles.icon_carrosel}
            source={require("../../assets/home_full.png")}
          />
          <Image
            style={Styles.icon_carrosel}
            source={require("../../assets/lupa.png")}
          />
          <Image
            style={Styles.icon_carrosel}
            source={require("../../assets/person.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default Filme;
