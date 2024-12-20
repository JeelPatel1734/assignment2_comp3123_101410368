const express = require("express");
const app = express();
const cors = require('cors');
const routes = require("./Route/routes");
app.use(cors());
const mongoose = require("mongoose");
const DB_CONNECTION_STRING = "mongodb+srv://jeelppatel1734:xTSBB8cFLfJvFAkv@cluster0.vo47s.mongodb.net/COMP3123_LAB6?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to MongoDB");
}).catch(err => {
    console.error('Could not connect to MongoDB:', err);
    process.exit();
});

app.use(express.json());

app.use("/api/v1", routes);
app.listen(8890, () => {
    console.log("Server is running on port 8890");
});