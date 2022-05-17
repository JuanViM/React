import Swal from 'sweetalert2';
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { FinishLoading, StartLoading } from "./ui";


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
        
        dispatch(StartLoading());

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then( ({user}) => {

          dispatch(
            login(user.uid, user.displayName));
            dispatch(FinishLoading());
        })
        .catch(e =>{
          console.log(e);
          dispatch(FinishLoading());
          Swal.fire("fail",e.message, "error");
        })
    }
    }

    export const startRegisterWithEmailPasswordName = (email,password,name) =>{
      return (dispatch) => {
        //para trabajar con autenticacion es firebase.auth
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then( async({user}) => {
         
          await user.updateProfile({displayName: name})
          

          dispatch(
            login(user.uid, user.displayName)
          )
        })
        .catch(e =>{
          console.log(e);
          Swal.fire("fail",e.message, "error");
        })
    }
  }

    export const startGoogleLogin =() =>{
     
      return (dispatch) =>{
        //todo esto va a retornar una promesa
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
          dispatch(
            login(user.uid, user.displayName)
          )
        });
        
      }
    }


    export const login = (uid, displayName) => ({
      type:types.login,
      payload: {
          uid,
          displayName
      
  } 
})

export const startLogout = () =>{
  //como tenemos que esperar a que esto se ejecute tenemos que hacerlo con un async
  return async(dispatch) => {
   await firebase.auth().signOut();

   dispatch(logout());
  }
}

export const logout = () => ({
  type: types.logout
})
