import React from 'react';
import {
   BrowserRouter as Router,
    Switch,Route, Redirect
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
   
        <Router>
            <div>
                {/* aqui vamos a tener dos rutas a las que apunta nuestra appRouter una a la auth y otra a la journal */}
                <Switch>
                <Route path="/auth"
                component={ AuthRouter}
                />
                
                <Route exact path="/"
                component={ JournalScreen}
                />
                
                <Redirect to="/auth/login" />
                </Switch>
            </div>
            
        </Router>

    
  )
}
