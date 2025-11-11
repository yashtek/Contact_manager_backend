const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectiondb = require("./config/dbConnection");
const validateToken = require("./middleware/validateTokenHandler");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
connectiondb();
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.use(validateToken);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})