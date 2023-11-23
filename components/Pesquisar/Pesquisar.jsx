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

const Pesquisar = () => {
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
        <View style={[Styles.seta, { flexDirection: "row" }]}>
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
          <Text
            style={[
              Styles.titulo,
              {
                fontFamily: "titulo",
                color: "white",
                marginTop: 22,
                marginLeft: 45,
              },
            ]}
          >
            Pesquisar
          </Text>
        </View>
        <TextInput
          style={[Styles.input, { marginTop: 80 }]}
          placeholder="Pesquise seu filme!"
        />
        <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 30 }}>
          <Image
            style={Styles.pesquisar_img}
            source={require("../../assets/Movie_2.png")}
          />
          <View
            style={{ flexDirection: "column", marginLeft: 20, marginTop: 15 }}
          >
            <Text
              style={{
                fontFamily: "texto",
                fontSize: 18,
                color: "white",
              }}
            >
              Som da Felicidade
            </Text>
            <View style={{ marginTop: 15 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
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
              <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                  Biografia, Policial, Drama
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                  2023
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={Styles.icon_pesquisar}
                  source={require("../../assets/Clock.png")}
                />
                <Text
                  style={{
                    fontFamily: "texto",
                    fontSize: 14,
                    color: "white",
                    marginLeft: 2,
                  }}
                >
                  131 minutos
                </Text>
              </View>
            </View>
          </View>
        </View>
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
