import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useForm } from "../../hook/useForm"

describe('Pruebas en useForm', () => { 
    
    const initialForm = {
        name:"Juan",
        email:"juanillo21@gmail.com"
    }


    test('debe de regresar un formulario por defecto', () => { 
        const {result} = renderHook(()=> useForm(initialForm));
        //desestructuramos el array
        const [formValues,handleInputChange,reset] = result.current;
        
        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe("function");
        expect( typeof reset).toBe("function");
     })

     test('debe de cambiar el valor del formulario(cambiar name)', () => { 
        const {result} = renderHook(()=> useForm(initialForm));
        //desestructuramos el array
        const [ ,handleInputChange,] = result.current;

        act(()=>{
            handleInputChange({
                target:{
                    name:"name",
                    value:"Melilla"
                }
            });
        })
        const [formValues] = result.current;
        expect (formValues).toEqual({...initialForm,name:"Melilla"});

      })

      test('debe de reestablecer el formulario con RESET', () => { 

        const {result} = renderHook(()=> useForm(initialForm));
        //desestructuramos el array
        const [ ,handleInputChange,reset] = result.current;

        act(()=>{
            handleInputChange({
                target:{
                    name:"name",
                    value:"Melilla"
                }
            });
            reset();
        })
        const [formValues] = result.current;
        expect (formValues).toEqual(initialForm);
       })
 })