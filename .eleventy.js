module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('img')
    eleventyConfig.addPassthroughCopy('mp3')

    return {
      passthroughFileCopy: true
    }
}