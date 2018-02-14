import 'react-native';
import React from 'react';
import CategoryList from '../../app/components/categoryList';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {

    const tree = renderer.create(
        <CategoryList category={[{id: 0, title: 'hue'}]} onPress={()=>{}}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});