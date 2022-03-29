import React from 'react';
import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';

describe('Test de mi primer dcomponente PrimeraApp', () => { 
    
    // test('debe de mostrar el mensaje "Hola soy Goku"', () => { 

    //     const saludo = "Hola soy goku";

    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //     expect( getByText(saludo) ).toBeInTheDocument();


    //  })


    test('Debe mostrar <PrimeraApp /> correctamente', () => { 

        const saludo = "hola soy goku";

        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
       

     });

     test('debe de mostrar el subtitulo enviado por props', () => { 
         
        const saludo = "hola soy goku";

        const wrapper = shallow(
        <PrimeraApp 
        saludo={saludo}
        subtitulo={"Soy un subtitulo"}
        />);

        const textoParrafo = wrapper.find("p").text();
        console.log(textoParrafo);
        expect( textoParrafo).toBe("Soy un subtitulo");
      });

     
 });