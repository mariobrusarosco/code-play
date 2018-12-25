const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

// Authentication Process
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const { clientID, clientSecret } = require('./config/keys')

passport.use(
  new GoogleStrategy({
    clientID,
    clientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log('accessToken', accessToken)
    console.log('refreshToken', refreshToken)
    console.log('profile', profile)
  })
)

const googleAuthResponse = 
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })

  
app.get('/auth/google', googleAuthResponse)
app.get('/auth/google/callback', passport.authenticate('google'))
app.listen(PORT)