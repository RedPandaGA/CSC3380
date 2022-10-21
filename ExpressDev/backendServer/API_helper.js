const request = require('request');

module.exports = {
    callAPI : function(url) {
        return new Promise((resolve, reject) => {
            request(url, {json: true}, (err, res, body) => {
                if (err) {reject(err);}
                resolve(body);
            });
        });
    }
}