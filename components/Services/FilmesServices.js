import { getDocs, collection, addDoc } from "firebase/firestore"

class FilmesServices {

    static listar = (firestoreDb,callback) => {
        getDocs(collection(firestoreDb,"filmes"))
        .then(
            (snapshot)=>{
                const filmes = []
                snapshot.forEach(
                    (document)=>{
                        const id = document.id
                        const {movieId,nota} = document.data()
                        filmes.push({id,movieId,nota})
                    }//document
                )//foreach
                callback(filmes)
            }//snapshot
        )//then
        .catch(error=>console.log(error))
    }

    static criar = (firestoreDb,callback,filmes) => {
        addDoc(collection(firestoreDb,"filmes"),filmes)
        .then(
            (docRef) => {
                callback(docRef.id)
            }
        )
        .catch(error=>console.log(error))
    }

    static listarAvaliacoes = (firestoreDb,callback) => {
        getDocs(collection(firestoreDb,"filmes").document("avaliacoes"))
        .then(
            (snapshot)=>{
                const filmes = []
                snapshot.forEach(
                    (document)=>{
                        const id = document.id
                        const {comentario,nota,userId} = document.data()
                        filmes.push({id,userId,nota,comentario})
                    }//document
                )//foreach
                callback(filmes)
            }//snapshot
        )//then
        .catch(error=>console.log(error))
    }


}

export default FilmesServices