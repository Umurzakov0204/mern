const {Router} = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const router = Router()

router.post('/register', async (req, res) => {
    try {

        const {email, password} = req.body

        const candidate = await User.findOne({email})

        if (candidate) {
            res.status(400).json({message: 'Takoy polzovatel uje est!'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)

    } catch (e) {
        return res.status(500).json({ message: "Oshibka, chotta ne tak napisal)" })
    }
})

router.post('/login', async (req, res) => {

})

module.exports = router;