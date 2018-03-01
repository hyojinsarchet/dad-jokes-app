// connect to mongo using mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/dad-jokes')
//save asynchronous things in Promise
mongoose.Promise = Promise
// export globally
module.exports = mongoose
