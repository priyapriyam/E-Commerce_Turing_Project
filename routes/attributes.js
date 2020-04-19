const knex = require('../model/attributes_quries')

module.exports = (app) => { 
    app.get('/attributes',(req,res)=>{
        knex.get_data_of_Attribute_table()
        .then((result)=>{
            res.send (result)
            console.log("get_data")
        })
        .catch((err)=>{
            res.send (err)
            console.log(err)
        })
    })


    app.get('/attribute/:attribute_id',(req,res)=>{
        attribute_id=req.params.attribute_id
        knex.get_data_by_attribute_id(attribute_id)
        .then((data)=>{
            res.send(data)
            console.log("data_readble")
        })
        .catch((err)=>{
            res.send(err)
            console.log(err)
        })
    })
    app.get('/attribute/value/:attribute_id',(req,res)=>{
        attribute_id=req.params.attribute_id
        knex.read_data_by_id(attribute_id)
        .then((get_data)=>{
            res.send(get_data)
            console.log("data is readable")
        })
        .catch((err)=>{
            res.send(err)
            console.log(err)
        })
        
    })
    app.get('/attributes/inProduct/:product_id',(req,res)=>{
        product_id=req.params.product_id
        knex.get_data_by_product_id(product_id)
        .then((result)=>{
            res.send (result)
            console.log("done work")
        })
        .catch((err)=>{
            res.send (err)
            console.log(err)
        })
    })
}




