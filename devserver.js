const express = require('express');
var path = require("path");
var cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

//app.use(express.static('/vr', express.static(path.join(__dirname, '/vr'))));
//app.use(express.static('./styles', express.static(path.join(__dirname, './styles'))));
//app.use(express.static('./static_assets', express.static(path.join(__dirname, './static_assets'))));
//app.use(express.static('./services', express.static(path.join(__dirname, './services'))));
//app.use(express.static('/index.vr.js', express.static(path.join(__dirname, './index.vr.js'))));

app.use('/static_assets', express.static(path.join(__dirname, 'static_assets')));

app.get('/vr/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, './vr', 'index.html'));
    //res.send("OK.");
});

// app.get('/vr/client.bundle?platform=vr', (req, res) => {
//     res.sendFile('http://localhost:8081/vr/client.bundle?platform=vr');
//     console.log("pooper scooper");
// });

app.listen(port, () => console.log(`Listening on port ${port}`));