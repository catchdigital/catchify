const assert = require('assert');
const jsdom = require('jsdom');
const fs = require('fs');
const path = require('path');

beforeAll(done => {
  jsdom.env('<p>Boom</p>', ['http://code.jquery.com/jquery.js'], (
    err,
    window,
  ) => {
    assert.equal(null, err);

    global.window = window;
    global.document = window.document;
    global.jQuery = window.jQuery;
    global.$ = window.jQuery;

    $.expr.pseudos.hidden = elem => {
      return elem.style.display === 'none';
    };

    fs.readFile(
      path.join(__dirname, '/../../../../dist/styles.css'),
      'utf8',
      (err, data) => {
        $('head').append('<style type="text/css">');
        $('style').html(data);
        done();
      },
    );
  });
});
