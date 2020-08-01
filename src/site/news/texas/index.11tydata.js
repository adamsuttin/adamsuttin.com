const qs = require('querystring')
const Cache = require('@11ty/eleventy-cache-assets')
const dotenv = require('dotenv')
dotenv.config()

const NEWS_API_URL = `${process.env.NEWS_API_BASEURL}/everything`

const params = {
  language        : `${process.env.NEWS_API_LANG || 'en' }`,
  excludeDomains  : `${process.env.NEWS_API_EXCLUDE_DOMAINS}`,
  q               : '+Texas',
  pageSize        : `${process.env.NEWS_API_PAGE_SIZE || 100}`,
  sortBy          : `${process.env.NEWS_API_SORT_BY || 'publishedAt'}`,
  apiKey          : `${process.env.NEWS_API_KEY}`
}

module.exports = async function () {
  const URL = `${NEWS_API_URL}?${qs.stringify(params)}`
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