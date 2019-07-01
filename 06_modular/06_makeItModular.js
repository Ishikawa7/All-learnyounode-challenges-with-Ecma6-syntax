const myModule = require("./06_module.js");
const dir = process.argv[2];
const ext = process.argv[3];
myModule(dir, ext, (err, list) => {
    if (err) {
        console.error("There is an error:", err);
    }
    console.log(list.join("\n"));
});