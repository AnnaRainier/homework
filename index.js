var fs = require('fs');
fs.appendFile('result.txt', '\nvasya', function () {
    console.log('file has been saved');
})
