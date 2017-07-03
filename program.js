
// Baby Steps Code 
/*var processSum = 0; 
for (i = 2;i<process.argv.length; i++){
    processSum = processSum + Number(process.argv[i]);  
}
console.log(processSum) 
*/

// Node Code Synchronous
/* var fs = require('fs')
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length-1
console.log(lines) 
*/

// Node Asynchronous
var fs = require('fs')
fs.readFiles()