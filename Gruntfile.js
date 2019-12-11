/*!
 * Mui's Gruntfile
 */

// Default:

// {
//     include: null,
//     exclude: null,
//     rootValue: 16,
//     unitPrecision: 5,
//     propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
//     selectorBlackList: [],
//     replace: true,
//     mediaQuery: false,
//     minPixelValue: 0,
//     rules: []
// }
// include (String|RegExp|Array<String|RegExp>) Files to include
// exclude (String|RegExp|Array<String|RegExp>) Files to exclude
// rootValue (Number) The root element font size.
// unitPrecision (Number) The decimal numbers to allow the REM units to grow to.
// propList (Array) The properties that can change from px to rem.
// Values need to be exact matches.
// Use wildcard * to enable all properties. Example: ['*']
// Use * at the start or end of a word. (['*position*'] will match background-position-y)
// Use ! to not match a property. Example: ['*', '!letter-spacing']
// Combine the "not" prefix with the other prefixes. Example: ['*', '!font*']
// selectorBlackList (Array) The selectors to ignore and leave as px.
// If value is string, it checks to see if selector contains the string.
// ['body'] will match .body-class
// If value is regexp, it checks to see if the selector matches the regexp.
// [/^body$/] will match body but not .body
// replace (Boolean) replaces rules containing rems instead of adding fallbacks.
// mediaQuery (Boolean) Allow px to be converted in media queries.
// minPixelValue (Number) Set the minimum pixel value to replace.
// rules: (Object) Supporting all the above parameters.

/* jshint node: true */
module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-postcss');
    // Project configuration.
    grunt.initConfig({
        postcss: {
            options: {
                processors: [
                    require('postcss-pxtorem-multi')({
                        include: null,
                        exclude: null,
                        rootValue: 100,
                        unitPrecision: 5,
                        propList: ['*'],
                        selectorBlackList: [],
                        replace: true,
                        mediaQuery: false,
                        minPixelValue: 1,
                        rules: [],
                    }),
                ],
            },
            dist: {
                src: './lib/mand-mobile.css',
                dest: './lib/mand-mobile.rem.css',
            },
        },
    });
    grunt.registerTask('default', ['postcss']);
};