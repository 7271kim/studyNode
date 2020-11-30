const { odd, even }  = require('./var');
const checkNum = require('./func');

function checkString( str ){
    if( str.length %2 ){
        return odd;
    }
    return even;
}


console.log(checkString('zzzzzzzz'));
console.log(checkNum(10));

const os = require('os');

console.log('core-------------------');
console.log(os.cpus().length)