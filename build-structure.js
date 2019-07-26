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

let buildFileStructure = json => {
    return new Promise(resolve => {
        fetch(json).then(jsonFile => {
            let data = JSON.parse(jsonFile);
            let fileCount = {
                fromFolders: 0,
                writtenFiles: 0
            };

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
                                if (err) throw err;

                                let fileCountInFolder = Object.keys(subFolder).filter(file => {
                                    return file.indexOf('.') > 0;
                                }).length;

                                fileCount.fromFolders += fileCountInFolder;

                                fileStructure(newPath, subFolder);
                            })
                        } else {
                            let writeFile = fileContent => {
                                fs.writeFile(newPath, fileContent, err => {
                                    if (err) throw err;

                                    fileCount.writtenFiles++;

                                    console.log(`Creating ${fileType} "${folder}"`);

                                    if (fileCount.fromFolders === fileCount.writtenFiles) {
                                        resolve();
                                    }
                                });
                            };

                            if (subFolder.hasOwnProperty('remote')) {
                                fetch(subFolder.content).then(fetchedContent => {
                                    writeFile(fetchedContent);
                                });
                            } else {
                                writeFile(subFolder.content);
                            }
                            
                        }
                    }
                }
            };

            fileStructure(__dirname, data);
        });
    });
}

buildFileStructure(`./test-01.json`).then(() => {
    console.log('DONE!')
});
