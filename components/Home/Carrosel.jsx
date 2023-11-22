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

const Carrosel = () => {
  const [filmes, setFilmes] = useState([])


  useEffect(
    () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTE2Mjk4Y2UxOWY3ODhkM2Y5YmU2ZjgwNWYxMDRlMSIsInN1YiI6IjY1NWQwOTBjZjY3ODdhMDExZDVmMjVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tlrbUkhJz4-XJeL9arziMXffI-CF57CJIQ94YV2M6bA'
        }
      };

      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&year=2023', options)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .then(response => console.log(response.results))


        .catch(err => console.error(err));
    }
    ,
    []
  )

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
        <Text
          style={[
            Styles.titulo,
            { fontFamily: "titulo", color: "white", marginTop: 20 },
          ]}
        >
          Categorias
        </Text>
        <View style={Styles.categorias}>
          <Text
            style={[
              Styles.texto_categorias,
              { fontFamily: "texto", color: "gray" },
            ]}
          >
            Gênero
          </Text>
          <Text
            style={[
              Styles.texto_categorias,
              { fontFamily: "texto", color: "gray" },
            ]}
          >
            Populares
          </Text>
          <Text
            style={[
              Styles.texto_categorias,
              { fontFamily: "texto", color: "gray" },
            ]}
          >
            Estreia
          </Text>
        </View>
        
          
          <View style={Styles.genero}>
            {filmes.map((filme, index) => {
             
              const isThirdInRow = (index + 1) % 3 === 0;

              return (
                <React.Fragment key={index}>
                  <Pressable>
                    <Image
                      source={{ uri: `https://image.tmdb.org/t/p/original/${filme.poster_path}` }}
                      style={Styles.genero_img}
                    />
                  </Pressable>

                  
                  {isThirdInRow && <View style={{ width: '100%', height: 40 }} />}
                </React.Fragment>
              );
            })}
          </View>
        
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

export default Carrosel;
