const http = require("http");
let url = require("url");
const port = process.argv[2];
const parseTime = (time) => ({
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
});
const unixTime = (time) => ({"unixtime": time.getTime()});
const parseQuery = (urll) => {
    switch (urll.pathname) {
    case "/api/parsetime":
        return parseTime(new Date(url.query.iso));
    case "/api/unixtime":
        return unixTime(new Date(url.query.iso));
    default: return "please enter a valid endpoint url";
    }
};
http.createServer((request, response) => {
    if (request.method === "GET") {
        response.writeHead(200, {"Content-Type": "application/json"});
        url = url.parse(request.url, true);
        response.end(JSON.stringify(parseQuery(url)));
    } else {
        response.writeHead(405);
        response.end();
    }
}).listen(Number(port), () => {
    console.log("Server listening on http://localhost:%s", port);
});