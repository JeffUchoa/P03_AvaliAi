import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  grid: {
    flex: 1,
    height: "89%",
    width: "89%",
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "space-between",
    alignSelf: "center",
    justifySelf: "center",
  },
  grid_carrosel: {
    flex: 1,
    height: "89%",
    width: "89%",
    borderWidth: 1,
    // borderColor: "white",
    alignSelf: "center",
    justifySelf: "center",
  },
  titulo: {
    fontSize: 35,
  },
  texto: {
    marginBottom: 30,
    alignSelf: "center",
  },
  texto_categorias: {
    fontSize: 20,
    fontWeight: "bold",
  },
  categorias: {
    margin: 20,
    flexDirection: "row",
    alignSelf: "center",
    gap: 50,
  },
  genero: {
    alignSelf:"center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width:"100%",
    flexWrap:"wrap"
  },
  genero_img: {
    width: 100,
    height: 160,
    borderRadius:8,
  },
  rodape: {
    flex: 0,
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "blue",
  },
  logo: {
    marginTop: 60,
    width: 200,
    height: 80,
    alignSelf: "center",
  },
  logoContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {},
  socialMedia: {
    flex: 0,
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  rodape_icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    gap: 100,
  },
  seta: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-start",
  },
  icon: {
    width: 30,
    height: 30,
  },
  icon_carrosel: {
    width: 40,
    height: 40,
  },
  icon_voltar: {
    width: 20,
    height: 20,
    marginTop: 40,
  },
  input: {
    height: 40,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#BFBFBF",
    color: "white",
    padding: 10,
    borderRadius: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: "white",
    color: "black",
    borderRadius: 15,
    width: "100%",
    height: 45,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Styles;
