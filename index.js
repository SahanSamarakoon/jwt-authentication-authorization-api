const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const { DB, PORT } = require("./config");

const db = require("./models");
const Role = db.role;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require('./routes/authRoutes')(app);
require('./routes/routes')(app);
require('./routes/dataRoutes')(app);

db.mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initialDbSetup();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

  app.listen(PORT, () => {
    console.log("Server started on port:" + PORT);
})

app.get("/", (req, res) => {
    // res.json({ message: "Welcome" });
    res.sendFile(__dirname+"/index.html");
});

function initialDbSetup() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'user' to roles collection");
      });

      new Role({
        name: "manager"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'manager' to roles collection");
      });

      new Role({
        name: "salesperson"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("Added 'salesperson' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}