const pluginRss = require("@11ty/eleventy-plugin-rss")
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const Terser = require('terser')

module.exports = function(config) {

  // A useful way to reference the context we are runing eleventy in
  // let env = process.env.ELEVENTY_ENV

  config.setQuietMode(true)

  config.addPassthroughCopy('./src/site/robots.txt')
  config.addPassthroughCopy('./src/site/favicon.ico')
  config.addPassthroughCopy('./src/site/*.png')
  config.addPassthroughCopy('./src/site/site.webmanifest')
  config.addPassthroughCopy('./src/site/assets')

  // Plugins ------------------------------------------------------------------
  
  // Add support for syntax highlighting
  config.addPlugin(pluginRss)
  config.addPlugin(syntaxHighlight)

  // Layouts ------------------------------------------------------------------

  config.addLayoutAlias('default', 'layouts/base.njk')
  config.addLayoutAlias('writing', 'layouts/writing.njk')
  config.addLayoutAlias('notes', 'layouts/notes.njk')
  config.addLayoutAlias('journal', 'layouts/journal.njk')
  config.addLayoutAlias('design', 'layouts/design.njk')
  config.addLayoutAlias('develop', 'layouts/develop.njk')
  config.addLayoutAlias('learn', 'layouts/learn.njk')

  // Collections --------------------------------------------------------------

  config.addCollection('writingEntries', c => 
    [...c.getFilteredByGlob('./src/site/writing/**/*.md')]
      .filter(e => !e.inputPath.includes('/tags/'))
      .filter(e => !e.inputPath.endsWith('index.md'))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  )

  config.addCollection('notesEntries', c => 
    [...c.getFilteredByGlob('./src/site/notes/**/*.md')]
      .filter(e => !e.inputPath.includes('/tags/'))
      .filter(e => !e.inputPath.endsWith('index.md'))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  )

  config.addCollection('journalEntries', c => 
    [...c.getFilteredByGlob('./src/site/journal/**/*.md')]
      .filter(e => !e.inputPath.includes('/tags/'))
      .filter(e => !e.inputPath.endsWith('index.md'))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  )

  config.addCollection('designEntries', c => 
    [...c.getFilteredByGlob('./src/site/design/**/*.md')]
      .filter(e => !e.inputPath.includes('/tags/'))
      .filter(e => !e.inputPath.endsWith('index.md'))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  )

  config.addCollection('developEntries', c => 
    [...c.getFilteredByGlob('./src/site/develop/**/*.md')]
      .filter(e => !e.inputPath.includes('/tags/'))  
      .filter(e => !e.inputPath.endsWith('index.md'))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  )

  config.addCollection('learnEntries', c => 
    [...c.getFilteredByGlob('./src/site/learn/**/*.md')]
      .filter(e => !e.inputPath.includes('/tags/'))  
      .filter(e => !e.inputPath.endsWith('index.md'))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  )

  // Filters ------------------------------------------------------------------
  
  // Get the first `n` elements of a collection.
  config.addFilter('head', (arr, n) => n < 0 ? arr.slice(n) : arr.slice(0, n))

  config.addFilter('tagged', (arr, tag) =>
    arr.filter(e =>
      Array.isArray(e.data.tags) ? e.data.tags.includes(tag) : false
    ) 
  )

  config.addFilter('usDate', date =>
    new Intl.DateTimeFormat("en-US", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: 'UTC'
    }).format(date))

  config.addFilter('usDateShort', date =>
    new Intl.DateTimeFormat("en-US", {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC'
    }).format(date))

  config.addFilter('dateTime', date => {
    const d = new Date(date)
    const output = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`
    return output;
  })

  // compress and combine js files
  config.addFilter('jsmin', code => {
    let minified = Terser.minify(code)
      if ( minified.error ) {
        console.log('Terser error: ', minified.error)
        return code
      }
      return minified.code
  })

  config.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: '<!--excerpt-->',
    excerpt_alias: 'excerpt'
  })

  config.addWatchTarget('./src/**/*.js')
  config.addWatchTarget('./src/assets/css/*.css')
  config.addWatchTarget('./src/**/*.md')

  return {
    dir: {
      input: 'src/site',
      output: 'dist',
      data: `_data`
    },
    templateFormats : ['njk', 'md'],
    htmlTemplateEngine : 'njk',
    markdownTemplateEngine : 'njk',
    passthroughFileCopy: true
  }
}