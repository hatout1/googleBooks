const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connection = mongoose.connection;
const logger = require("morgan");
const PORT = process.env.PORT || 5000;

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks_db";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", function() {
  console.log("connected to db instance");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

const apiRoutes = require("./routes/apiRoutes");
app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log(`listening at: http://localhost:${PORT}`);
});
