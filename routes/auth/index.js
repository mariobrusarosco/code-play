const passport = require('passport')

module.exports = app => {
  const googleAuthResponse = 
  passport.authenticate('google', {
    scope: ['profile']
  })
  
  app.get('/auth/google', googleAuthResponse)
  app.get('/auth/google/callback', passport.authenticate('google'))
  app.get('/api/logout', (req, res) => {
    req.logout()
    res.send(req.user)
  })
  app.get('/api/current_user', (req, res) => {
    console.log('current user')
    res.send(req.user)
  })

}