const fs = require("fs");
const util = require("util");
const readDbFile = util.promisify(fs.readFile);

function readAppend(content, file) {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parseData = JSON.parse(data);
        parseData.push(content);
        createNote(file, parseData);
      }
    });
  }
  
function createNote(destination, content) {
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err
      ? console.error(err)
      : console.info(`Note sent to ${destination}`)
  );
}

module.exports = {
readDbFile,
  createNote,
  readAppend,
};