const net = require("net");
//
const zeroFill = (i) => {
    if(i < 10){
        return `0${i}`;
    }

    return i;
};
const now = () => {
    const d = new Date();
    // eslint-disable-next-line max-len
    const date = `${d.getFullYear()}-${zeroFill(d.getMonth()+1)}-${zeroFill(d.getDate())} ${zeroFill(d.getHours())}:${zeroFill(d.getMinutes())}`;
    //

    return date;
};
const server = net.createServer((socket) => {
    socket.end(`${now()}\n`);
});
server.listen(Number(process.argv[2]));