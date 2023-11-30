import { getDocs, collection, addDoc,deleteDoc, updateDoc } from "firebase/firestore"
import { doc, getFirestore, query, where } from "firebase/firestore";

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

    static listarAvaliacoes = (firestoreDb, filmeId, callback) => {
        const avaliacoesCollectionRef = collection(firestoreDb, "filmes", "TxOqBG949UmFUSDZmboV", "avaliacoes");

        getDocs(avaliacoesCollectionRef)
            .then(
                (snapshot) => {
                    const avaliacoes = [];
                    snapshot.forEach(
                        (document) => {
                            const id = document.id;
                            const { usuarioId, nota,comentario,userId } = document.data();
                            avaliacoes.push({ id, usuarioId, nota,comentario,userId });
                        }
                    );
                    callback(avaliacoes);
                }
            )
            .catch(error => console.log(error));
    }

    static addAvaliacoes = (firestoreDb,callback,avaliacao) => {
        const avaliacoesCollectionRef = collection(firestoreDb, "filmes", "TxOqBG949UmFUSDZmboV", "avaliacoes");

        addDoc(avaliacoesCollectionRef,avaliacao)
            .then(
                (docRef) => {
                    console.log(docRef)
                    callback(docRef.id)
                }
                
            )
            .catch(error => console.log(error));
    }

    static deleteAvaliacao = (firestoreDb, avaliacaoId, callback) => {
        const avaliacaoRef = doc(firestoreDb, "filmes", "TxOqBG949UmFUSDZmboV", "avaliacoes", avaliacaoId);

        deleteDoc(avaliacaoRef)
            .then(() => {
                console.log("Avaliação deletada com sucesso!");
                callback();
            })
            .catch(error => console.error(error));
    }

        static updateAvaliacao = (firestoreDb, avaliacaoId, novosDados, callback) => {
            const avaliacaoRef = doc(firestoreDb, "filmes","TxOqBG949UmFUSDZmboV", "avaliacoes", avaliacaoId);
    
            updateDoc(avaliacaoRef, novosDados)
                .then(() => {
                    console.log("Avaliação atualizada com sucesso!");
                    callback();
                })
                .catch(error => console.error(error));
        }
    

}

export default FilmesServices