const express = require('express');
const path = require('path');

const {dirList} = require('./dirList');

const app = express();
const port = 8080;
const staticDir = path.resolve('public');

app.use('/files', dirList(staticDir));
app.use('/files', express.static(staticDir, {index: false}));

app.listen(port, () => console.log(`Server listening on port ${port}`));
