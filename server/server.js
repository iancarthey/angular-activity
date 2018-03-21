let express = require('express');
let app = express();
let bodyParser = require('body-parser');

const PORT = 5000;

app.listen(PORT, () =>{
    console.log('the server is running on port 5000');

})

app.use(express.static('server/public'));