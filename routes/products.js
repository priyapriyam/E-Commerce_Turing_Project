const knex = require('../model/product_quries')

module.exports = (app) =>{ 

// 1
    app.get('/product',(req,res)=>{
        knex.get_data_of_product_table()
            .then((result)=>{
                res.send (result)
                console.log("data _readble")
            })
            .catch ((err)=>{
                res.send (err)
                console.log('error')
            })
        })

// 2

    app.get('/products/:search',(req,res)=>{
        let search = req.params.search
        knex.search_product(search)
            .then((result)=>{
                res.send ({"rows":result})
                console.log("done")
            })
            .catch ((err)=>{
                res.send (err)
                console.log (err)
        
            })
        })
// 3
    app.get('/product/:product_id',(req,res)=>{
        let product_id = req.params.product_id
        knex.get_data_by_product_id(product_id)
            .then((result)=>{
                res.send (result)
                console.log("data _readble")
            })
            .catch((err)=>{
                res.send(err)
                console.log(err)
            })
        })

// 4

    app.get('/products/inCategory/:category_id',(req,res)=>{
        category_id = req.params.category_id
        knex.get_data_by_category_id(category_id)
            .then((result)=>{
                res.send (result)
                console.log("data_get")
            })
            .catch((err)=>{
                res.send(err)
                console.log(err)
            })
        })
// 5

    app.get('/products/inDepartment/department_id',(req,res)=>{
        department_id = req.params.department_id
        knex.get_data_by_departmet_id( department_id)
            .then((result)=>{
                res.send(result)
                console.log(result)
            })
            .catch((err)=>{
                res.send(err)
                console.log(err)
            })
        })
// 6
    app.get('/products/details/:product_id',(req,res)=>{
        product_id=req.params.product_id
        knex.data_get_by_product_id(product_id)
            .then((result)=>{
                res.send (result)
                console.log("data is readble")
            })
            .catch((err)=>{
                res.send(err)
                console.log("error")
            })

    })

// 7
    app.get("/products/location/:product_id",(req,res)=>{
        product_id=req.params.product_id
        knex.product_location(product_id)
        .then((result)=>{
            res.send(result)
            console.log(result)
        })
        .catch((err)=>{
            res.send (err)
            console.log(err)
        })
    })        

}