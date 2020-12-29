const buffer = Buffer.from('버퍼 바꾸기');
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const array = [ Buffer.from('zzz') , Buffer.from('zzz2') , Buffer.from('zzz3') , Buffer.from('zzz4') ]

const buffer2 = Buffer.concat(array);

console.log(buffer2.toString());

const fs = require('fs');

const readStream = fs.createReadStream('./read.txt', { highWaterMark : 16 });
const data = [];

readStream.on( 'data', (chunk) =>{
    data.push( chunk );
    console.log('chunk : ', chunk, chunk.length, chunk.toString());
})

readStream.on( 'end', ()=>{
    console.log(Buffer.concat(data).toString());
} )