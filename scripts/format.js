require('log-timestamp');

var exec = require('child_process').exec;
var args = process.argv.slice(2);

if (args.length < 2) {
  console.error('\x1b[31m', 'Please provide paths to node_modules and the directory to format');
} else {
  exec(`node ${args[0]}/.bin/prettier --single-quote --trailing-comma=all --write ${args[1]}`, (err, stdout) => {
    if (err) {
      return console.error('\x1b[31m', err);
    }

    console.log('\x1b[32m', `JavaScript formatted in directory ${args[1]}`);
  });
}
