const knex = require('../model/shoppingcart_quries')
const randomString = require('random-string');
let generateUniqueId = randomString();
module.exports = (app) =>{


    // 1
    app.post('/shoppingcart/add/',(req,res)=>{
        // product_id = req.params.product_id
        let shopping_cart_details = {
            cart_id : req.body.cart_id,
            product_id:req.body.product_id,
            attributes:req.body.attributes,
            quantity : req.body.quantity,
            buy_now  : req.body.buy_now, 
            added_on :new Date()
        }
        knex.post_data_in_shopping_cart_table(shopping_cart_details)
        .then((result)=>{
            res.send(result)
            console.log(result)
        })
        .catch((err)=>{
            res.send(err)
            console.log(err)
        })

    })


    // 2


    app.get('/shoppingcart/generateUniqueId/:cart_id',(req,res)=>{
        var cart_id = req.params.cart_id
        let details = {
            cart_id : generateUniqueId
        }
        knex.shoppingcart_generateUniqueId(details,cart_id)
        .then(()=>{
            return res.send(details)
        })
        .catch((err)=>{
            res.send(err)
        })
    })

    // 3

    app.get('/shoppingcart/:cart_id',(req,res)=>{
        cart_id = req.params.cart_id
    
        knex.get_data_by_cart_id(cart_id)
        .then((result)=>{
            res.send(result)
            console.log(result)
        })
        .catch((err)=>{
            res.send(err)
            console.log(err)
        })
    })


    // 4
    app.put('/shopping/update/:item_id',(req,res)=>{
        var item_id=req.params.item_id
        let shopping_cart_details = {
            cart_id:req.body.cart_id,
            product_id:req.body.product_id,
            attributes:req.body.attribute,
            quantity:req.body.quantity
        }
        // res.send(shopping_cart_details)
        knex.update_date_by_item_id(shopping_cart_details,item_id)
        .then((data)=>{
            res.send('data')
            console.log(data)
        })
        .catch((err)=>{
            res.send(err)
            console.log(err)
        })
        
    })

    // 5

    app.delete('/shoppingcart/empty/:cart_id',(req,res) => {
        let cart_id = req.params.cart_id;
            knex.delete_data_by_cart_id(cart_id)
            .then(() => {
                res.send("data deleted")
            })
            .catch((err) => {
                res.send(err)
                    console.log("there is error")
            })
        })

    // 6


    app.get("/shoppingcart/moveToCart/:item_id",(req,res)=>{
        var item_id = req.params.item_id;
            var getData = knex.get_data_by_item_id(item_id)
                getData.then((data)=>{
            
                let Insert_data_in_table = {
                item_id : data[0]['item_id'],
                cart_id : data[0]['cart_id'],
                product_id : data[0]['product_id'],
                buy_now : data[0]['buy_now'],
                attributes : data[0]['attributes'],
                quantity : data[0]['quantity'],
                added_on :data[0]['added_on']
                }
                var posted_data = knex.data_inserted_in_new_table(Insert_data_in_table)
                posted_data.then((table_data)=>{
                    
                var deleted = knex.deleted_data_of_shooping_cart_table(item_id)
                    deleted.then((resps)=>{
                            res.send("Deleted...")
                    })
                    .catch((err)=>{
                        res.send(err)
                    })
                })
            })
            .catch((err)=>{
                res.send(err)
            })
        })

    // 7

    app.get("/shoppingcart/totalAmount/:cart_id",(req,res) => {
        cart_id =req.params.cart_id
        knex.get_the_data(cart_id)
        .then((data) => {
            var total_data = {
                totalAmount : data[0]["quantity"]*data[0]["discounted_price"]
             }
            res.send(total_data)
            })
            .catch((err) => {
                res.send(err)
        })
    
    }) 
    
    // 8
    
    app.get("/Shoopingcart/saveForLater/:item_id",(req,res)=>{
        item_id = req.params.item_id 
            var getData = knex.get_the_data_by_item_id(item_id)
                getData.then((result)=>{
                // console.log(result)
                var details = {
                    item_id : result[0]['item_id'],
                    cart_id : result[0]['cart_id'],
                    product_id : result[0]['product_id'],
                    buy_now : result[0]['buy_now'],
                    attributes : result[0]['attributes'],
                    quantity : result[0]['quantity'],
                    added_on :result[0]['added_on']}
                    var data = knex.data_inserted_in_saveForLater(details)
                    data.then((table_data)=>{
                    var deleted = knex.deleted_the_data_of_shoopingCart_table(item_id)
                    deleted.then((result)=>{
                        res.send("Deleted")
                    })
                    
                })
            })
            .catch((err)=>{
                res.send(err)
        })

    })

    // 9
    app.get("/shoppingcart/getSaved/:cart_id",(req,res)=>{
        cart_id = req.params.cart_id

        knex.saved_Items_In_MoveToCart(cart_id)
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            res.send(err)
        })
    })


    //10
    app.delete("/shoppingcart_removeProduct/:item_id",(req,res)=>{
        item_id = req.params.item_id
        knex.removeProduct_by_item_id(item_id)
        .then((result)=>{
            res.send()
            console.log("data deleted")
        })
        .catch((err)=>{
            res.send(err)
        })
    })
    

        
}
     
          

            
        

  

    
          
       


