const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve('views', 'home.html'));
});

router.get('/basic-tween', (req, res) => {
  res.sendFile(path.resolve('views', 'basic-tween.html'));
});

router.get('/from-to', (req, res) => {
  res.sendFile(path.resolve('views', 'from-to.html'));
});

router.get('/delay-repeat', (req, res) => {
  res.sendFile(path.resolve('views', 'delay-repeat.html'));
});

router.get('/ease', (req, res) => {
  res.sendFile(path.resolve('views', 'ease.html'));
});

router.get('/ease-rough', (req, res) => {
  res.sendFile(path.resolve('views', 'ease-rough.html'));
});

router.get('/stagger', (req, res) => {
  res.sendFile(path.resolve('views', 'stagger.html'));
});

module.exports = router;
