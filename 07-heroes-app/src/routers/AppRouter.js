import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';

import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>



                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                }
                />
                {/* el PrivateRoute va a ser el que verifique si el usuario esta autenticado o no y si esta autenticado va a usar el componente DashboardRoutes */}
                <Route path='/*' element={<PrivateRoute> <DashboardRoutes /> </PrivateRoute>} />
                <Route path="/*" element={<DashboardRoutes />} />

            </Routes>
        </BrowserRouter>
    )
}
