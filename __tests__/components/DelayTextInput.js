import 'react-native';
import React from 'react';
import DelayTextInput from '../../app/components/delayTextInput';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {

    const tree = renderer.create(
        <DelayTextInput />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});


