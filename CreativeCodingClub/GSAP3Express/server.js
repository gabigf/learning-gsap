const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'js')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

app.get('/basic-tween', (req, res) => {
  res.sendFile(path.resolve('pages', 'basic-tween.html'));
});

app.get('/from-to', (req, res) => {
  res.sendFile(path.resolve('pages', 'from-to.html'));
});

app.get('/delay-repeat', (req, res) => {
  res.sendFile(path.resolve('pages', 'delay-repeat.html'));
});

app.get('/ease', (req, res) => {
  res.sendFile(path.resolve('pages', 'ease.html'));
});

app.listen(port, () => {
  console.log('Example running ');
});
