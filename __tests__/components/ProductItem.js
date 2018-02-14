import 'react-native';
import React from 'react';
import ProductItem from '../../app/components/productItem';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {

    const tree = renderer.create(
        <ProductItem product={{title: 'test', imageUrl: 'url', price: 0.0}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});