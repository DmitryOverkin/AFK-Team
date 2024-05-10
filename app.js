// import {loginForm} from ''

const express = require('express')
const app = express()
const port = 3000


///views/login.html

app.use('/js', express.static(`${__dirname}/js`));
app.use('/css', express.static(`${__dirname}/css`));
app.use('/images', express.static(__dirname + '/static/images'));


app.get('/', (_, res) => {
    res.sendFile(__dirname + '\\index.html')
})



app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})