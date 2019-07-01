const firstPar = 2;
const filePath = process.argv[firstPar].toString();
const fs = require("fs");
// eslint-disable-next-line no-sync
const text = fs.readFileSync(filePath).toString();
const lines = text.split("\n").length;
console.log(lines - 1);