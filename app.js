const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.APP_PORT ?? 5000;

app.use(express.json());
const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};
app.get("/", welcome);

const movieHandlers = require("./movieHandlers");
// app.get("/api/users", movieHandlers.getUsers);
// app.get("/api/users/:id", movieHandlers.getUsersById);
app.get("/api/users", movieHandlers.getUsers);
app.get("/api/users/:id", movieHandlers.getUserById);


// app.post("/api/movies", movieHandlers.postMovie);
// app.post("/api/movies", HANDLER);

app.put("/api/users/:id", movieHandlers.postUser);




app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});


