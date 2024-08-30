const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');
const port = 3000;

const app = express();

app.use(express.static('public'));
app.use(
  '/js',
  express.static(path.join(__dirname, 'node_modules', 'gsap', 'dist'))
);

// Use routes defined in mainRoutes
app.use('/', mainRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
