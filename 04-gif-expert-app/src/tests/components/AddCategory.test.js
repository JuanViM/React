import React from 'react';
import "@testing-library/jest-dom";
import {shallow} from "enzyme";
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas de AddCategory', () => { 
    
    const setCategories = jest.fn();
    let wrapper; //con esta linea evitamos que nos quite la ayuda
    beforeEach(() => {
        jest.clearAllMocks();
         wrapper = shallow( <AddCategory setCategories={ setCategories} /> );

    });

    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
     });

     test('debe de cambiar la caja de texto ', () => { 
        const input = wrapper.find("input");
        const value = "hola mundo";
        input.simulate("change",{target: {value}});
        
         expect(wrapper.find("p").text().trim() ).toBe(value);
      });

      test('No debe de postear la informacion onsubmit', () => { 
          
        wrapper.find("form").simulate("submit",{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
       });

       test('Debe de llamar el setcategoris y limpiar la caja de texto', () => { 
        
        const value = "hola mundo";
        //simular el inputchange
        wrapper.find("input").simulate("change", {target: {value}});
        //simular el submit
        wrapper.find("form").simulate("submit", {preventDefault(){}});
        //setCategories se debe haber llamado
        expect( setCategories ).toHaveBeenCalled();

        //el valor del input se limpio
        expect( wrapper.find("input").prop("value")).toBe("");

        })
 })