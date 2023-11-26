import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login/Login";
import CadastrarUsuario from "./components/Login/CadastrarUsuario";
import Carrosel from "./components/Home/Carrosel";
import Pesquisar from "./components/Pesquisar/Pesquisar";
import Filme from "./components/Filme/Filme";
import Elenco from "./components/Filme/Elenco";
import Avaliacao from "./components/Filme/Avaliação";
import Rodape from "./components/Home/Rodape/Rodape";
import Avaliar from "./components/Filme/Avaliar";
import Perfil from "./components/Perfil/Perfil";

export default function App() {
  return (
    // <Login />
    // <CadastrarUsuario />
    <View style={{ width: "100%", height: "100%" }}>
      {/* <Filme /> */}
      {/* <Carrosel /> */}
      {/* <Avaliar /> */}
      {/* <Pesquisar /> */}
      <Perfil />
    </View>

    // <Filme />
    // <Elenco />
    // <Avaliacao />
  );
}
