const express = require('express')
const newsRouter = express.Router()

const axios = require('axios')

newsRouter.get('',async(req,res) => {
    //res.render('news')
    try {
        const newsAPI = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=8399c06a8af7459ea3bdbe57fa936cf7')
        res.render('news1', {articles : newsAPI.data.articles})
    } catch (error) {
        if(error.response)
        {   res.render('news1', {articles : null})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.header)
        }else if(error.requiest)
        {
            res.render('news1', {articles : null})
            console.log(error.requiest)
        }else
        {
            res.render('news1', {articles : null})
            console.log('Error',error.message)
        }
    }

})

newsRouter.post('/search',async(req,res) => {
    const search = req.body.search
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2021-06-29&to=2021-06-29&sortBy=popularity&apiKey=8399c06a8af7459ea3bdbe57fa936cf7`)
        res.render('news1', {articles : newsAPI.data.articles})
    } catch (error) {
        if(error.response)
        {   res.render('news1', {articles : null})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.header)
        }else if(error.requiest)
        {
            res.render('news1', {articles : null})
            console.log(error.requiest)
        }else
        {
            res.render('news1', {articles : null})
            console.log('Error',error.message)
        }
    }

})


module.exports = newsRouter