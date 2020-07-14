# Catchify

![Build Status](https://travis-ci.org/catchdigital/catchify.svg?branch=master)

A solid and consistent starting point for CSS and JavaScript.

## Installation
**Jump to 'Usage' below for a quicker way to start** or install using `npm` into your existing project like so:

```
npm install catchify-core --save
```

_TODO: Update all the following lines_

## Usage
1. Copy the contents of the [/example](./example) directory into your project
2. Rename the [example package.json](./example/package.json) file accordingly
3. `npm install` to install dependencies
4. Create things 💥

💡 Usage is intended using source es6 JS and SCSS.  The above steps will get you in a position to start using these core elements straight away.

## Scripts
Scripts have been added and wired up in the [example package.json](./example/package.json) file as long as you keep the same directory structure.

To watch and build as you develop install this watcher utility:
```
npm install -g watch
```

With `watch` available globally, you can simply run any of the `watch` commands below

### CSS
To build CSS once
```
npm run build:css
```

To watch and build CSS whilst developing
```
watch 'npm run build:css' ./sass
```

### JS
To build JS once
```
npm run build:js
```

To watch and build JS whilst developing
```
watch 'npm run build:js' ./js
```

### Format
To format JS once
```
npm run format
```

💡 Formatting code will change the source file to ensure all code is formatted similarly.  This will affect committed code in most cases so it's a really good idea to run `npm run format` or `npm run build` prior to commiting to ensure that formatting changes won't require a follow up commit.  See below for more info on formatting.

## Formatting / Linting
Catchify now relies on [Prettier](https://github.com/prettier/prettier) which is an opinionated code formatter.  Rather than simply flagging coding standard violations (quote styles, trailing commas, semi colons, line lengths etc) it simply goes in and changes them.  It's strict and unforgiving at first, but it's the most frustration free way to ensure JS code is consistent across projects and developers.

## Running Fractal

### Running dev version
We got a script to run fractal while developing catchify.

Run `npm run watch:fractal` from the root to work on it.

### Running static version
To test the static version of fractal and see how will it look once is deployed, you can do the following:

* Build the static version of fractal: `npm run fractal:build`
* Run it locally: `docker run --rm -v $(pwd)/docroot:/usr/share/nginx/html:ro -p 80:80 nginx`
* You should see it your browser on `http://localhost`
