---
title: Adipiscing tristique risus nec feugiat
subtitle:
date: 2020-07-05T13:45:00
summary: Vel turpis nunc eget lorem. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Magna eget est lorem ipsum dolor sit amet. Diam maecenas sed enim ut sem viverra. Amet consectetur adipiscing elit duis.
layout: "layouts/writing/writing-article.njk"
tags:
  - design
  - css
  - art-direction
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare. Ultricies integer quis auctor elit. Morbi blandit cursus risus at ultrices. Mauris sit amet massa vitae tortor. Justo nec ultrices dui sapien eget mi proin sed. Elit scelerisque mauris pellentesque pulvinar pellentesque. Egestas pretium aenean pharetra magna ac placerat. Rhoncus dolor purus non enim praesent elementum facilisis leo. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Consequat id porta nibh venenatis cras sed felis eget velit. Tristique nulla aliquet enim tortor at auctor urna nunc id. Felis eget velit aliquet sagittis id consectetur purus ut. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet commodo nulla facilisi nullam.

Feugiat nibh sed pulvinar proin gravida. Venenatis lectus magna fringilla urna porttitor. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Eget velit aliquet sagittis id consectetur purus ut faucibus. Pulvinar [pellentesque](/writing/pwe/) habitant morbi tristique senectus et. Arcu dictum varius duis at consectetur lorem. Id porta nibh venenatis cras sed felis eget. Erat imperdiet sed euismod nisi porta. Nisl purus in mollis nunc sed id semper risus. Facilisis magna etiam tempor orci.

Dolor sit amet consectetur adipiscing elit pellentesque. Dolor sed viverra ipsum nunc aliquet. In hac habitasse platea dictumst. Eget gravida cum sociis natoque. Viverra tellus in hac habitasse platea dictumst vestibulum. Leo urna molestie at elementum eu facilisis sed. Risus in hendrerit gravida rutrum quisque non. Dignissim enim sit amet venenatis urna cursus eget nunc. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Ipsum suspendisse ultrices gravida dictum. Molestie nunc non blandit massa enim nec dui nunc. Volutpat odio facilisis mauris sit amet massa vitae. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Lorem ipsum dolor sit amet. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu scelerisque felis imperdiet proin.

Adipiscing tristique risus nec feugiat in fermentum posuere. Fringilla [phasellus faucibus scelerisque eleifend donec](/writing/hjq/) pretium vulputate sapien nec. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Amet venenatis urna cursus eget nunc. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Leo duis ut diam quam. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Vel turpis nunc eget lorem. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Magna eget est lorem ipsum dolor sit amet. Diam maecenas sed enim ut sem viverra. Amet consectetur adipiscing elit duis. Quisque sagittis purus sit amet. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Nisi porta lorem mollis aliquam ut. Justo laoreet sit amet cursus sit.

```js
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const Terser = require('terser')

module.exports = function(config) {

  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk')

  // add support for syntax highlighting
  config.addPlugin(syntaxHighlight)

  // compress and combine js files
  config.addFilter('jsmin', function (code) {
    let minified = Terser.minify(code)
      if ( minified.error ) {
        console.log('Terser error: ', minified.error)
        return code
      }
      return minified.code
  })

  // pass some assets right through
  config.addPassthroughCopy('./src/site/images')

  // make the seed target act like prod
  env = (env === 'seed') ? 'prod' : env
  
  return {
    dir: {
      input: 'src/site',
      output: 'dist',
      data: `_data/${env}`
    },
    templateFormats : ['njk', 'md', '11ty.js'],
    htmlTemplateEngine : 'njk',
    markdownTemplateEngine : 'njk',
    passthroughFileCopy: true
  }
}
```

Pretium lectus quam id leo in vitae turpis. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Dolor sed viverra ipsum nunc aliquet bibendum. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Vitae proin sagittis nisl rhoncus. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Placerat orci nulla pellentesque dignissim enim sit. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Arcu odio ut sem nulla pharetra diam sit amet. Sit amet nulla facilisi morbi tempus iaculis urna. Massa sapien faucibus et molestie ac feugiat sed.

### Eget sit amet tellus cras adipiscing enim eu turpis egestas

Ornare massa eget egestas purus. Tellus molestie nunc non blandit massa enim nec dui. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Consectetur adipiscing elit pellentesque habitant morbi. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Quam lacus suspendisse faucibus interdum posuere lorem. Faucibus interdum posuere lorem ipsum dolor sit. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Venenatis a condimentum vitae sapien. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sed nisi lacus sed viverra tellus in hac habitasse platea. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.

Fringilla est ullamcorper eget nulla facilisi etiam. Massa placerat duis ultricies lacus sed. Sed odio morbi quis commodo odio aenean sed. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Sit amet commodo nulla facilisi nullam. Congue eu consequat ac felis donec et odio pellentesque diam. Ac orci phasellus egestas tellus. Tincidunt augue interdum velit euismod in pellentesque massa. A diam sollicitudin tempor id eu nisl. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et.

#### Nec tincidunt praesent semper feugiat nibh sed pulvinar proin

Convallis posuere morbi leo urna molestie at. Pretium fusce id velit ut tortor. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Id cursus metus aliquam eleifend. Eget felis eget nunc lobortis. Libero justo laoreet sit amet cursus sit amet dictum. Aliquet lectus proin nibh nisl. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Pellentesque elit eget gravida cum sociis. Velit ut tortor [pretium viverra suspendisse](/writing/xyz/) potenti nullam ac tortor. Amet porttitor eget dolor morbi non arcu. Quis vel eros donec ac odio.

- Nulla aliquet enim tortor at auctor urna nunc id cursus.
- Amet aliquam id diam maecenas.
- Velit ut tortor pretium viverra suspendisse.
- Urna id volutpat lacus laoreet non curabitur gravida arcu ac.
- Ullamcorper sit amet risus nullam eget felis eget nunc. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
  - Justo eget magna fermentum iaculis eu non diam.

Mauris rhoncus aenean vel elit. Nec ultrices dui sapien eget mi proin sed libero enim. Enim nulla aliquet porttitor lacus. Id consectetur purus ut faucibus pulvinar. Sed id semper risus in. Enim nulla aliquet porttitor lacus luctus. Eleifend quam adipiscing vitae proin sagittis. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Ac felis donec et odio pellentesque diam volutpat commodo. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Auctor neque vitae tempus quam pellentesque nec nam.

##### Fermentum posuere urna nec tincidunt

Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Sit amet risus nullam eget felis. Lorem ipsum dolor sit amet consectetur adipiscing elit. Est lorem ipsum dolor sit amet consectetur. Enim lobortis scelerisque fermentum dui. At auctor urna nunc id cursus metus. Iaculis nunc sed augue lacus viverra vitae congue eu. Varius morbi enim nunc faucibus a. Ut sem nulla pharetra diam. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Volutpat diam ut venenatis tellus in.

> Iaculis nunc sed augue lacus viverra vitae congue. Pulvinar proin gravida hendrerit lectus a.
> Eget est lorem ipsum dolor sit amet consectetur.
>
> Sagittis vitae et leo duis ut diam quam nulla porttitor. Ornare arcu dui vivamus arcu.
> Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Aliquet nec ullamcorper sit amet risus nullam eget felis. Fermentum posuere urna nec tincidunt praesent semper. Libero justo laoreet sit amet cursus. In mollis nunc sed id semper.

Sagittis aliquam malesuada bibendum arcu vitae elementum. Amet nulla facilisi morbi tempus. Eget lorem dolor sed viverra. Facilisis volutpat est velit egestas dui id. Sed enim ut sem viverra aliquet eget sit amet tellus. Nulla aliquet enim tortor at auctor urna nunc id. Curabitur vitae nunc sed velit dignissim sodales ut. Consequat id porta nibh venenatis cras sed. Risus in hendrerit gravida rutrum quisque non tellus orci.

###### Eu tincidunt tortor aliquam nulla facilisi

Amet nisl suscipit adipiscing bibendum. Quisque egestas diam in arcu cursus. Cursus risus at ultrices mi tempus imperdiet nulla. Sed risus ultricies tristique nulla aliquet enim tortor. Condimentum lacinia quis vel eros donec ac. Tristique senectus et netus et malesuada. Nisl pretium fusce id velit ut. Amet commodo nulla facilisi nullam vehicula. Amet aliquam id diam maecenas. Commodo quis imperdiet massa tincidunt nunc pulvinar.
