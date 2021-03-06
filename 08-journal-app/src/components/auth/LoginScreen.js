import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/UseForm';

export const LoginScreen = () => {
    
    //ahora vamos a hacer un dispatch para eso redux nos genera un hooks
    //se usa para hacer dispatch de acciones

    const dispatch = useDispatch();

    const {loading} = useSelector(state => state.ui);
    
    const [ formValues,handleInputChange] = useForm({
        email: "nando@gmail.com",
        password:"123456"
    });

    const { email, password } = formValues;

    const handleLogin= (e) => {
        e.preventDefault(); //con esto editamos la propagacion del formulario
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin());
    }
     

    return (
        <>
            <h3 className='auth__title'>Login</h3>

           

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder='Email'
                    name='email'
                    className='auth__input'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder='password'
                    name='password'
                    className='auth__input'
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                
                    type='submit'
                    className='btn btn-primary btn-block'
                    disabled={loading}
                >
                    Login
                </button>

                
                <div className='auth__social-networks'>
                    <p>Login con red social</p>
                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link 
                className='link'
                to="/auth/register">
                Create a new account
                </Link>

            </form>
        </>
    )
}
