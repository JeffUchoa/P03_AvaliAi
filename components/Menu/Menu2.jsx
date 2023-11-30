import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Pesquisar from "../Pesquisar/Pesquisar";
import Filme from "../Filme/Filme";
import Carrosel from "../Home/Carrosel";
import Perfil from "../Perfil/Perfil";
import Populares from "../Filme/Populares";
import Login from "../Login/Login";
import CadastrarUsuario from "../Login/CadastrarUsuario";
import Avaliacao from "../Filme/Avaliação";
import Avaliar from "../Filme/Avaliar";
import Editar from "../Filme/Editar";


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


const homeName = "Carrosel";
const detailsName = "Pesquisar";
const settingsName = "Settings";



const MenuTab = () => {
    return (
        
            <Tab.Navigator
                initialRouteName={Carrosel}
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        backgroundColor: 'black',
                        height: 70,
                       
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === detailsName) {
                            iconName = focused ? 'search' : 'search-outline'; 

                        }else if (rn === "Perfil") {
                            iconName = focused ? 'person' : 'person-outline'; 

                        }
                        

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'green',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 }
                }}>
                
                <Tab.Screen options={{headerShown: false}} name={homeName} component={Carrosel} />
                <Tab.Screen options={{headerShown: false}} name={detailsName} component={Pesquisar} />
                <Tab.Screen options={{headerShown: false}} name="Perfil" component={Perfil} />
                

            </Tab.Navigator>
            


        
    )
}

const Menu = () => {
    return (
        <NavigationContainer>
            
            <Stack.Navigator>
                <Stack.Group>
                    {/* GRUPO DAS TELAS PRINCIPAIS */}
                    
                    <Stack.Screen options={{headerShown: false}} name="login" component={Login} />
                    <Stack.Screen options={{headerShown: false}} name="aa" component={MenuTab} />
                    <Stack.Screen options={{headerShown: false}} name="cadastrar" component={CadastrarUsuario} />
                    <Stack.Screen options={{headerShown: false}} name="populares" component={Populares} />
                    <Stack.Screen options={{headerShown: false}} name="pesquisar" component={Pesquisar} />
                    <Stack.Screen options={{headerShown: false}} name="filme" component={Filme} />
                    <Stack.Screen options={{headerShown: false}} name="home" component={Carrosel} />
                    
                </Stack.Group>

                <Stack.Group screenOptions={{ presentation: "modal" }}>
                    {/* GRUPO DOS MODAIS */}
                    <Stack.Screen options={{headerShown: false}} name="avaliar" component={Avaliar} />
                    <Stack.Screen options={{headerShown: false}} name="editar" component={Editar} />
                </Stack.Group>
            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default Menu
