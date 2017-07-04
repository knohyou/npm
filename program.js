
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
/*var fs = require('fs')
var fileName = process.argv[2];

fs.readFile(fileName, function (err, fileContents){
    if (err) {
        console.log(err)
    }
    var lines = fileContents.toString().split('\n').length - 1;
    console.log(lines)
})
*/

/*
fs.readFile(fileName, 'utf8', function doneReading(err, fileContents) {
    var lines = fileContents.toString().split('\n').length-1;
    console.log(lines)
});
*/


// Fiiltered LS 
/*
var fs = require('fs')
var path = require('path')
//console.log(process.argv)
var pathname = process.argv[2]
//console.log(pathname.substr(1))
var ext = process.argv[3]
//console.log("path: " + pathname)
//console.log("ext: " + ext)
fs.readdir(pathname, function(err, list){
    //if (path.extname(list) = ext)
    for (i=0;i<list.length;i++){
        //console.log(list[i])
        //console.log(list[i].slice(1,path.extname(list[i]).length))
        //console.log(path.extname(list[i]).substr(1))
        if (path.extname(list[i]).substr(1) == ext) {
            console.log(list[i])
        }
    }
})
*/

/*var fs = require('fs')
var path = require('path')
var pathname = process.argv[2]
var ext = process.argv[3]

fs.readdir(pathname, function(err, files){
    if (err) {
        return console.log(err)
    }
    files.forEach(function(file){
        if (path.extname(file).substr(1) == ext){
        console.log(file)
        }
    })
})*/

// Lession 6 Module 
/*
//var fs = require('fs')
//var path = require('path')
//console.log(process.argv)
var dirName = process.argv[2]
//var dirName = '/hi/'
var extension = process.argv[3]
// Learning about Modules
var mymodule = require('./mymodule.js')
//console.log(mymodule.addition(1,2))
//console.log(dirName, extension, 10 )
//console.log(extension)

var callback = function(err, list){
    if (err) throw err;
    //console.log(list)
    list.forEach(function(file){
        console.log(file)
    })    
}
mymodule(dirName, extension, callback)
*/

/*
// Lession 8 HTTP 
// Goal: Perform HTTP Get request
// Write String Contents of each "data" event on the console

var http = require('http')
var website = process.argv[2];
//console.log(process.argv);

http.get(website, callback)

function callback (response) {
    //console.log(response)
    response.on("data",function(data){
        console.log(data.toString())
    })
}

//setEncoding()
*/

/*
// Lession 8: HTTP Collect
// Goal: Collect all data from server and write two lines to console
// First line: integer - number of characters from server
// Second Line: complete String of characters 

var http = require('http')
var website = process.argv[2]
var bl = require('bl')
var content  = []
http.get(website, function(response){
    //content = response.on("data",function(data){
        //console.log(data.toString())
        //console.log(typeof(data.toString()))
        //content.push(data.toString())
        //console.log(content)
        //console.log(data.length)
    //})
    //console.log(content)
    //console.log(content.length)
    response.pipe(bl(function(err,data){
        console.log(data.toString().length)
        console.log(data.toString())
    }))
    
} )
*/

/*
// Lession 9: Juggling Async
// Goal: Output the string from the three URLS

var http = require('http')
var bl = require('bl')
var count = 0
var results = []

function printResult(){
    for (var i=0; i<3; i++)
    //console.log(i)
    console.log(results[i])
}

function httpGet(index){
http.get(process.argv[2 + index], function(response){
    //console.log(response)
    //console.log(process.argv[2 + index])
    //console.log(index)
    response.pipe(bl(function(err,data){
        //console.log(data.toString())
        results[index] = data.toString()
        count++
        
         if (count == 3)
        printResult()
        
    }))
   
})
}

for (var i=0; i<3; i++){
    httpGet(i)
}
*/

/*
// Exercise Time Server 10 
// Goal: 1) Server listen to TCP connections
// 2) write out current date
// 3) After sending string close connection 

var net = require('net')
//console.log(process.argv)
var serverHost = process.argv[2]

var server = net.createServer(function listener(socket){
    // Socket handling logic
    var date = new Date().toISOString().replace(/T/,' ').replace(/\..+/,'').substr(0,16) + '\n'
    //console.log(date)
    socket.write(date)
    //printDate = date.getFullYear().toString()+date.getMonth().toString+date.getDay().toString
    //console.log(socket)
    //date.getFullYear()
    //console.log(printDate)
    socket.end()
})

server.listen(serverHost)
*/

// Exercise 11: HTTP File Server
// Goal: Write HTTP Server serves same text file for each request it receives
// Server listen on port - !st Argument
// Location of the file to serve - 2nd command line argument
// fs.createReadStream() stream file contents to response

var http = require('http')
var bl = require('bl')
var fs = require('fs')
var website = process.argv[2]
var content = process.argv[3]
console.log(website)
console.log(content)

    

var server = http.createServer(function callback (request, response) {
    // request: fetch properties such as header 
    //http.get(website,function (response){
    //console.log(request)
    //console.log(response)
    //    response.pipe(bl(function(err,data){
    //    console.log(data.toString())
        //results[index] = data.toString()
        //count++
    //    }))
    //})
    //console.log(content)
    // response: sending data to client both header and body
    //.setHeader('Hi')
    readStream = fs.createReadStream(content).pipe(response)
    console.log(readStream)
    // Both request and response are Node streams
    //console.log(response)
    //response.end()
})

server.listen(website)