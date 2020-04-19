const knex = require('../model/tax_quries')

module.exports = (app) =>{ 


// 1
    app.get("/tax",(req,res)=>{
        knex.get_all_taxes()
        .then((result)=>{
            res.send (result)
            console.log("data is readble")
        })
        .catch((err)=>{
            res.send(err)
            console.log(err)
        })
    })


// 2

    app.get('/tax/:tax_id',(req,res) =>{
        tax_id=req.params.tax_id
        knex.get_taxes_by_tax_id (tax_id)
            .then((result)=>{
                res.send (result)
                console.log("data readble")
            })
            .catch((err)=>{
                res.send(err)
                console.log(err)
        })
    })

}
