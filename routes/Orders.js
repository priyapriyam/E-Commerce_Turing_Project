const knex = require('../model/Orders_quries')


module.exports = (app) =>{

// 1
    app.post('/orders/:cart_id',(req,res)=>{
        cart_id=req.params.cart_id
        knex.totalAmount_orders(cart_id)
        .then((data)=>{
            var total_data = data[0]["quantity"] * data[0]["price"]
            let add = {
                "order_id": req.body.order_id,
                "total_amount" : total_data,
                "created_on" : new Date(),
                "shipped_on": new Date(),
                "status": req.body.status,
                "comments": req.body.comments,
                "customer_id": req.body.customer_id,
                "shipping_id" : req.body.shipping_id,
                "tax_id" : req.body.tax_id
                }
                knex.posted_data_in_order_Table(add)
                .then(()=>{
                    res.send('insert')
                }).catch((err)=>{
                    console.log(err)
                    res.send(err)
                })
        }).catch((err)=>{
            res.send(err)
        })
    })

// 2

    app.get('/orders/get_data/:order_id',(req,res)=> {
        let order_id = req.params.order_id
        knex.get_data_by_order_id(order_id)
        .then((data) => {
        // res.send(data)
        console.log(data)
        var unit_cost = data[0]["quantity"] * data[0]["price"]
        // console.log(unit_cost)
                let add = {
                item_id : data[0]['item_id'],
                order_id : data[0]['order_id'],
                product_id : data[0]['product_no'],
                attributes : data[0]['attributes'],
                quantity   : data[0]['quantity'],
                product_name : data[0]['name'],
                unit_cost : unit_cost 
                }     
                knex.orders(add)
                .then(()=>{
                    res.send("data inserted")
                    console.log("data posted in table")
                })
                .catch((err) => {
                    res.send(err)
                console.log(err)
                }) 
                let Orders_data = knex.get_the_order(order_id)
                        Orders_data.then((orderdata) => {
                            // res.send(orderdata)
                            var subtotal = orderdata[0]["quantity"]*orderdata[0]["price"]
                            // console.log(orderdata)
                            let allorders = {
                            order_id : orderdata[0]['order_id'],
                            product_id : orderdata[0]['product_no'],
                            attributes : orderdata[0]['attributes'],
                            product_name : orderdata[0]['product_name'],
                            quantity : orderdata[0]['quantity'],
                            unit_cost : orderdata[0]['unit_cost'],
                            subtotal : subtotal
                        }
                        console.log(Orders_data)
                    }).catch((err) => {
                        res.send(err)
                        console.log(err)
                    })
                
        })
        .catch((err)=>{
            res.send(err)
            console.log(err)
        })
    })

// 3

    app.get('/orders/inCustomer/',(req,res)=>{
        // customer_id = req.params.customer_id
        knex.get_order_by_customer_id()
        .then((data)=>{
            res.send(data)
            console.log(data)
        })
        .catch((err)=>{
            res.send(err)
            console.log(err)
        })
    })

// 4


    app.get('/orders/shortDetail/:order_id',(req,res)=>{
        order_id = req.params.order_id
        knex.some_details(order_id)
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        })
    })
}
    
    
