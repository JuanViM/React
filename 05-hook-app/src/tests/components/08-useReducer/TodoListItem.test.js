import { shallow } from "enzyme/build";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('pruebas en <TodoListItem/>', () => { 

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(<TodoListItem 
    todo={demoTodos[0]}
    index={0}
    handleToggle={ handleToggle }
    handleDelete={ handleDelete }
    />);

    test('debe mostrarse correctamente', () => { 
        
        expect(wrapper).toMatchSnapshot();

     })

     test('Debe de llamar a la funcion handleDelete', () => { 
         
        wrapper.find("button").simulate("click");
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);

      })

      test('debe de llamar a la funcion handleToggle', () => { 
          
        wrapper.find("ptodo").simulate("click");
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);

       });

       test('debe de mostrar el texto correctamente', () => { 
           
        const p = wrapper.find("p");
        expect (p.text().trim()).toBe(`1. ${demoTodos[0].desc}`)

        });
 })