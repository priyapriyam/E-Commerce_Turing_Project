const express = require('express')
let app = express ();

var jwt = require('jsonwebtoken');

app.use(express.json());

require('./routes/department')(app)

require('./routes/categories')(app)

require('./routes/attributes')(app)

require('./routes/products')(app)

require('./routes/customers')(app,jwt)

require('./routes/tax')(app)

require('./routes/Orders')(app)

require('./routes/shipping')(app)

require('./routes/shopping_cart')(app)


app.listen(2000,()=>{
    console.log("connection done with server 2000")
})
