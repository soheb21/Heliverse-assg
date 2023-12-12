
const express = require("express");
const { connectDB } = require("./DB/Database");
const app = express();
require("dotenv").config();
app.use(express.json());


app.use("/api/v1/user", require("./router/userRouter"))
app.use("/api/v1/team", require("./router/teamRouter"))


connectDB();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running at Port no ${PORT}`))