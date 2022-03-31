import { GifGrid } from "../../components/GifGrid";
import {shallow} from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import "@testing-library/jest-dom";
import { GifGridItem } from "../../components/GifGridItem";
jest.mock("../../hooks/useFetchGifs");


describe('Pruebas de GifGrid', () => { 
    
    const category = "One Punch";

    test('debe mostrar bien el snapshor', () => { 
        
        //vamos a falsear los datos
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        const wrapper = shallow( <GifGrid category = {category} />);
        expect(wrapper).toMatchSnapshot();

     });

     test('Debe de mostrar items cuando se carga imagenes useFetchGifs', () => { 
        
        const gifs = [{
            id:"ABC",
            url: "https://localhost/cualquier/cosa.jpg",
            title: "cualquier cosa",
        }]
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });
        const wrapper = shallow( <GifGrid category = {category} />);
        
        expect(wrapper.find("p").exists()).toBe(false);
        expect( wrapper.find("GifGridItem").length ).toBe( gifs.length);
      })
 })