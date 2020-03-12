import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Card from './Card'

describe('Card component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card
            key='0'
            title='Test title'
            content='Test content'
        />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Card key='0' title='Test title' content='Test content' />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});