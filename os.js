const os   = require('os');
const fs   = require('fs');
const http = require('http');

const colors = require('colors');

const express = require('express');

// console.log('Tu CPU es: ', os.cpus())
// console.log('Tu sistema operativo es: ', os.platform())
// console.log(os.release())
// console.log('Free Memory:', os.freemem(), 'bytes')
// console.log('Total Memory:', os.totalmem(), 'bytes')

// fs.writeFile('./texto.txt', 'Hptaaaaa', function (err) {
//   if(err){
//     console.log(err)
//   }
//   console.log('Archivo creado')
// }) // Código asincrono

// console.log('Ultima linea de código')

// fs.readFile('./texto.txt', function (err, data) {
//   if(err){
//     console.log(err)
//   }
//   console.log(data.toString())
// })


// const handleServer = function(req, res){
//   res.writeHead(200, { 'Content-type': 'text/html' })
//   res.write('<h1>Hola hptaaaaa de Nodejs</h1>');
//   res.end();
// }

// const server = http.createServer(handleServer);

// server.listen(3000, function () {
//   console.log('Server on port 3000 ...'.green)
// })

const server = express();

server.get('/', (req, res) => {
  res.send('<h1>Hola hpta con Express y Node</h1>');
  res.end();
})

server.listen(3000, () => {
  console.log('Server on port 3000'.red);
})