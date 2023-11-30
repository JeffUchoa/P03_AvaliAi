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
import { ScrollView } from "react-native";
import { useState } from "react";
import Styles from "../Style/Styles";
import { useEffect } from "react";
import FilmesService from "../Services/FilmesServices";
import { firestoreDb } from "../firebase/firebase_config";
import { useNavigation } from '@react-navigation/native';


const Populares = () =>{

  const navigation = useNavigation();
    

    const [populares2,setPopulares2] = useState([])
    const [lista,setLista] = useState([])
    const compararPorNota = (a, b) => b.nota - a.nota;

    const buscarFilme = async (id) => {
      const options = { method: 'GET', headers: { accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTE2Mjk4Y2UxOWY3ODhkM2Y5YmU2ZjgwNWYxMDRlMSIsInN1YiI6IjY1NWQwOTBjZjY3ODdhMDExZDVmMjVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tlrbUkhJz4-XJeL9arziMXffI-CF57CJIQ94YV2M6bA' } };
  
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options);
        const data = await response.json();
        
        return data; // Retorna o objeto obtido na solicitação fetch
      } catch (error) {
        console.error(error);
        throw error; // Lança o erro para que o chamador da função possa lidar com ele, se necessário
      }
    };

    useEffect(
        ()=>{
            FilmesService.listar(
                firestoreDb,
                (filmes) => {
                    
                    const compararPorNota = (a, b) => b.nota - a.nota;
                    setPopulares2(filmes.sort(compararPorNota));
                    filmes.map((filme, index) => {
                      
                      buscarFilme(filme.movieId)
                        .then(filme2 => { 
                          filme2.nota = filme.nota
                          setLista(oldArray => [...oldArray, filme2]);
                          
                        })

                    })

                }
            )
            
        },
        []
    )
  
    return(
        <ScrollView horizontal={true} style={{flexDirection: "row", width:"100%",position:"static"}}>
            
            {lista.sort(compararPorNota).slice(0, 9).map((filme2,index) => {
              let contagem = index + 1;
              console.log(filme2)
                  return ( 
                    
                    <Pressable onPress={() => navigation.navigate("filme", { filme: filme2 })}>
                      
                      <Image
                        source={{
                          uri: `https://image.tmdb.org/t/p/original${filme2.poster_path}`,
                        }}
                        style={Styles.genero_img_recente}
                      />
                      <Text style={{color:"white",position:"absolute",bottom:0,fontSize:150,opacity:0.5}}>{contagem}</Text>
                    </Pressable>
                    
                ); 
                   
            })}
          
        </ScrollView>
    )
}

export default Populares