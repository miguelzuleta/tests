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

let testJSON = './structure/test-01/test-01.json';
// let testJSON = 'https://raw.githubusercontent.com/miguelzuleta/tests/node-file-structure/structure/test-01/test-01.json';

fetch(testJSON).then(jsonFile => {
    let data = JSON.parse(jsonFile);
    let root = data.root;
    let structure = data.structure;

    let fileStructure = (rootPath, structureObj) => {
        for (let folder in structureObj) {
            let subFolder = structureObj[folder];
            let isFolder = (folder.indexOf('.') < 0) && (typeof subFolder === 'object');
            let fileType = isFolder ? 'folder' : 'file';
            let newPath = `${rootPath}/${folder}`;

            if (fs.existsSync(newPath)) {
                console.log(`${fileType} "${folder}" already exists. Skipping...`);

                if (isFolder) {
                    fileStructure(newPath, subFolder);
                }
            } else {
                if (isFolder) {
                    console.log(`Creating ${fileType} "${folder}"`);
                    
                    fs.mkdir(newPath, err => {
                        if (err) {
                            throw err;
                        }

                        fileStructure(newPath, subFolder);
                    })
                } else {
                    let fileType = subFolder.type;

                    let writeFile = fileContent => {
                        fs.writeFile(newPath, subFolder.content, err => {
                            if (err) {
                                throw err;
                            }

                            console.log(`Creating "${folder}"`);
                        });
                    };

                    if (fileType === 'text') {
                        writeFile(subFolder.content);
                    } else if (fileType === 'fetch') {
                        fetch(subFolder.content).then(fetchedContent => {
                             writeFile(fetchedContent);
                        });
                    } else {
                        throw `${fileType} is not a correct file type`;
                    }
                    
                }
            }
        }
    };

    fileStructure(root, structure);
});
