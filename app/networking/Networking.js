export default class Networking {

    static async _fetch(endpoint, method, body) {
        let headers = {'Content-Type': 'application/json'};

        let request = {
            method: method,
            headers: headers
        }

        if ( body !== null ) {
            if (method === Networking.GET) {

                endpoint += Networking.jsonToParameters(body)
            } else {

                request.body = JSON.stringify(body)
            }
        }


        return fetch(endpoint, request);
    }

    static async fetch(endpoint, method, body) {

        let response = await Networking._fetch(endpoint, method, body);

        console.log('response')
        console.log(response)

        let responseJSON = await response.json();

        if ( response.status < 300 && response.status >= 200 )
            return responseJSON;
        else
            throw Error(response.status);
    }

    static jsonToParameters = (params) => {

        let esc = encodeURIComponent;

        let query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');

        return "?" + query
    }
}

/* endpoints */
Networking.GOOGLE_MAPS = 'https://maps.googleapis.com/maps/api/geocode/json';

/* methods */
Networking.POST = 'POST';
Networking.GET = 'GET';
Networking.PUT = 'PUT';
Networking.DELETE = 'DELETE';

