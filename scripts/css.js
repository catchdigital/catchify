require('log-timestamp');

const exec = require('child_process').exec;
const args = process.argv.slice(2);

if (args.length < 4) {
  console.error('\x1b[31m', 'Please provide paths to node_modules, the input and the output directory and output file');
} else {
  exec(`npx sass -I ${args[0]} ${args[1]}:${args[3]}`, (err) => {
    if (err) {
      return console.error('\x1b[31m', err);
    }

    console.log('\x1b[32m', `CSS built to file ${args[3]}`);
  });
}
