
const { odd, even } = require('./var');
//import { odd, even } from './var';

function checkOddString( num ){
    if(  num % 2 ){
        return odd;
    }

    return even;
}

module.exports = checkOddString;

//export default checkOddString;