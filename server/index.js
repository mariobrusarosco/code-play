const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

// Authentication Lib
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(new GoogleStrategy())

app.listen(PORT)