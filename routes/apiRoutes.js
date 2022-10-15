const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const router = require("express").Router();

const {
    readDbFile,
    createNote,
    readAppend,
} = require("../notes/index");

router.post("../notes/index", (request, response) => {
    const newNote = {
      text: request.body.text,
      title: request.body.title,
      id: uuidv4(),
    };
    readAppend(newNote, "./db/db.json");
    response.json("note added");
  });
  

router.get("../notes/index", (request, response) => {
    readDbFile("./db/db.json").then((data) => response.json(JSON.parse(data)));
});

module.exports = router;