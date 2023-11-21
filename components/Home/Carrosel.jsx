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

const Carrosel = () => {
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
          <Image
            style={Styles.genero_img}
            source={require("../../assets/Movie_1.png")}
          />
          <Image
            style={Styles.genero_img}
            source={require("../../assets/Movie_2.png")}
          />
          <Image
            style={Styles.genero_img}
            source={require("../../assets/Movie_3.png")}
          />
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
