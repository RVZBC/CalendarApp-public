const mongoose = require('mongoose');

const connectDatabase = () => {
// Insert mongodb uri inside "".
mongoose.connect("", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.once("open", () => console.log("Connected to Server!"));
}

module.exports = connectDatabase;