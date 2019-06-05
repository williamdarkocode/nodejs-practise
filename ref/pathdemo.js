// const path = require('path');

// //base file name
// console.log(path.basename(__filename));

// // dir name
// console.log(path.dirname(__filename));

// // file extension
// console.log(path.extname(__filename));

// //create path object
// console.log(path.parse(__filename));

// //concatenate paths
// console.log(path.join(__dirname, 'test', 'hello.html'));


// file system module

// create folder

const fs = require('fs');
const path = require('path');

// fs.mkdir by defualt is async, and takes callback

// fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
//     if(err) {
//         throw new Error(err);
//     }
// });


// create and write to file
// fs.mkdir(path.join(__dirname, '/test'), {}, (err)=> {
//     if(err) {
//         throw new Error(err);
//     }
// });

// writeFile overwrites what ever is already in the file we're writing to
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello World", (err) => {
    if(err) {
        throw new Error(err);
    }
    else {
// if we don't want to override the current state of the file we're writing to, we'd want to use fs.appendFile
        fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " Bluudclarrt pussio!", (err) => {
            if(err) {
                throw new Error(err);
            }
        });

        fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
            if(err) {
                throw new Error(err);
            }
            else {
                console.log(data);
                fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloWorld.txt'), (err)=> {
                    if(err) {
                        throw new Error(err);
                    }
                    else {
                        console.log('file renamed...');
                    }
                });
            }
        });

        
    }
});

// reading file as utf8 to get actual content instead of buffer


// fs.readFileSync(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) {
//         throw new Error(err);
//     }
//     else {
//         console.log(data);
//     }
// })

// renaming file

// when not in async, meaning if it runs at the same time as
// function above, it just recrates a new one with specified name.
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloWorld.txt'), (err)=> {
//     if(err) {
//         throw new Error(err);
//     }
//     else {
//         console.log('file renamed...');
//     }
// });


