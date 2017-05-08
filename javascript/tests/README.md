# Catchify JavaScript Tests

Ideally we should be writing tests for all modules in the [lib](../lib) directory. Tests are written with [Jasmine](https://jasmine.github.io/2.1/node.html) using Babel to shim in CLI es65 goodness so we can unit test the modules and [jsdom](https://github.com/tmpvar/jsdom) to mock a browser environment.

Have a look at the [config file](./jasmine.json) for more information on initial setup and the [dom.js](./specs/helpers/dom.js) file to see how we're mocking the environment.

All test specs should go in the [/specs](./specs) directory and have a name like so `${MODULE_NAME}.spec.js`.  Feel free to be as descriptive with your tests as possible with as many `describe('...` calls as you like.  Also ensure that all test cases use sentence case with full stop at the end.
