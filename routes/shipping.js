const knex = require('../model/shipping_quries')

module.exports = (app) =>{ 

        app.get("/shipping/regions",(req,res)=>{
            knex .get_data()
                .then((result)=>{
                    res.send(result)
                    console.log(result)
                })
                .catch((err)=>{
                    res.send(err)
                    console.log(err)
                })
            })
        app.get('/shipping/regions/:shipping_region_id',(req,res)=>{
            shipping_region_id = req.params.shipping_region_id
            knex.data_get_by_id(shipping_region_id)
                .then((result)=>{
                    res.send(result)
                    console.log("data is readble")
                 })
                .catch((err)=>{
                    res.send(err)
                    console.log(err)
            })

        })

    }
