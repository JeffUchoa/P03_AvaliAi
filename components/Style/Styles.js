import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  grid: {
    flex: 1,
    height: "89%",
    width: "89%",
    borderWidth: 1,
    // borderColor: "white",
    justifyContent: "space-between",
    alignSelf: "center",
    justifySelf: "center",
    flexDirection: "column",
  },
  grid_carrosel: {
    flex: 1,
    height: 200,
    width: "89%",
    borderWidth: 1,
    // borderColor: "white",
    alignSelf: "center",
    justifySelf: "center",
  },
  grid_modal: {
    width: "89%",
    borderWidth: 1,
    borderColor: "white",
    alignSelf: "center",
    justifySelf: "center",
    backgroundColor: "#0D0D0D",
    padding: 20,
    borderRadius: 22,
  },
  titulo: {
    fontSize: 35,
  },
  fonte: {
    fontSize: 25,
  },
  texto: {
    marginBottom: 30,
    alignSelf: "center",
  },
  texto_categorias: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
  categorias: {
    margin: 10,
    flexDirection: "row",
    alignSelf: "center",
    gap: 50,
  },
  genero: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
    flexWrap: "wrap",
  },
  generos: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "rgba(75, 75, 75, 0.5)",
    marginBottom: 20,
    gap: 21,
  },
  texto_generos: {
    fontSize: 15,
  },
  genero_img: {
    width: 100,
    height: 160,
    borderRadius: 8,
  },
  genero_img_recente: {
    width: 200,
    height: 320,
    borderRadius: 20,
    marginRight: 30,
  },
  pesquisar_img: {
    width: 100,
    height: 145,
    borderRadius: 8,
  },
  rodape: {
    flex: 0,
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    borderColor: "#00C47E",
    borderWidth: 3,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "black",
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
  icon_pesquisar: {
    width: 20,
    height: 20,
  },
  icon_save: {
    width: 20,
    height: 26,
  },
  icon_perfil: {
    width: 67,
    height: 67,
  },
  icon_star: {
    width: 25,
    height: 25,
  },
  img_fundo: {
    marginTop: 90,
    width: 354,
    height: 200,
    alignSelf: "center",
  },
  img_fundo2: {
    marginTop: 90,
    width: 354,
    height: 200,
    alignSelf: "center",
    backgroundSize:"cover",
    borderRadius:30
  },
  elenco: {
    width: 90,
    height: 90,
  },
  perfil: {
    width: 105,
    height: 105,
  },
  input: {
    height: 40,
    marginTop: 30,
    borderWidth: 2,
    borderColor: "#BFBFBF",
    color: "white",
    padding: 10,
    borderRadius: 14,
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
  pressable: {
    marginTop: 30,
    backgroundColor: "#00C47E",
    color: "black",
    borderRadius: 9,
    width: "35%",
    height: 35,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  mais: {
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: "#F2F2F2",
    color: "#F2F2F2",
    borderRadius: 12,
    width: "30%",
    height: 35,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#F2F2F2",
  },
});

export default Styles;
