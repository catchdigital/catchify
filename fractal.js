'use strict';

/*
* Require the path module
*/
const path = require('path');
const root = __dirname + '/framework'

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Catchify');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(root, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(root, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'dist'));

// Builder config
fractal.web.set('builder.dest', path.join(__dirname, '/docroot'));

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: "black",
    styles: [
      "default",
      "styles.css",
      "_base.css",
      "_buttons.css",
      "_tabs.css"
    ]
});

fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default
