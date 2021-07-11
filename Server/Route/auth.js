const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const User = require('../Schema/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
//signup
router.post('/signup', async (req, res) => {
    const { email, password } = req.body
    //console.log(req.body.email)
    console.log(req.body);
    const checkUser = await User.findOne({ email })

    if (checkUser) {
        return res.status(422).json({ message: "already exist" })
    }
    bcrypt.hash(password, 10)
        .then(hashedpasword => {
            const user = new User({
                email, password: hashedpasword
            })
            user.save()
                .then(() => res.status(200).json({ message: "succesfull" }))
        })
        .catch(error => {
            console.log("error of sign up and back")
        })

})


//login
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const existinguser = await User.findOne({ email })
        if (!existinguser)
            res.status(404).json({ message: "Email does Not exist" })
        const isPassCorrect = await bcrypt.compare(password, existinguser.password)
        if (!isPassCorrect)
            res.status(404).json({ message: "Invalid Credential" })
        const token = jwt.sign({ _id: existinguser._id }, "admin", { expiresIn: "1h" })
        res.status(200).json({ result: token, email })

    }
    catch {
        console.log("error")
    }

})

router.get('/details', async (req, res) => {
    try {
        const { id } = req.body
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
})


module.exports = router