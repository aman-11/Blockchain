const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { mongourl } = require('./keys')
const Auth = require('./Route/auth')
const storyPost = require('./Route/storyPost')
const cors = require('cors');
const PORT = 5000
require('./Schema/user')
mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(app.listen(PORT, () => {
    console.log("Server Started", PORT)
})
)
app.use(express.json())
app.use(cors());
app.use(Auth)
app.use(storyPost)

mongoose.connection.on("connected", () => {
    console.log("connected")
})




