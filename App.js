import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login/Login";
import CadastrarUsuario from "./components/Login/CadastrarUsuario";
import Carrosel from "./components/Home/Carrosel";
import Pesquisar from "./components/Pesquisar/Pesquisar";
import Filme from "./components/Filme/Filme";
import MenuTab from "./components/Menu/MenuTab";
import Rodape from "./components/Home/Rodape/Rodape";
import Avaliar from "./components/Filme/Avaliar";
import Perfil from "./components/Perfil/Perfil";
import Menu2 from "./components/Menu/Menu2";


export default function App() {
  return (
    <Menu2 />
  );
}
