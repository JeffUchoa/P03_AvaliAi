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

const Avaliar = () => {
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
    <View
      style={[Styles.background, { backgroundColor: "rgba(28, 28, 28, 0.75)" }]}
    >
      <View style={[Styles.grid_modal, {}]}>
        <Pressable style={[Styles.icon_carrosel, { marginLeft: 295 }]}>
          <Text
            style={{
              fontFamily: "texto",
              fontWeight: "bold",
              fontSize: 30,
              color: "#F2F2F2",
            }}
          >
            X
          </Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            style={[Styles.pesquisar_img, {}]}
            source={require("../../assets/Filme_arn.png")}
          />
          <View
            style={{ flexDirection: "column", marginLeft: 20, marginTop: 5 }}
          >
            <Text
              style={{
                fontFamily: "titulo",
                color: "#F2F2F2",
                fontSize: 22,
              }}
            >
              Spiderman No
              {"\n"}
              Way Home
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
                  2021
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={Styles.icon_pesquisar}
                  source={require("../../assets/Clock_gray.png")}
                />
                <Text
                  style={{
                    fontFamily: "texto",
                    fontSize: 14,
                    color: "#92929D",
                    marginLeft: 2,
                  }}
                >
                  148 minutos
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={Styles.icon_pesquisar}
                  source={require("../../assets/Ticket_gray.png")}
                />
                <Text
                  style={{
                    fontFamily: "texto",
                    fontSize: 14,
                    color: "#92929D",
                    marginLeft: 2,
                  }}
                >
                  Ação
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
            alignSelf: "center",
            gap: 6,
            marginTop: 15,
          }}
        >
          <Image
            style={Styles.icon}
            source={require("../../assets/Star_green.png")}
          />
          <Image
            style={Styles.icon}
            source={require("../../assets/Star_green.png")}
          />
          <Image
            style={Styles.icon}
            source={require("../../assets/Star_green.png")}
          />
          <Image
            style={Styles.icon}
            source={require("../../assets/Star_green.png")}
          />
          <Image
            style={Styles.icon}
            source={require("../../assets/Star_green.png")}
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
          style={[
            Styles.input,
            { marginTop: 15, height: 135, verticalAlign: "top" },
          ]}
        />
        <Pressable style={[Styles.pressable, { marginTop: 15 }]}>
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

export default Avaliar;
