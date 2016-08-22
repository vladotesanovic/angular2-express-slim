var SystemBuilder = require('systemjs-builder');
var argv = require('yargs').argv;
var builder = new SystemBuilder();

builder.loadConfig('./public/js/systemjs.config.js')
    .then(function(){
        var outputFile = argv.prod ? './public/js/bundle.min.js' : './public/js/bundle.js';
        return builder.buildStatic('app', outputFile, {
            minify: argv.prod,
            mangle: false,
            rollup: argv.prod
        });
    })
    .then(function() {
        console.log('bundle built successfully!');
    });