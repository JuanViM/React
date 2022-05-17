import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/UseForm'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, uiRemoveError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
  
    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);
   

  //vamos a proceder a realizar el registro mediante el formulario
 
  
    const [formValues,handleInputChange] = useForm({
        name:"Hernando!",
        email:"nando@gmail.com",
        password: "12345",
        password2:"12345",
    })
 //del form values vamos a extraer todo esto
    const {name,email,password,password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        //si el formulario es correcto vamos a guardarlo en firebase
        if(isFormValid() ){
            dispatch(startRegisterWithEmailPasswordName(email,password,name));
        }
        
    }

    const isFormValid = () => {
        
        if(name.trim().length === 0) {
            dispatch(setError("Name es obligatorio"));
            
            return false;
        }else if (!validator.isEmail( email )) {
            dispatch(setError("email is not valid"));
            
            return false;    
        }else if (password !== password2 || password.length < 5){
            dispatch(setError("la contraseña deberia ser igual que la anterior y mayor a 5 "));
            return false;
        }
        dispatch(uiRemoveError());
        return true;
    }
  
    return (
    

<>
<h3 className='auth__title'>Register</h3>

<form onSubmit={handleRegister}>

        {   
            msgError && (
            <div className='auth__alert-error'>

        {msgError}

        </div>)}
<input
        type="text"
        placeholder='Name'
        name='name'
        className='auth__input'
        autoComplete='off'
        value={name}
        //sino le pongo el onchange no me deja cambiar el formulario.
        onChange={handleInputChange}
    />


    <input
        type="text"
        placeholder='Email'
        name='email'
        className='auth__input'
        autoComplete='off'
        value={email}
        //sino le pongo el onchange no me deja cambiar el formulario.
        onChange={handleInputChange}
    />

    <input
        type="password"
        placeholder='password'
        name='password'
        className='auth__input'
        value={password}
        //sino le pongo el onchange no me deja cambiar el formulario.
        onChange={handleInputChange}

    />

<input
        type="password"
        placeholder='confirm password'
        name='password2'
        className='auth__input'
        value={password2}
        //sino le pongo el onchange no me deja cambiar el formulario.
        onChange={handleInputChange}
    />

    <button
    
        type='submit'
        className='btn btn-primary btn-block mb-5'
    >
        Register
    </button>

    
    
    <Link 
    className='link'
    to="/auth/login">
    Already registered?
    </Link>

</form>
</>
  )
}
