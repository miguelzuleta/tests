let fs = require('fs');
let https = require('https');

let fetch = url => {
    let isURL = (url.indexOf('http') === 0);

    return new Promise(resolve => {
        if (isURL) {
            let dataStr = '';

            https.get(url, response => {
                response.on('data', strBlock => {
                    dataStr += strBlock;
                });

                response.on('end', () => {
                    resolve(dataStr);
                });
            });
        } else {
            fs.readFile(url, 'utf8', (err, data) => {
                resolve(data);
            })
        }
    });
};

fetch('./structure/test-01/test-01.json').then(data => {
    console.log(JSON.parse(data));
});

fetch('https://miguelzuleta.com/data.json').then(data => {
    console.log(JSON.parse(data));
});

fetch('https://jsonplaceholder.typicode.com/comments').then(data => {
    console.log(JSON.parse(data));
});