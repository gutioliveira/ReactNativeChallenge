import 'react-native';
import React from 'react';
import AddressList from '../../app/components/addressList';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {

    const tree = renderer.create(
        <AddressList onPress={() => {}} items={[]}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});


