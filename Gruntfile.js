const grunt = require('grunt')

grunt.loadNpmTasks('grunt-text-replace')

grunt.initConfig({
  replace: {
    illustrator: {
      // directory svg file
      src: ['assets/svg-icon/*.svg'],
      // output after run task
      dest: 'dist/svg-icon/',
      replacements: [{
        // set prefix
        from: /id\=\"prefix_(.+?)\"/gi,
        // result replace
        to: function(matchedWord, index, fullText, regexMatches) {
          return 'class="'+ regexMatches[0].toLowerCase()+'"';
        }
      }],
    }
  }
})

grunt.registerTask('svgclean', [
  'replace:illustrator'
])