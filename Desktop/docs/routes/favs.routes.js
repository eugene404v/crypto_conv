const {Router} = require('express')
const config = require('config')
const Favs = require('../models/Favs')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/', auth, async (req, res) => {
    try {
      const {title, link} = req.body
  
      const existing = await Favs.findOne({ link })
  
      if (existing) {
        return res.json({ link: existing })
      }
  
      const fav = new Favs({
        title, link, owner: req.user.userId
      })
  
      await fav.save()
  
      res.status(201).json({ fav })
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

  router.get('/', auth, async (req, res) => {
    try {
      const favs = await Favs.find({ owner: req.user.userId })
      res.json(favs)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })
  

  module.exports = router