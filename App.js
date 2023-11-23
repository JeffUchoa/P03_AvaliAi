import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login/Login";
import CadastrarUsuario from "./components/Login/CadastrarUsuario";
import Carrosel from "./components/Home/Carrosel";
import Pesquisar from "./components/Pesquisar/Pesquisar";
import Filme from "./components/Filme/Filme";
import Elenco from "./components/Filme/Elenco";

export default function App() {
  return (
    // <Login />
    // <CadastrarUsuario />
    // <Carrosel />
    // <Pesquisar />
    // <Filme />
    <Elenco />
  );
}
