var fs = require('fs');
var data = 'Some data to write';

fs.writeFile(__dirname + '/foo.txt', data,{
    flag: 'wx'
},function (error) {
    if (error){
        return console.error(error.message);
    }
})