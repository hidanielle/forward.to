module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'app/assets/css/app.css': 'app/assets/css/app.scss'       // 'destination': 'source'
        }
      }
    },

    autoprefixer: {
      // prefix the specified file
      single_file: {
        options: {
          
        },
        src: 'app/assets/css/app.css',
        dest: 'app/assets/css/app.css'
      },
    },

    watch: {
      options: { livereload: true },
      css: {
        files: ['app/assets/css/app.scss'],
        tasks: ['sass', 'autoprefixer']
      }
    } 

  });

  // Load the plugin that provides the "uglify" task.

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['css', 'watch']);
  // All CSS
  grunt.registerTask( 'css', [ 'sass', 'autoprefixer' ] );
 

};