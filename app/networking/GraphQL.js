import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const client = new Lokka({
    transport: new Transport('https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql/')
});

export default class GraphQL {

    static async query(query, args){

        return client.query(query, args);
    }
}

// Queries
GraphQL.POC_SEARCH_METHOD = 'query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {\n' +
    '  pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {\n' +
    '    __typename\n' +
    '    id\n' +
    '    status\n' +
    '    tradingName\n' +
    '    officialName\n' +
    '    deliveryTypes {\n' +
    '      __typename\n' +
    '      pocDeliveryTypeId\n' +
    '      deliveryTypeId\n' +
    '      price\n' +
    '      title\n' +
    '      subtitle\n' +
    '      active\n' +
    '    }\n' +
    '    paymentMethods {\n' +
    '      __typename\n' +
    '      pocPaymentMethodId\n' +
    '      paymentMethodId\n' +
    '      active\n' +
    '      title\n' +
    '      subtitle\n' +
    '    }\n' +
    '    pocWorkDay {\n' +
    '      __typename\n' +
    '      weekDay\n' +
    '      active\n' +
    '      workingInterval {\n' +
    '        __typename\n' +
    '        openingTime\n' +
    '        closingTime\n' +
    '      }\n' +
    '    }\n' +
    '    address {\n' +
    '      __typename\n' +
    '      address1\n' +
    '      address2\n' +
    '      number\n' +
    '      city\n' +
    '      province\n' +
    '      zip\n' +
    '      coordinates\n' +
    '    }\n' +
    '    phone {\n' +
    '      __typename\n' +
    '      phoneNumber\n' +
    '    }\n' +
    '  }\n' +
    '}\n';

GraphQL.POC_SEARCH_METHOD_ARGS = (lat, long, algorithm = "NEAREST", now= "2017-08-01T20:00:00.000Z") => {
    return {
        algorithm: algorithm,
        lat: lat,
        long: long,
        now: now
    }
};

GraphQL.POC_CATEGORY_SEARCH = 'query pocCategorySearch($id: ID!, $search: String!, $categoryId: Int!) {\n' +
    '  poc(id: $id) {\n' +
    '    products(categoryId: $categoryId, search: $search) {\n' +
    '      productVariants{\n' +
    '        title\n' +
    '        description\n' +
    '        imageUrl\n' +
    '        price\n' +
    '      }\n' +
    '    }\n' +
    '  }\n' +
    '}\n';

GraphQL.POC_CATEGORY_SEARCH_ARGS = (id, categoryId = 0, search = "") => {
    return {
        id: id,
        search: search,
        categoryId: categoryId
    }
};

GraphQL.ALL_CATEGORIES_SEARCH = 'query allCategoriesSearch {\n' +
    '  allCategory{\n' +
    '    title\n' +
    '    id\n' +
    '  }\n' +
    '}\n';
