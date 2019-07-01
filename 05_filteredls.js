// eslint-disable-next-line prefer-destructuring
const pathdir = process.argv[2];
const ext = `.${process.argv[3]}`;
const fs = require("fs");
const path = require("path");
fs.readdir(pathdir, (err, files) => {
    if(err){
        console.log("Error");
    }
    files.forEach((element) => {
        if(path.extname(element) === ext){
            console.log(element);
        }
    });
});