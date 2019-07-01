const http = require("http");
const results = [];
let count = 0;
//
const printResults = () => {
    for(let i=0; i<3; i++){
        console.log(results[i]);
    }
};
//
const httpGet = (url, index) => {
    http.get(url, (response) => {
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });
        response.on("end", () => {
            results[index] = body;
            if(count === 2){
                printResults();
            }else{
                count += 1;
            }
        });
    });
};
for(let i=0; i<3; i++){
    httpGet(process.argv[2+i], i);
}