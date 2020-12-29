const http = require('http');
const fs= require('fs').promises;

const server = http.createServer( async ( req, res ) =>{
    try {
        const data = await fs.readFile('./server.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    } catch (error) {
        
    }
});

server.listen(8000);

server.on('listening', ()=>{
    console.log('서버가 시작되었습니다.');
})

server.on('error', (error)=>{
    console.log(error);
})


