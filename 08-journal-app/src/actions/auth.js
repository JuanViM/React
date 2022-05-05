import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";


    //podemos hacer la forma corta tambien, esta seria la forma larga
    // export const login = (uid, displayName) => {
    //     //podemos hacer la forma corta tambien, esta seria la forma larga
    
        
    //   return {
    //       type:types.login,
    //       payload: {
    //           uid,
    //           displayName
    //       }
    //   } 
    // }

    //esta seria la forma corta

    export const startLoginEmailPassword = (email, password) =>{
      //esta funcion va a regresar un callback lo que quiere decir que la funcion no se va a ejecutar hasta que se complete la tarea asignada
      return (dispatch)=> {

        
        setTimeout(() => {

          //la funcion dispatch es una función que acepta una acción o una acción asíncrona; entonces puede o no despachar una o más acciones al store
          dispatch( login(123,"pedro"));
        }, 3500);
      }
    }

    export const startGoogleLogin =() =>{
     
      return (dispatch) =>{
        //todo esto va a retornar una promesa
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(userCre => {
          console.log(userCre)
        })
        
      }
    }


    export const login = (uid, displayName) => ({
      type:types.login,
      payload: {
          uid,
          displayName
      
  } 
})
