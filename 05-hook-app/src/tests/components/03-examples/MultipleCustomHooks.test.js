import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"

import { useFetch } from "../../../hook/useFetch";
//vamos a introducir un mock
jest.mock("../../../hook/useFetch");


describe('Pruebas en <MultipleCustomHooks />', () => {

  

    test('debe mostrarse correctamente', () => {

        //esto es el mockeo del useFecht
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: true
        })

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();


    })

    test('Debe de mostrar la informacion', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'hola mundo'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />);
        expect( wrapper.find(".alert").exists()).toBe(false);
        expect( wrapper.find(".mb-0").text().trim()).toBe("hola mundo");
        expect( wrapper.find(".footer").text().trim()).toBe("Fernando");
    })
})