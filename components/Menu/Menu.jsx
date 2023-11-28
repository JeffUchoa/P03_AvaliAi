import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Pesquisar from "../Pesquisar/Pesquisar";
import Filme from "../Filme/Filme";
import Carrosel from "../Home/Carrosel";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const homeName = "Carrosel";
const detailsName = "Pesquisar";
const settingsName = "Settings";


const Menu = () => {
    return (
        <NavigationContainer>
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

            </Tab.Navigator>
            


        </NavigationContainer>
    )
}

export default Menu