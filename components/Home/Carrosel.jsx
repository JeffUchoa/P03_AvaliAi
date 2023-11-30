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
import Populares from "../Filme/Populares";
import FilmesServices from "../Services/FilmesServices";
import { firestoreDb } from "../firebase/firebase_config";

const Carrosel = ({ navigation }) => {
  const [filmes, setFilmes] = useState([]);

  const [populares2,setPopulares2] = useState([])
    const [lista,setLista] = useState([])
    const compararPorNota = (a, b) => b.nota - a.nota;

    const buscarFilme = async (id) => {
      const options = { method: 'GET', headers: { accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTE2Mjk4Y2UxOWY3ODhkM2Y5YmU2ZjgwNWYxMDRlMSIsInN1YiI6IjY1NWQwOTBjZjY3ODdhMDExZDVmMjVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tlrbUkhJz4-XJeL9arziMXffI-CF57CJIQ94YV2M6bA' } };
  
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options);
        const data = await response.json();
        
        return data; // Retorna o objeto obtido na solicitação fetch
      } catch (error) {
        console.error(error);
        throw error; // Lança o erro para que o chamador da função possa lidar com ele, se necessário
      }
    };

    useEffect(
        ()=>{
            FilmesServices.listar(
                firestoreDb,
                (filmes) => {
                    
                    const compararPorNota = (a, b) => b.nota - a.nota;
                    setPopulares2(filmes.sort(compararPorNota));
                    filmes.map((filme, index) => {
                      
                      buscarFilme(filme.movieId)
                        .then(filme2 => { 
                          filme2.nota = filme.nota
                          setLista(oldArray => [...oldArray, filme2]);
                          
                        })

                    })

                }
            )
            
        },
        []
    )

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTE2Mjk4Y2UxOWY3ODhkM2Y5YmU2ZjgwNWYxMDRlMSIsInN1YiI6IjY1NWQwOTBjZjY3ODdhMDExZDVmMjVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tlrbUkhJz4-XJeL9arziMXffI-CF57CJIQ94YV2M6bA",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&year=2023",
      options
    )
      .then((response) => response.json())
      .then((response) => setFilmes(response.results))

      .catch((err) => console.error(err));
  }, []);

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
        <ScrollView>
          <Text
            style={[
              Styles.fonte,
              {
                fontFamily: "titulo",
                color: "#F2F2F2",
                marginTop: 70,
                marginBottom: 20,
              },
            ]}
          >
            Recentes
          </Text>
          <ScrollView horizontal={true} style={{flexDirection: "row", width:"100%",position:"static"}}>
            
            {filmes.slice(4, 9).map((filme2,index) => {
              let contagem = index + 1;
                  return ( 
                     
                    <Pressable onPress={() => navigation.navigate("filme", { filme: filme2 })}>
                      
                      <Image
                        source={{
                          uri: `https://image.tmdb.org/t/p/original${filme2.poster_path}`,
                        }}
                        style={Styles.genero_img_recente}
                      />
                      <Text style={{color:"white",position:"absolute",bottom:0,fontSize:150,opacity:0.5}}>{contagem}</Text>
                    </Pressable>
                    
                ); 
                   
            })}
          
        </ScrollView>
          <Text
            style={[
              Styles.fonte,
              { fontFamily: "titulo", color: "#F2F2F2", marginTop: 30,marginBottom:30 },
            ]}
          >
            Estreia
          </Text>
          <View style={Styles.genero}>
            {filmes.map((filme, index) => {
              console.log(filmes)
              const isThirdInRow = (index + 1) % 3 === 0;

              return (
                <React.Fragment key={index}>
                  <Pressable onPress={() => navigation.navigate("filme", { filme: filme })}>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/original/${filme.poster_path}`,
                      }}
                      style={Styles.genero_img}
                    />
                  </Pressable>

                  {isThirdInRow && (
                    <View style={{ width: "100%", height: 40 }} />
                  )}
                </React.Fragment>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Carrosel;
