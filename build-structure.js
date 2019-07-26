let fs = require('fs');
let https = require('https');
let path = require('path');

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
            let imageFiles = ['png', 'jpg', 'jpeg', 'gif'];
            let fileCount = {
                fromFolders: 0,
                writtenFiles: 0
            };

            let fileStructure = (rootPath, structureObj) => {
                for (let finderItem in structureObj) {
                    let item = structureObj[finderItem];
                    let newPath = `${rootPath}/${finderItem}`;

                    let isFolder = (finderItem.indexOf('.') < 0) && (typeof item === 'object');
                    let fileType = isFolder ? 'folder' : 'file';

                    let fileCountInFolder = Object.keys(item).filter(file => {
                        return file.indexOf('.') > 0;
                    }).length;

                    if (fs.existsSync(newPath)) {
                        console.log(`${fileType} "${finderItem}" already exists. Skipping...`);

                        if (isFolder) {
                            fileCount.fromFolders += fileCountInFolder;
                            fileStructure(newPath, item);
                        } else {
                            fileCount.writtenFiles++;

                            if (fileCount.fromFolders === fileCount.writtenFiles) {
                                resolve();
                            }
                        }
                    } else {
                        if (isFolder) {
                            console.log(`Creating ${fileType} "${finderItem}"`);

                            fs.mkdir(newPath, err => {
                                if (err) throw err;

                                fileCount.fromFolders += fileCountInFolder;

                                fileStructure(newPath, item);
                            })
                        } else {
                            let isImage = imageFiles.includes(finderItem.split('.')[1]);

                            let createFile = fileContent => {
                                if (isImage) {
                                    console.log(`Creating image "${finderItem}"`);

                                    let inStream = fs.createReadStream(path.join(__dirname, fileContent));
                                    let outStream = fs.createWriteStream(newPath);

                                    inStream.pipe(outStream);
                                    inStream.on('close', () => {
                                        fileCount.writtenFiles++;
                                        if (fileCount.fromFolders === fileCount.writtenFiles) {
                                            resolve();
                                        }
                                    });
                                } else {
                                    fs.writeFile(newPath, fileContent, err => {
                                        if (err) throw err;

                                        fileCount.writtenFiles++;

                                        console.log(`Creating ${fileType} "${finderItem}"`);

                                        if (fileCount.fromFolders === fileCount.writtenFiles) {
                                            resolve();
                                        }
                                    });
                                }
                            };

                            if (item.hasOwnProperty('remote')) {
                                fetch(item.content).then(fetchedContent => {
                                    createFile(fetchedContent);
                                });
                            } else {
                                createFile(item.content);
                            }

                        }
                    }
                }
            };

            fileStructure(__dirname, data);
        });
    });
}

buildFileStructure(`./test-02.json`).then(() => {
    console.log('DONE!')
});
