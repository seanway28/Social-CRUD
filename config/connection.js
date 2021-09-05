const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Social-CRUD', {
    //useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
module.exports = mongoose.connection;

// import mongoose = require('mongoose');