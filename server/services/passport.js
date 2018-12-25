// Authentication Process
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const { clientID, clientSecret } = require('../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model('users')

passport.use(
  new GoogleStrategy({
    clientID,
    clientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
    .then((existingUser) => {
      if(existingUser) {
        console.log('existingUser', existingUser)
        done(null, existingUser)
      }
      else {
        console.log(profile.id)
        new User({ googleId: profile.id })
          .save()
          .then(newUser => done(null, newUser))
      }
    })
  })
)