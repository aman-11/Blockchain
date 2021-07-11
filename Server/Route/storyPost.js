const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const postStory = require('../../../Admin/serveHumanity/Server/Schema/postStory')

router.get('/fetchStory', async (req, res) => {
    try {
        const allStory = await postStory.find()
        res.status(200).json(allStory)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router