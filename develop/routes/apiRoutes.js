const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const router = require("express").Router();

const {
    readDbFile,
    createNewNote,
    readAppend,
} = require("../lib/notes");

router.post("/notes", (request, response) => {
    const newNote = {
      text: request.body.text,
      title: request.body.title,
      id: uuidv4(),
    };
    readAppend(newNote, "./db/db.json");
    response.json("note added");
  });
  

router.get("/notes", (request, response) => {
    readDbFile("./db/db.json").then((data) => response.json(JSON.parse(data)));
});

module.exports = router;