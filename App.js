import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login/Login";
import CadastrarUsuario from "./components/Login/CadastrarUsuario";
import Carrosel from "./components/Home/Carrosel";
import Pesquisar from "./components/Pesquisar/Pesquisar";
import Filme from "./components/Filme/Filme";
import Menu from "./components/Menu/Menu";
// import Elenco from "./components/Filme/Elenco";

import Rodape from "./components/Home/Rodape/Rodape";

export default function App() {
  return (
    <Menu />
  );
}
