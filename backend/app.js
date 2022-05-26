// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
// import bcrypt module
const bcrypt = require("bcrypt");
// import multer module
const multer = require("multer");
// import axios module
const axios = require("axios");

const path = require("path");
mongoose.connect("mongodb://localhost:27017/hossDB");

// import User Model
const User = require("./models/user");
// create express application
const app = express();

// Configuration
// Send JSON responses
app.use(bodyParser.json());
// Parse Request Objects
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// Multer configuration
app.use("/images", express.static(path.join("backend/images")));

const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});
let matches = [
  { id: 1, scoreOne: 2, scoreTwo: 1, teamOne: "FCB", teamTwo: "RMD" },
  { id: 2, scoreOne: 1, scoreTwo: 1, teamOne: "JUV", teamTwo: "INT" },
  { id: 3, scoreOne: 3, scoreTwo: 0, teamOne: "CIT", teamTwo: "LIV" },
  { id: 4, scoreOne: 1, scoreTwo: 2, teamOne: "SEV", teamTwo: "ATM" },
  { id: 5, scoreOne: 2, scoreTwo: 2, teamOne: "PSG", teamTwo: "OM" },
];

let players = [
  { id: 1, name: "Messi", nbr: 10, position: "ATK", age: "36" },
  { id: 2, name: "Ronaldo", nbr: 7, position: "MID", age: "33" },
  { id: 3, name: "Bechir", nbr: 1, position: "GK", age: "37" },
  { id: 4, name: "Bechir", nbr: 1, position: "GK", age: "37" },
  { id: 5, name: "Bechir", nbr: 1, position: "GK", age: "37" },
  { id: 6, name: "Bechir", nbr: 1, position: "GK", age: "37" },
];
// Business Logic : Get All matches
// une fonction qui va s'exécuter automatiquement selon le Request:
// HTTP Method Get || Address: http://localhost:3000/matches
app.get("/matches", (req, res) => {
  console.log("Here into business logic : Get All matches ...");
  // Send Response : Array of matches  [{}, {}, {} ....]
  res.json({
    matchesKey: matches,
  });
});

// Business Logic : Get All Players
app.get("/players", (req, res) => {
  console.log("Here into get all players");
  res.json({
    playersKey: players,
  });
});

// Business Logic : Get match by ID
app.get("/matches/:id", (req, res) => {
  console.log("Here into get match by id");
  let findedMatch;
  let ID = req.params.id;
  console.log("Here ID from FE", ID);
  findedMatch = matches.find((obj) => {
    return obj.id == ID;
  });
  console.log("Here finded match", findedMatch);
  res.json({
    match: findedMatch,
  });
});

// Business Logic : Delete match by ID
app.delete("/matches/:id", (req, res) => {
  console.log("Here into delete match by id");
  let ID = req.params.id;
  let pos;
  console.log("Here id ", ID);
  for (let i = 0; i < matches.length; i++) {
    if (matches[i].id == ID) {
      pos = i;
      break;
    }
  }
  matches.splice(pos, 1);
  res.json({
    message: "Match is deleted",
  });
});
// Business Logic : Edit match by ID
// Business Logic : Add Match

// Business Logic : Get All players
// Business Logic : Get player by ID
// Business Logic : Delete player by ID
// Business Logic : Edit player by ID
// Business Logic : Add Player

// Business Logic: Signup
app.post(
  "/users/signup",
  multer({ storage: storage }).single("img"),
  (req, res) => {
    bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
      console.log("Here crypted pwd", cryptedPwd);
      url = req.protocol + "://" + req.get("host");
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        pwd: cryptedPwd,
        role: req.body.role,
        avatar: url + "/images/" + req.file.filename,
      });
      user.save((err, doc) => {
        if (err) {
          console.log("Here err with DB", err);
        } else {
          res.status(200).json({
            message: "User added with success",
            user: doc,
          });
        }
      });
    });
  }
);

// Business Logic: Signup
app.post("/users/login", (req, res) => {
  console.log("Here into login", req.body);
  // search user by email and pwd
  User.findOne({ email: req.body.email })
    .then((emailResult) => {
      if (!emailResult) {
        res.json({
          message: "0",
        });
      }

      return bcrypt.compare(req.body.pwd, emailResult.pwd);
    })
    .then((pwdResult) => {
      console.log("Pwd result", pwdResult);
      if (!pwdResult) {
        res.json({
          message: "1",
        });
      }
      // send message 2 | objet user (Email and pwd are correct)
      User.findOne({ email: req.body.email }).then((finalResult) => {
        let userToSend = {
          fName: finalResult.firstName,
          lName: finalResult.lastName,
          id: finalResult._id,
          role: finalResult.role,
        };
        res.json({
          user: userToSend,
          message: "2",
        });
      });
    });
});

app.post("/users/weather", (req, res) => {
  let city = req.body.city;
  const apiKey = "62ee756a34835483299877a61961cafb";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey + "&units=metric";
  axios.get(apiUrl).then((response) => {
    let data = response.data.main;
    let weather = response.data.weather;
    console.log("Here data", data);
    console.log("Here weather", weather);

    let weatherRes = {
      temp: data.temp,
      pressure: data.pressure,
      humidity: data.humidity,
    };

    res.json({
      result:weatherRes
    })
  });
});

// app is importable from another files
module.exports = app;
