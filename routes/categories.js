
const knex = require('../model/categories_quries')

module.exports = (app) =>{ 

// 1
    app.get('/catagories',(req,res) =>{
        knex.category_data()
        .then ((result)=>{
            res.send (result)
            console.log("data is readble")
        })
        .catch((err)=>{
            res.send (err)
                console.log("error")
    })
})

// 2
    app.get('/categories/:product_id',(req,res) =>{

    product_id=req.params.product_id

        knex.category_data_get_by_data(product_id)
        .then((result)=>{
            res.send(result)
            console.log("data_read")
        })
        .catch((err)=>{
            res.send (err)
            console.log("show error")
    })
})

// 3
    app.get('/categories/inProduct/:product_id',(req,res)=>{
        var product_id = req.params.product_id
        // console.log(product_id)
        knex.read_data_by_category(product_id)
        .then((result)=>{
            res.send(result)
            console.log("data is readble")
        })
        .catch((err)=>{
            res.send (err)
            console.log(err)
    })
})

// 4

    app.get('/categories/inDepartment/:department_id',(req,res)=>{
        department_id=req.params.department_id  
        knex.get_data_by_Department_id(department_id)
        .then((result)=>{
            res.send(result)
            console.log("data_readble")
        })
        .catch ((err) =>{
            res.send (err)
            console.log(err)
        })

    })
};