require('log-timestamp');

const exec = require('child_process').exec;
const args = process.argv.slice(2);

if (args.length < 4) {
  console.error('\x1b[31m', 'Please provide paths to node_modules, the input and the output directory and output file');
} else {
  exec(`node ${args[0]}/.bin/node-sass ${args[1]} -o ${args[2]} --source-map true --include-path ${args[0]}`, (err) => {
    if (err) {
      return console.error('\x1b[31m', err);
    }

    console.log('\x1b[32m', `CSS built to file ${args[3]}`);
  });
}
