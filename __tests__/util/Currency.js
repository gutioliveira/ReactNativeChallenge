import 'react-native';
import React from 'react';
import { formatBrazillianPrice } from '../../app/util/Currency';

it('value to be formated', () => {

    expect(formatBrazillianPrice(0.00)).toEqual("R$ 0,00")
});