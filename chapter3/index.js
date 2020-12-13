const http = require('http');
http.createServer((req,res) => {
    res.end('dddd');
}).listen(8000, ()=>{
    console.log('시작!!');
})