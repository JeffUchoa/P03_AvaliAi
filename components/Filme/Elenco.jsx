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

const Elenco = () => {
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
            style={[Styles.img_fundo, { position: "absolute" }]}
            source={require("../../assets/image 2.png")}
          />
          <View style={{ flexDirection: "row", gap: 15, marginTop: 245 }}>
            <Image
              style={[Styles.pesquisar_img, { marginLeft: 20 }]}
              source={require("../../assets/Filme_arn.png")}
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
                Spiderman No Way Home
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
              2021
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
              Ação
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
                fontWeight: "bold",
                color: "white",
                marginLeft: 2,
              }}
            >
              Elenco
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 30 }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                margin: 10,
              }}
            >
              <Image
                style={Styles.elenco}
                source={require("../../assets/Tom.png")}
              />
              <Text
                style={{
                  fontFamily: "texto",
                  fontSize: 15,
                  color: "white",
                  margin: 10,
                }}
              >
                Tom Holland
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                margin: 10,
              }}
            >
              <Image
                style={Styles.elenco}
                source={require("../../assets/Zendaya.png")}
              />
              <Text
                style={{
                  fontFamily: "texto",
                  fontSize: 15,
                  color: "white",
                  margin: 10,
                }}
              >
                Zendaya
              </Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 30 }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                margin: 10,
              }}
            >
              <Image
                style={Styles.elenco}
                source={require("../../assets/Bene.png")}
              />
              <Text
                style={{
                  fontFamily: "texto",
                  fontSize: 15,
                  color: "white",
                  margin: 10,
                }}
              >
                Benedict
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                margin: 10,
              }}
            >
              <Image
                style={Styles.elenco}
                source={require("../../assets/Brad.png")}
              />
              <Text
                style={{
                  fontFamily: "texto",
                  fontSize: 15,
                  color: "white",
                  margin: 10,
                }}
              >
                Brad Pitt
              </Text>
            </View>
          </View>
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

export default Elenco;
