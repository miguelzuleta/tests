let fs = require('fs');
let https = require('https');
// let path = require('path');
// console.log(__dirname)

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

let testJSON = './structure/test-01/test-01.json';
// let testJSON = 'https://raw.githubusercontent.com/miguelzuleta/tests/node-file-structure/structure/test-01/test-01.json';

fetch(testJSON).then(jsonFile => {
    let data = JSON.parse(jsonFile);
    let root = data.root;
    let structure = data.structure;

    let fileStructure = (rootPath, structureObj) => {
        // console.log(data.root)
        // let newPath = rootPath;

        for (let folder in structureObj) {
            let subFolder = structureObj[folder];
            let isFolder = (folder.indexOf('.') < 0) && (typeof subFolder === 'object');
            // console.log(subFolder)
            let newPath = `${rootPath}/${folder}`;
            // console.log(newPath);

            if (isFolder) {
                console.log(newPath)
                console.log(`FOLDER: ${folder}`);
                
                fs.mkdir(newPath, err => {
                    if (err) {
                        throw err;
                    } else {
                        fileStructure(newPath, subFolder);
                    }
                })
            } else {
                console.log(`FILE: ${folder}`);
                
            }
        }
    };

    fileStructure(root, structure);
});
