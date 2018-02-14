import 'react-native';
import React from 'react';
import GraphQL from '../../app/networking/GraphQL';

// Note: test renderer must be required after react-native.

it('should get categories', () => {
    expect.assertions(1);
    return GraphQL.query(GraphQL.ALL_CATEGORIES_SEARCH).then((res) => {
        expect( res.hasOwnProperty("allCategory") ).toEqual(true)
    });
});

it('should get invalid product', () => {
    expect.assertions(1);
    return GraphQL.query(GraphQL.POC_CATEGORY_SEARCH, GraphQL.POC_CATEGORY_SEARCH_ARGS(-1)).then((res) => {
        expect( res.poc ).toEqual(null)
    });
});

it('should get valid product', () => {
    expect.assertions(1);
    return GraphQL.query(GraphQL.POC_CATEGORY_SEARCH, GraphQL.POC_CATEGORY_SEARCH_ARGS(243)).then((res) => {
        expect( res.poc ).toBeInstanceOf(Object)
    });
});

it('should get poc', () => {
    expect.assertions(1);
    return GraphQL.query(GraphQL.POC_SEARCH_METHOD, GraphQL.POC_SEARCH_METHOD_ARGS("-23.632919", "-46.699453")).then((res) => {
        expect( res.pocSearch ).toBeInstanceOf(Object)
    });
});




