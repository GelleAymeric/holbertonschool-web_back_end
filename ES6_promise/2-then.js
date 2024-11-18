/* eslint-disable */

export default function handleResponseFromAPI(promise) {
    return promise
        .then(function(promise) {
            console.log('Got a response from the API');
        })
}