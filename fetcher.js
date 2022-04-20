const args = process.argv.slice(2)
// defining an empty array.
let url = args[0];
let filePath = args[1];

// writting files in node***
const fs = require('fs')
const request = require('request');
const requestUrl = process.argv[2];
const local = process.argv[3];

const fetcher = function(url,filePath) {
  request(url, (error, response, body) => {
    if (error) {
      return console.log("UH OH there's a problem with your request");

    }
    fs.writeFile(filePath, body, err => {
      if (err) {
        return console.error("error....", err)
    } 
          console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    });
  });
};
  
fetcher(requestUrl, local);
/*
fs.stat(path, (err, stats) => {
      if (err) {
        throw err;

      } else {
*/