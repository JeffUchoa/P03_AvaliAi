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

export default function App() {
  return (
    // <Login />
    // <CadastrarUsuario />
    <View style={{width:"100%",height:"100%"}}>
        <Filme />
        
        
    </View>
    
    // <Pesquisar />
    // <Filme />
    // <Elenco />
    // <Avaliacao />
  );
}
