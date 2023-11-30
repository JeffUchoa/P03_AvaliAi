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


const Filme = ({ navigation, route}) => {
  const {filme} = route.params
  const {chave} = route.params
  
  const [populares,setPopulares] = useState([])
  const [nome,setNome] = useState("")
  const [ativo,setAtivo] = useState(false)


  const auth = getAuth();
  const user = auth.currentUser;

  console.log(filme.id)

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

  useEffect(
    ()=>{
        FilmesServices.listarAvaliacoes(
            firestoreDb,filme.id,
            (filmes) => {
                
                setPopulares(filmes);
                console.log(filmes)
                

            }
        )
        
    },
    []
)
useEffect(
  ()=>{
      FilmesServices.listarAvaliacoes(
          firestoreDb,filme.id,
          (filmes) => {
              
              setPopulares(filmes);
              console.log(filmes)
              

          }
      )
      
  },
  [ativo,chave]
)

const deletar = (x) => {

  const avaliacaoId = x;
  console.log("Esse é meu ID ",x)

  FilmesServices.deleteAvaliacao(firestoreDb, avaliacaoId, () => {
    console.log("Avaliação deletada com sucesso!");
});
setAtivo(!ativo)
  

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
  

  return (
    <View style={Styles.background}>
      <View style={Styles.grid_carrosel}>
        <Pressable style={[Styles.pressable,{position:'absolute',bottom:60,zIndex:30,width:"60%",height:40}]} onPress={() => navigation.navigate("avaliar",{filme:filme})}>
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
                  color: "#F2F2F2",
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
                  color: "#F2F2F2",
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
              
              gap: 40,
              margin: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "texto",
                fontSize: 30,
                fontWeight: "bold",
                color: "#F2F2F2",
               
              }}
            >
              Sinopse
            </Text>
            
            
          </View>
          <Text
            style={{
              fontFamily: "texto",
              fontSize: 14,
              color: "#F2F2F2",
              textAlign: "justify",
              marginTop: 20,
              marginBottom: 40,
            }}
          >
            {filme.overview}
          </Text>
          <Text
              style={{
                fontFamily: "texto",
                fontSize: 30,
                fontWeight: "bold",
                color: "#F2F2F2",
              }}
            >
              Avaliações
            </Text>
            
          <View
            style={{
              flexDirection: "collum",
              
              marginTop: 20,
              
            }}
          >
            {populares.map((filme2,index) =>{
              const avaliacao = {comentario:filme2.comentario,nota:filme2.nota,userId:filme2.userId}

              return(
                <View style={{ flexDirection: "collum", gap: 5,marginBottom: 30 }}>
                  <View style={{ flexDirection: "row", gap: 5 }}>
                    <Image
                    style={[Styles.icon_perfil, {}]}
                    source={require("../../assets/account_circle.png")}
                  />
                  <View style={{ flexDirection: "collum", gap: 5 }}>
                      <Image
                      style={{marginBottom:0}}
                      source={require("../../assets/Star_green.png")}
                    />
                    
                    <Text
                      style={{
                        fontFamily: "texto",
                        fontSize: 18,
                        color: "#00C47E",
                      }}
                    >
                      {filme2.nota}
                    </Text>
                  </View>
                  <Text
                      style={{
                        fontFamily: "titulo",
                        fontSize: 18,
                        color: "white",
                      }}
                    >
                      {filme2.userId}
                    </Text>
                    
                  

                  </View>
                  
                  <Text
            style={{
              fontFamily: "texto",
              fontSize: 14,
              color: "white",
              textAlign: "justify",
              marginTop: 15,
            }}
          >
            {filme2.comentario}
          </Text>
          {nome ==filme2.userId ?
                <View style={{flexDirection:"row"}}>
                  <Pressable onPress={()=> deletar(filme2.id)}>
                    <Image
                      style={{height:30,width:30}}
                      source={require("../../assets/lixo.png")}
                    />
                  </Pressable>
                  <Pressable onPress={()=> navigation.navigate("editar",{avaliacao,filme,avId:filme2.id})}>
                    <Image
                      style={{height:30,width:30}}
                      source={require("../../assets/lapis.png")}
                    />
                  </Pressable>
                </View>
                     : null}
                
              
                
                <View style={{ flexDirection: "row", gap: 5 }}>
                
                  
                  
                
                
              </View>
              
                  
              </View>
                  
              )


            })}
            
            
          </View>
        
          
          
            
          
        </ScrollView>
      </View>
      
    </View>
  );
};

export default Filme;
