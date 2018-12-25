const passport = require('passport')

module.exports = app => {
  const googleAuthResponse = 
  passport.authenticate('google', {
    scope: ['profile']
  })
  
  app.get('/auth/google', googleAuthResponse)
  app.get('/auth/google/callback', passport.authenticate('google'))
}