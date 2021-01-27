const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

const http = require('http').Server(app);

const io = require("socket.io")(http);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


// routes

app.get("/", (request, response) => {
  io.emit('connection');
  response.json({ info: `Node.js, Express, and Postgres API ${port}` });
});


const allRoutes = require("./routes/index");
app.use("/api", allRoutes);



// socketIO events

io.on('connection', (socket) => {


  socket.on('towerCreation', data => {
    console.log("New record created!");
  });
  socket.on('towersUpdation', ()=> console.log("Record updated!"));
  socket.on('towersDeletion', ()=> console.log("Record deleted!"));
});


// server 
http.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
