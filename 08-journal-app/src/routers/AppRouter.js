import React, { useEffect, useState } from 'react';
import {
   BrowserRouter as Router,
    Switch,Route, Redirect
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase  } from "../firebase/firebaseConfig";
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();

    //vamos a crear ahora una bandera apra que nos avise si esta chequeado

    const [cheking, setcheking] = useState(true);

    //vamos a crear rutas publicas o privadas ahora

    const [isLoggedIn, setisLoggedIn] = useState(false);
    
    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
          //esto evalua que user tenga algo, sino es que es null y pasa al else
          if(user?.uid){
             dispatch(login(user.uid,user.displayName)); 
             setisLoggedIn(true);

          }else{
              setisLoggedIn(false);
          }
          setcheking(false);

      })
    }, [dispatch,setcheking,setisLoggedIn])

    if(cheking){
        return (
            <h1>Espere.....</h1>
        )
    }
    
  return (
   
        <Router>
            <div>
                {/* aqui vamos a tener dos rutas a las que apunta nuestra appRouter una a la auth y otra a la journal */}
                <Switch>

                <Route path="/auth"
                component={ AuthRouter}
                />
                
                <PrivateRoute 
                exact
                isAuthenticated = { isLoggedIn }
                path="/"
                component={ JournalScreen}
                />
                
                <Redirect to="/auth/login" />
                </Switch>
            </div>
            
        </Router>

    
  )
}
