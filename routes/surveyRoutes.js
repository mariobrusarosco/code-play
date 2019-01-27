const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const requireCredit = require('../middlewares/requireCredit')

const Survey = mongoose.model('surveys');
const 

module.exports = app => {
  app.post('api/surveys', requireLogin, requireCredit, (req, res) => {
    const { title, subject, body, recipients } = req.body

    const newSurvey = await new Survey({
      title,
      subject,
      body,
      recipients: 
    })
  })
}