// var pkgjson = require('./package.json');
 
// var config = {
//   pkg: pkgjson,
//   app: 'src',
//   dist: 'dist'
// }
 
// module.exports = function (grunt) {
 
//   // Configuration
//   grunt.initConfig({
//     config: config,
//     pkg: config.pkg,
//     bower: grunt.file.readJSON('./.bowerrc'),
//     copy: {
//       dist: {
//        files: [{
//          expand: true,
//          cwd: '<%= config.app %>/_lib/font-awesome',
//          src: 'css/font-awesome.min.css',
//          dest: '<%= config.dist %>'
//        },
//        {
//          expand: true,
//          cwd: '<%= config.app %>/_lib/font-awesome',
//          src: 'fonts/*',
//          dest: '<%= config.dist %>'
//        }]
//       }
//     },
//     uglify: {
//       options: {
//         banner: '/*! <%= pkg.name %> lib - v<%= pkg.version %> -' +
//           '<%= grunt.template.today("yyyy-mm-dd") %> */'
//       },
//       dist: {
//         files: {
//           '<%= config.dist %>/js/lib.min.js': [
//             '<%= bower.directory %>/jquery/jquery.js',
//             '<%= bower.directory %>/underscore/underscore.js',
//             '<%= bower.directory %>/requirejs/require.js',
//           ]
//         }
//       }
//     }
//   });
 
//   grunt.loadNpmTasks('grunt-contrib-copy');
//   grunt.loadNpmTasks('grunt-contrib-uglify');
//   grunt.loadNpmTasks('grunt-contrib-coffee');
 
//   grunt.registerTask('default', [
//     'copy',
//     'uglify'
//   ]);
// };


'use strict';
var packagejson = require('./package.json');
 
var config = {
  pkg: packagejson,
  app: 'src',
  dist: 'dist'
};

module.exports = function (grunt) {
 
  // Configuration
  grunt.initConfig({
    config: config,
    pkg: config.pkg,
    bower: grunt.file.readJSON('./.bowerrc'),

    coffee: {
      compile: {
        files: {
          'dist/<%= pkg.name %>.js': 'src/<%= pkg.name %>.coffee', // 1:1 compile
        }
      },
    },

    coffee_jshint: {
      build: ['<%= pkg.name %>.coffee'],
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      build: {
        src: '<%= config.dist %>/<%= pkg.name %>.js',
        dest: '<%= config.dist %>/<%= pkg.name %>.min.js'
      }
    },

    sass: {
      dist: {
        options: { 
          style: 'expanded'
        },
        files: {
          'dist/<%= pkg.name %>.css': 'src/<%= pkg.name %>.scss'
        }
      }
    }
  });
  
  grunt.registerTask('default', [
    'coffee_jshint',
    'coffee',
    'uglify',
    'sass'
  ]);
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-coffee-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
};