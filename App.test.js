import React from 'react';
import { create, act } from 'react-test-renderer';

import App from './App';


//jest.mock("./app/navigations/Navigation", () => "BottomTabNavigator");

describe('<App />', () => {

    jest.useFakeTimers();

    it('has 1 child', () => {
        let tree
        act(() => { tree = create(<App />) })
        expect(tree.toJSON()).toMatchSnapshot();
    });
});