import React from 'react';
import { HooksApp } from '../HooksApp';
import { shallow } from "enzyme";

describe('Pruebas en hookApp', () => { 
    test('debe mostrarse correctamente', () => { 
        
        const wrapper = shallow(<HooksApp />);
        expect(wrapper).toMatchSnapshot();
    
        

     })
 })