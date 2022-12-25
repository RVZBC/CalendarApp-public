const express = require("express");
const cors = require("cors");
const connectDatabase = require('./database/database');

const taskRoutes = require('./routes/taskRoutes');

const app = express();

connectDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/task", taskRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${process.env.PORT || 4000}`)
});