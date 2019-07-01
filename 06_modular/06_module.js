const fs = require("fs");
const path = require("path");
const myModule = (pathdir, ext, callback) => {

    const filteredList = [];
    fs.readdir(pathdir, (err, files) => {
        if(err){
            return callback(err, null);
        }
        files.forEach((element) => {
            if(path.extname(element) === `.${ext}`){
                filteredList.push(element);
            }
        });

        return callback(null, filteredList);
    });
};
module.exports = myModule;