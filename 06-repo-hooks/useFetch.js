import React, { useEffect, useRef, useState } from 'react'

//a este hook le va a entrar el url que introducira el usuario
export const useFetch = (url) => {

    //nos creamos una nueva variable con el useRef mediante la cual cuando el componente se llama
    //por primera vez es true por que se esta montando 
    const isMounted = useRef(true);
    //vamos a crearle un estato con el use state
    const [state, setState] = useState({ data: null, loading: true, error: null });

    //vamos a meter un useEffect que se cargue solo cuando se carga por primera vez
    useEffect(() => {
      
        //cuando este efecto se desmonte cambiaremos el valor mediante el return
        return () => {
            isMounted.current = false;
        }
      
    }, [])
    

    //cada vez que cambia el url vamos a recibir un efecto el cual se ejecutara solo cuando el url cambia
    //ya que lo expecificamos aqui (}, [url]))

    useEffect(() => {

        //podemos tambien resetear los valores del data y el loading a true para mostrar la barra de carga
        //llamando al setState y pasandole estos valores, una vez encuentre la url en la epticion fetch se cambiara automaticamente
        setState({ data: null, loading: true, error: null });
        //usamos el fetch para manejar las peticiones url y regresa una promesa
        fetch(url)
            //de la promesa vamos a extraer la respuesta y la pasamos a json

            .then(resp => resp.json())

            .then(data => {

                //aqui dentro ya tenemos la data y ahora llamamos al setState y vamos a establecer los cambios
                //primero el loading en false por que ya termino de cargar
                //error en null por que si llegamos aqui es que no hubo errores
                //la data va a ser igual a la data que recibimos del endpoint

                //vamos a hacer mas lento el setstate mediante un time out
                if(isMounted.current){
                    setState({
                        loading: false,
                        error: null,
                        data,
                    });
                }
                
            })
            .catch(()=>{
                setState({
                    data:null,
                    loading:false,
                    error:"no se pudo cargar la info"
                })
            })

    }, [url])
    //ahora vamos a retornar el state que seria {data: null, loading:true,error:null}

    return state;



}
