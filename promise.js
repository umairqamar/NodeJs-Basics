var fs = require('fs');
var promise = new Promise(function (resolve,reject) {
    fs.readFile('README.txt', 'utf8', function (error, data) {
        if (error){
            return reject(error);
        }else{
            return resolve(data);
        }
    })
})

promise.then(function (result) {
    console.log(result);
    return "THE END";
},function (error) {
    console.error(error.message);
})