import {StyleSheet} from "react-native"



const Styles = StyleSheet.create ({
    background: {
        flex:1,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
    },
    grid: {
        flex:1,
        height:"89%",
        width:"89%",
        borderWidth: 1,
        // borderColor:"white",
        justifyContent:"space-between",
        alignSelf: "center",
        justifySelf: "center",
    },
    titulo: {
        fontSize:35,
    },
    texto:{
        marginBottom:30,
        alignSelf: "center"
    },
    logo:{
        marginTop:60,
        width:200,
        height:80,
        alignSelf: "center",
    },
    logoContainer:{
        flex:0,
        justifyContent:"center",
        alignItems:"center"
    },
    form:{
        
    },
    socialMedia:{
        flex:0,
        width:"50%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignSelf: "center",
        

    },
    icon:{
        width:30,
        height:30
    },
    input: {
        height: 40,
        marginTop:30,
        borderWidth: 1,
        borderColor:"#BFBFBF",
        color:"white",
        padding: 10,
        borderRadius:10
    },
    button: {
        marginTop:30,
        backgroundColor:"white",
        color:"black",
        borderRadius:15,
        width:"100%",
        height:45,
        alignSelf: "center",
        justifyContent:"center",
        alignItems:"center"

    }
})

export default Styles