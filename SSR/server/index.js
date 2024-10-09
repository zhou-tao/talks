import express from 'express'
import fs from 'fs'

const server = express()

//设置允许跨域访问该服务.
server.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

server.get('/fruits', (req, res) => {
  const text = fs.readFileSync('./database/fruits.json', 'utf8')
  const fruits = JSON.parse(text)
  return res.json(fruits)
})

server.listen(8080, () => {
  console.log('Server running at:')
  console.log()
  console.log(' http://localhost:8080')
})