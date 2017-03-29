require('log-timestamp');

var exec = require('child_process').exec;
var args = process.argv.slice(2);

if (args.length < 3) {
  console.error('\x1b[31m', 'Please provide paths to node_modules, the input and the output file');
} else {
  exec(`node ${args[0]}/.bin/browserify ${args[1]} -o ${args[2]}`, (err) => {
    if (err) {
      return console.error('\x1b[31m', err);
    }

    console.log('\x1b[32m', `JavaScript built to file ${args[2]}`);
  });
}
