const express = require('express');
const app = express();

app.get('/api/whoami', (req, res) => {
    res.send({
        "ipaddress": req.ip,
        "language": req.get('User-Agent'),
        "software": req.get('Accept-Language')
    });
});


app.listen(3000, ()=>{
    console.log('===================================================');
    console.log('ready and running');
    console.log('===================================================');
});
