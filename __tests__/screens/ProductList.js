import 'react-native';
import React from 'react';
import ProductList from '../../app/screens/home/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <ProductList />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});




