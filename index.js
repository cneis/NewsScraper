const PORT = 8000
const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')
const { response } = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const url ='https://www.theguardian.com/uk'
const urlny = 'https://www.nytimes.com/'

app.get('/', function (req, res) {
    res.json('This is my webscraper')
})

app.get('/results', function (req, res) {
    axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.fc-item__title', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title, 
                url
            })
        })
        //console.log(articles)
        res.json(articles)
    }).catch(err => console.log(err))

})

app.get('/nytimes', function (req, res) {
    console.log('nytimes func')
    axios(urlny)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.story-wrapper', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title, 
                url 
            })
        })
        //console.log(articles)
        res.json(articles)
    }).catch(err => console.log(err))

})


app.listen(PORT, () => console.log(`server running on port ${PORT}`))