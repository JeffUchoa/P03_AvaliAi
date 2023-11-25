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
  import Styles from "../../Style/Styles";


const Rodape = () => {
    return (
        <View style={Styles.rodape}>
            <View style={Styles.rodape_icons}>
                <Image
                    style={Styles.icon_carrosel}
                    source={require("../../../assets/home_full.png")}
                />
                <Image
                    style={Styles.icon_carrosel}
                    source={require("../../../assets/lupa.png")}
                />
                <Image
                    style={Styles.icon_carrosel}
                    source={require("../../../assets/person.png")}
                />
            </View>
        </View>
    )
}

export default Rodape