import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'



export const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);
//esto nos devolvera la localizacion en la que estamos
  const {pathname,search} =  useLocation();
//para guardar la ultima ruta en la que hemos estado usamos el location en el cual le decimos que en el localstore guarde esta ultima ruta

localStorage.setItem("lastPath",pathname + search);

  return user.logged ? children : <Navigate to="/login" />
}
