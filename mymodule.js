
var fs = require('fs')
var path = require('path')
module.exports = function(dirName, extension, callback){
    fs.readdir(dirName, function(err,list){
        if (err) return callback(err);
        else {
        list = list.filter(function(file){
            //console.log(path.extname(file).substr(1))
            
                //console.log(file)
                
                //console.log(extension)
                //console.log("Return True")
                //console.log(list)
                return path.extname(file).substr(1) === extension
            })
            //console.log(list)
            //console.log("Return Callback")
            return callback(null, list)
        }
        })
        //console.log("Hi")
    }
   


/*fs.readdir(pathname, function(err, files){
     if (err) {
        return console.log(err)
    }
    files.forEach(function(file){
        if (path.extname(file).substr(1) == ext){
        console.log(file)
        }
    })
})*/

