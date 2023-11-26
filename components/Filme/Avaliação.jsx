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

const Avaliacao = () => {
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
              Avaliação
            </Text>
          </View>
          <Image
            style={Styles.img_fundo}
            source={require("../../assets/image2.png")}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Image
              style={[Styles.icon_perfil, {}]}
              source={require("../../assets/account_circle.png")}
            />
            <View style={{}}>
              <Text
                style={{
                  fontFamily: "texto",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#F2F2F2",
                  marginLeft: 10,
                }}
              >
                Maria Sofia
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontFamily: "titulo",
              color: "#F2F2F2",
              fontSize: 22,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            Spiderman No Way Home
          </Text>
          <Text
            style={{
              fontFamily: "texto",
              fontSize: 16,
              color: "#92929D",
              marginBottom: 10,
            }}
          >
            2021
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
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
            <Text
              style={{
                fontFamily: "texto",
                fontSize: 16,
                color: "#92929D",
              }}
            >
              Review de Dezembro de 2021
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "texto",
              fontSize: 14,
              color: "#F2F2F2",
              textAlign: "justify",
              marginTop: 15,
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Viverra egestas arcu libero
            sed adipiscing cursus. Sed sed gravida cursus dolor sed. In sed a
            nisi fames pellentesque a in tincidunt ornare. Morbi vel tincidunt
            amet erat elementum ut pharetra. Rhoncus consectetur at viverra
            fames. Odio lacus enim facilisis ut porta commodo imperdiet tellus.
            Fermentum quam et sit posuere eros consectetur vel vitae. Aliquet
            amet dui hac dui. Bibendum placerat fermentum id vulputate. Ut
            accumsan proin ultrices in tincidunt metus nisi convallis. Ultricies
            mauris amet convallis sodales phasellus commodo. Ut mi magna luctus
            aliquam. Parturient condimentum dictum justo elementum adipiscing
            proin. Sem faucibus amet lacinia eleifend tortor sed et cursus.
            Tellus arcu ultrices aliquam eget. Turpis maecenas placerat
            porttitor varius. Eget aliquam tincidunt sit dignissim eget
            tristique risus. Consectetur ornare mattis justo ullamcorper amet
            lorem elementum sed. Nunc pulvinar libero feugiat pellentesque.
            Fermentum quis sit penatibus a feugiat phasellus habitasse. Urna
            tristique accumsan lectus malesuada aliquam aliquam duis et.
            Bibendum aliquam sit cursus aliquam convallis nulla nunc blandit.
            Sed non pulvinar ligula porta id nisl. Placerat nisi elementum magna
            nunc at sagittis volutpat sed cursus.
          </Text>
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

export default Avaliacao;
