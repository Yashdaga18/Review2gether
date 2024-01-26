const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT =  3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use(routes);

mongoose.Promise = Promise;
mongoose.connect(  "mongodb+srv://ranjanraj1:sb4isOQaaneTZYOR@cluster0.7wguhrg.mongodb.net/review",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(PORT, function () {
  console.log(`=> API Server now listening on PORT ${PORT}!`);
});
