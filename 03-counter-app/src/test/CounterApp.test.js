import CounterApp from "../CounterApp";
import React from 'react';
import {shallow} from 'enzyme';


describe('Probando la prueba de counter app', () => { 
    
    //lod efinimos aqui para que pueda ser leido dentro de todos los text
    // para asi evitar repeticion de codigo
    let wrapper = shallow(<CounterApp />);;

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })

    test('Debe mostrar counterApp correctamente a traves de un snapshot', () => { 
           
        

        expect(wrapper).toMatchSnapshot();
     });

     test('Debe mostrar por defecto el valor de 100', () => { 
        
        const wrapper = shallow(<CounterApp value={100}/>);
        //guardamos en la variable defec lo que contenga el h2 dentro del documento
        // en este caso 100
        const defec = wrapper.find("h2").text();
        console.log(defec);
        expect(defec).toBe("100");

      });

      test('Debe de incrementar con el boton de +1', () => { 
        
        //para trabajar con los botones los encontrariamos segun su indice de aparicion
        const btn1 =  wrapper.find("button").at(0).simulate("click");
        console.log(btn1.html());
        
        const defec = wrapper.find("h2").text();

        expect(defec).toBe("11");


       });

       test('Debe resta 1', () => { 
        
        const btn2 =  wrapper.find("button").at(1).simulate("click");
        console.log(btn2.html());
        
        const defec = wrapper.find("h2").text();

        expect(defec).toBe("9");
        });

        test('El valor debe resetarse a 10', () => { 
            const wrapper = shallow(<CounterApp value={100}/>);
            const btn3 = wrapper.find("button").at(2).simulate("click");
            console.log(btn3);
            const defect = wrapper.find("h2").text();

            expect(defect).toBe("100");
         })

 })