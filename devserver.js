const express = require('express');
var cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/vr', (req, res) => {
  res.send('./vr');
});

app.listen(port, () => console.log(`Listening on port ${port}`));