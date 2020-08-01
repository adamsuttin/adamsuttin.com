const Cache = require('@11ty/eleventy-cache-assets')

const lang = 'en' 
const API_KEY = '9e19e75f60e7436fb7da4ca2845fe4cd'
const BASE_URL = 'http://newsapi.org/v2/top-headlines'
const excludeDomains = 'buzzfeed.com,lifehacker.com,mashable.com,www.engadget.com,gizmodo.com,techcrunch.com,www.cnet.com,www.macrumors.com,www.tsn.ca,www.nationalgeographic.com'
const pageSize = 100

module.exports = async function () {
  const URL = `${BASE_URL}?country=us&language=en&category=general&excludeDomains=${excludeDomains}&pageSize=${pageSize}&sortBy=publishedAt&apiKey=${API_KEY}`
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