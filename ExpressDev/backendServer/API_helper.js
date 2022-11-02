import * as request from 'request'
//const request = require('request');

export function callAPI(url) {
    return new Promise((resolve, reject) => {
        request(url, {json: true}, (err, res, body) => {
            if (err) {reject(err);}
            resolve(body);
        });
    });
}