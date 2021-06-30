import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

import { shallow } from "enzyme";
import Login from "../components/Guest Pages/Authentications/Login";

describe('Email input', () => {
    it('should respond to change event and change the state of the Login Component', () => 
   {
    const wrapper = shallow(<Login/>);
    wrapper.find('#Email').simulate('change', {target: {name: 'Email', value: 
   'blah@gmail.com'}});
    expect(wrapper.state('Email')).toEqual('blah@gmail.com');
    })
})
   


   describe('Password input', () => {
    it('should respond to change event and change the state of the Login Component', () => 
   {
    const wrapper = shallow(<Login/>);
    wrapper.find('#Password').simulate('change', {target: {name: 'Password', value: 
   'cats'}});
    expect(wrapper.state('Password')).toEqual('cats');
    })
   })
   