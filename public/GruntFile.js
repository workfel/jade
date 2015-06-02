/**
 * Created by johan on 02/06/2015.
 */
module.exports = function(grunt) {

    require('load-grunt-config')(grunt);



    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};