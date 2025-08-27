
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use("/NewsPage", require("./routes/news"));

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
