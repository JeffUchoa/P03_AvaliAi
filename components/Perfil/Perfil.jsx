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
import { firestoreDb } from "../firebase/firebase_config";
import { getAuth } from "firebase/auth";
import FilmesServices from "../Services/FilmesServices";


const Perfil = () => {

  const [nome,setNome] = useState("")
  const [populares,setPopulares] = useState([])


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

  useEffect(
    ()=>{
        FilmesServices.listarAvaliacoes(
            firestoreDb," 507089 ",
            (filmes) => {
                
                setPopulares(filmes);
                console.log(filmes)
                

            }
        )
        
    },
    []
)



  const auth = getAuth();
  const user = auth.currentUser;

  

  return (
    <View style={Styles.background}>
      <View style={Styles.grid_carrosel}>
        <ScrollView>
          <View style={[Styles.seta, { flexDirection: "row", marginTop:30,justifyContent:"space-between",alignItems:"space-between" }]}>
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
                  marginLeft: 80,
                },
              ]}
            >
              Perfil
            </Text>
            <Image
              style={[Styles.icon_carrosel, { marginTop: 30, marginLeft: 80 }]}
              source={require("../../assets/config.png")}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 90,
              alignItems: "center",
            }}
          >
            <Image
              style={[Styles.perfil, {}]}
              source={require("../../assets/Tom.png")}
            />
            <View
              style={{ flexDirection: "column", marginLeft: 20, marginTop: 5 }}
            >
              <Text
                style={{
                  fontFamily: "titulo",
                  color: "#F2F2F2",
                  fontSize: 20,
                }}
              >
                {nome}
              </Text>
              <Text
                style={{
                  fontFamily: "texto",
                  fontSize: 13,
                  color: "#92929D",
                  marginLeft: 2,
                  marginTop: 10,
                }}
              >
                “Apaixonada pelos filmes Marvel e{"\n"}
                fissurada pela franquia Pânico”
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontFamily: "titulo",
              color: "#F2F2F2",
              fontSize: 22,
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            Últimas Avaliações
          </Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View style={{ flexDirection: "column" }}>
              <Image
                style={[Styles.genero_img, { marginBottom: 5 }]}
                source={require("../../assets/Movie_1.png")}
              />
              <Text
                style={{
                  fontFamily: "texto",
                  fontSize: 9,
                  color: "#92929D",
                  marginBottom: 5,
                }}
              >
                Doutor estranho e o{"\n"}
                Multiverso da loucura
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={Styles.icon_star}
                  source={require("../../assets/Star_green.png")}
                />
                <Text
                  style={{
                    fontFamily: "texto",
                    fontSize: 18,
                    color: "#00C47E",
                  }}
                >
                  6.3
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Image
                style={[Styles.genero_img, { marginBottom: 5 }]}
                source={require("../../assets/Movie_2.png")}
              />
              <Text
                style={{
                  fontFamily: "texto",
                  fontSize: 9,
                  color: "#92929D",
                  marginBottom: 5,
                }}
              >
                Doutor estranho e o{"\n"}
                Multiverso da loucura
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={Styles.icon_star}
                  source={require("../../assets/Star_green.png")}
                />
                <Text
                  style={{
                    fontFamily: "texto",
                    fontSize: 18,
                    color: "#00C47E",
                  }}
                >
                  6.3
                </Text>
              </View>
            </View>
          </View>
          
        </ScrollView>
      </View>
    </View>
  );
};

export default Perfil;
