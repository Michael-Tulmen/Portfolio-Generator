const fs = require('fs');
const { reject } = require('lodash');
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }

        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

  const copyFile = copiedData => {
      return new Promise((resolve,reject) => {
          fs.copyFile('./src/style.css', './dist/style.css', err => {
              if(err) {
                  reject(err);
                  return;
              }

              resolve({
                  ok:true,
                  message: 'Style sheet is ready!'
              });
          });
      });
  };
  module.exports = {writeFile, copyFile};