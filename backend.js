const express = require("express");
const mongoose = require("mongoose");
const Valorant = require("./skema.js");
const cors = require("cors");
const league = require("./league.js");
const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['POST', 'GET'],
  credentials: true
}));

mongoose.connect("mongodb+srv://mohamedhesham3324:jWRroC6l7yRfIghC@cluster0.idx6gmw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
  console.log("connected to mongoose");
});

app.post("/Valorant", (req, res) => {
  const { link, rank, category } = req.body;

  const valorants = new Valorant({
    link: link,
    rank: rank,
    category: category,
  });

  valorants.save().then((data) => {
    res.send(data);
  });
});

app.post("/league", (req, res) => {
  const { link, rank, category } = req.body;

  const leagues = new league({
    link: link,
    rank: rank,
    category: category,
  });

  leagues.save().then((data) => {
    res.send(data);
  });
});


app.get("/Valorant", (req, res) => {
  Valorant.find().then((data) => {
    res.json(data);
  });
});

app.get("/league", (req, res) => {
  league.find().then((data) => {
    res.json(data);
  });
});


app.listen(3000, () => {
  console.log("running on 3000");
});
