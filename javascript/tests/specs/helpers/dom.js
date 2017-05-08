const assert = require('assert');
const jsdom = require('jsdom');
const fs = require('fs');
const path = require('path');

beforeAll(function (done) {
  jsdom.env(
    '<p>Boom</p>',
    ['http://code.jquery.com/jquery.js'],
    function (err, window) {
      assert.equal(null, err);

      global.window = window;
      global.document = window.document;
      global.$ = window.jQuery;

      $.expr.pseudos.hidden = function(elem) {
        return elem.style.display === 'none';
      }

      fs.readFile(path.join(__dirname, '/../../../../build/styles.css'), 'utf8', function(err, data) {
        $('head').append('<style type="text/css">');
        $('style').html(data);
        done();
      });
    }
  );
});
