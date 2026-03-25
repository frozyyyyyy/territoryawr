const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: *");
  next();
});

app.use(express.static(path.join(__dirname)));
app.listen(process.env.PORT || 8080);
