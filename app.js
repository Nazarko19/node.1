const fs = require('fs');
const path = require('path');

const boysPath = path.join(__dirname,'boys');
const girlPath = path.join(__dirname,'girl');

fs.readdir(boysPath,((err, files) => {
   if (err) {
      console.log(err);
      return
   }
   files.forEach(file=>{

     const tmp = path.join(boysPath, file);

     fs.readFile(tmp,((err1, data) => {
        if(JSON.parse(data).gender === 'female'){
           fs.rename(tmp,path.join(girlPath,file),(err2 => {
              if (err2) {
                 console.log(err2);
              }
           }))
        }
     }))
   })
   fs.readdir(girlPath,((err1, files1) => {
      files1.forEach(file=>{

         const tmp = path.join(girlPath, file);

         fs.readFile(tmp,((err1, data) => {
            if(JSON.parse(data).gender === 'male'){
               fs.rename(tmp,path.join(boysPath,file),(err2 => {
                  if (err2) {
                     console.log(err2);
                  }
               }))
            }
         }))
      })
   }))

}))






















