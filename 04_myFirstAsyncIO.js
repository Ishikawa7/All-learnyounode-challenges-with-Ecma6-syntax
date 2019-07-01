const firstPar = 2;
const filePath = process.argv[firstPar].toString();
const fs = require("fs");
// eslint-disable-next-line no-sync
fs.readFile(filePath, (error, data) => {
    const lines = data.toString().split("\n").length;
    console.log(lines - 1);
});