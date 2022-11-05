const request = require("request");
const fs = require("fs");
const url = process.argv[2];
const localPath = process.argv[3];

const fetcher = function(url, localPath) {
  request(url, (error, response, body) => {
    if (error) {
      return "Error";
    }

    fs.writeFile(localPath, body, (error1) => {
      if (error1) {
        return "Error";
      }

      console.log(`Downloaded and Saved ${body.length} to ${localPath}`);
    })

  })
  
}

fetcher(url, localPath);