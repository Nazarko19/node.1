const builder = require('./helder/User- builder')

//
// let user = builder.createBuilder('victor',13)
//
// console.log(user);


const fs = require('fs')
const path = require('path')


// console.log(__dirname)


// __dirname ---- // показує в якій папці знаходиться файл

// __filename --- показує де викикається файл

//
// fs.readFile(`${__dirname}/files/text.txt`,((err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data.toString())           //// fs.readFile -  читання файлу
// }));


//
// fs.writeFile(`${__dirname}/files/write.txt`,'HELLO WORLD',(err => {
//     console.log(err);
// }))                             /// створює файл але якщо створити пару раз воно перезаписує його з нуля
//




// fs.appendFile(`${__dirname}/files/append.txt`,'hello world',(err => {
//     console.log(err);
// }))                               //////  створює файл але дописує стільки разів скільки створили файл

//
// const appendFilePath = path.join(__dirname, 'files', 'write.txt')   /// для розпізнавання знаків
//                                                                         // віндовс використовуєм patch
// console.log(appendFilePath);
// //
// fs.appendFile(appendFilePath,'hello world \n',(err) => {
//     console.log(err);
// })
//
//
// const mkdirPatch = path.join(__dirname,'files','user','22','photo')
//
// fs.mkdir(mkdirPatch,{recursive:true},(err) => {
//     console.log(err)
// })                         ///// mkdir - створює папку
//
// //
// fs.unlink(appendFilePath,err => {
//     console.log(err);
// })



// fs.rename(                 ///// rename - переносить файл
//     appendFilePath,
//     path.join(mkdirPatch,'NewFile.txt'),  /// - куди переносим + перейменовуєм
//     (err => {
//         console.log(err);
//     })
// )


