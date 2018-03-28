const fs = require('fs');

exports.readDbFile = () => {
    let data = fs.readFileSync('./db.txt', 'utf8');
    let strArr = data.toString().split(',');
    return strArr.map((strNum) => parseInt(strNum));
}