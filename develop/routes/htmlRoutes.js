const path = require("path");
const router = require("express").Router();

router.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/notes", (request, response) => {
    response.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = router;