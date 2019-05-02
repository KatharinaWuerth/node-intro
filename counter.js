const fs = require('fs');

//const filepath = __dirname + '/counter.txt'       damit könnte ich es kürzer machen, wenn ich es mit const ersetze

function writeNum(num) {
  fs.writeFile(__dirname + '/counter.txt', num, err => {
    err && console.log('There was an error');
    console.log('File was written');
  });
}

fs.readFile(__dirname + '/counter.txt', 'utf8', (err, num) => {
  if (err) {
    writeNum(0);
  } else {
    writeNum(Number(num) + 1);
    console.log(Number(num) + 1);
  }
});
