const express = require('express');
const path = require('path');

const {dirList} = require('./dirList');

const app = express();
const port = 8080;
const filesDir = path.resolve('files');
const staticDir = path.resolve('dist');

app.use('/files', dirList(filesDir));
app.use('/files', express.static(filesDir, {index: false}));
app.use('/', express.static(staticDir));

app.listen(port, () => console.log(`Server listening on port ${port}`));
