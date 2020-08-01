const Cache = require('@11ty/eleventy-cache-assets')

const lang = 'en' 
const API_KEY = '9e19e75f60e7436fb7da4ca2845fe4cd'
const BASE_URL = 'http://newsapi.org/v2/top-headlines'
const exclude = 'buzzfeed.com,lifehacker.com,mashable.com,www.engadget.com,gizmodo.com,techcrunch.com,www.cnet.com,www.macrumors.com,www.tsn.ca,mlssoccer.com'
const pageSize = 100

module.exports = async function () {
  const URL = `${BASE_URL}?apiKey=${API_KEY}&language=${lang}&excludeDomains=${exclude}&q=+europe&sortBy=publishedAt&pageSize=${pageSize}`
  let output = {}

  try {
    let json = await Cache(URL, {
      duration: '6h', // 6 hour
      type: 'json' // also supports "text" or "buffer"
    })
    output = {
      headlines: json
    }
  } catch (e) {
    output = {
      headlines: []
    }
  }

  return output
}