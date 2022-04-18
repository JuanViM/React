import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';
import { Navigate } from 'react-router-dom';



export const AppRouter = () => {


    return (
        <Router>
            <div>
                <NavBar />
                <div className='container'>
                    <Routes>
                        {/* En el path es la ruta la cual nosotros queremos que sea su ruta podemos por lo tanto
                    ponerle la que mas nos gusta o nos convenga.
                    Al ponerle exact lo que hacemos es que sea exactamente lo especificado en el path */}
                        <Route exact path='/home' element={<HomeScreen />} />
                        <Route exact path='/about' element={<AboutScreen />} />
                        <Route exact path='/login' element={<LoginScreen />} />

                    </Routes>
                </div>
            </div>
        </Router>
    )
}
