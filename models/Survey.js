const mongoose = require('mongoose')

const { Schema } = mongoose
const Recipient =  require('./Recipient')

const Survey = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [Recipient],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  // _user variable is just a convention. You can name it whatever you want
  dateSent: Date,
  lastResponded: Date,
})

mongoose.model('surveys', Survey)