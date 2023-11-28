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

const Pesquisar = ({ navigation }) => {
  const [filmes, setFilmes] = useState([])

  const buscarFilmes = (nome) => {


    const nomeAlterado = nome.replace(/ /g, "%20");

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTE2Mjk4Y2UxOWY3ODhkM2Y5YmU2ZjgwNWYxMDRlMSIsInN1YiI6IjY1NWQwOTBjZjY3ODdhMDExZDVmMjVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tlrbUkhJz4-XJeL9arziMXffI-CF57CJIQ94YV2M6bA'
      }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${nomeAlterado}&include_adult=false&language=pt-BR&page=1`, options)
      .then(response => response.json())
      .then(response => setFilmes(response.results))



      .catch(err => console.error(err));
  }

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
      <View style={Styles.grid_carrosel}>
        <ScrollView style={{marginTop:30}}>
          <View style={[Styles.seta, { flexDirection: "row" }]}>
            <Image
              style={Styles.icon_voltar}
              source={require("../../assets/icon_voltar.png")}
            />
            <Text
              style={{
                fontFamily: "titulo",
                color: "#F2F2F2",
                fontSize: 15,
                marginTop: 40,
              }}
            >
              Voltar
            </Text>
            <Text
              style={[
                Styles.fonte,
                {
                  fontFamily: "titulo",
                  color: "#F2F2F2",
                  marginTop: 30,
                  marginLeft: 60,
                },
              ]}
            >
              Pesquisar
            </Text>
          </View>
          <TextInput
            style={[Styles.input, { marginTop: 40 }]}
            placeholder="Pesquise seu filme!"
            onChangeText={(nome) => buscarFilmes(nome)}
          />
          <View style={{ flexDirection: "collum", marginLeft: 10, marginTop: 30 }}>


            {filmes.map((filme, index) => {
              console.log(filme)

              return (
                <React.Fragment key={index}>
                  <Pressable style={{ marginTop: 30 }} onPress={() => navigation.navigate("filme", { filme: filme })}>
                    <View style={{ flex: 0, flexDirection: "row" }}>
                      <Image
                        source={{
                          uri: `https://image.tmdb.org/t/p/original/${filme.poster_path}`,
                        }}
                        style={Styles.genero_img}
                      />
                      <View style={{ flexDirection: "collum" }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, marginLeft: 20 }}>{filme.title}</Text>
                        <View style={{ flexDirection: "row", marginLeft: 20}}>
                          <Image
                            style={Styles.icon_pesquisar}
                            source={require("../../assets/Star.png")}
                          />
                          <Text
                            style={{
                              fontFamily: "texto",
                              fontSize: 14,
                              fontWeight: "bold",
                              color: "#FF8700",
                              marginLeft: 2,
                            }}
                          >
                            7,7
                          </Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}>
                          <Image
                            style={Styles.icon_pesquisar}
                            source={require("../../assets/Ticket.png")}
                          />
                          <Text
                            style={{
                              fontFamily: "texto",
                              fontSize: 14,
                              color: "white",
                              marginLeft: 2,
                            }}
                          >
                            {obterGeneroFilme(...filme.genre_ids)}
                          </Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}>
                          <Image
                            style={Styles.icon_pesquisar}
                            source={require("../../assets/CalendarBlank.png")}
                          />
                          <Text
                            style={{
                              fontFamily: "texto",
                              fontSize: 14,
                              color: "white",
                              marginLeft: 2,
                            }}
                          >
                            {filme.release_date}
                          </Text>
                        </View>

                      </View>
                    </View>

                  </Pressable>
                </React.Fragment>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={Styles.rodape}>
        <View style={Styles.rodape_icons}>
          <Image
            style={Styles.icon_carrosel}
            source={require("../../assets/home.png")}
          />
          <Image
            style={Styles.icon_carrosel}
            source={require("../../assets/lupa_full.png")}
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

export default Pesquisar;
