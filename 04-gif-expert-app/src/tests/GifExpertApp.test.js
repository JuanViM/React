import { GifExpertApp } from "../GifExpertApp";
import "@testing-library/jest-dom";
import {shallow} from "enzyme";



describe('Pruebas con el GifExpertApp', () => { 
    
    test('Prueba del snapshot', () => { 
        
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
     });

     test('Debe de mostrar una lista de categorias ', () => { 
         const categories = ["vegeta","one punch"];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect( wrapper).toMatchSnapshot();
        expect( wrapper.find("GifGrid").length ).toBe(categories.length);
        
        
      });
     
 })