const knex = require('../model/customers_quries')

module.exports = (app, jwt) =>{ 
// 3

    app.post('/customer/register',(req,res) => {
        customer_details = {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        }
        knex.post_data_in_customer_table(customer_details)
            .then((result) => {
                res.send(result)
                console.log("data_posted")
            })
            .catch((err) => {
                res.send(err)
                console.log(err)
            })
    });

// 4
    app.post('/custmors/login',(req,res)=>{
        let email = req.body. email;
        let password = req.body.password;
        knex.varify_email(email)
        .then((result)=>{
            objectLength = result.length 
            var password_varify = result[0].password;
            console.log()
            if (result.length != 0 ){
                 if (password == password_varify){
                    var token = jwt.sign({"token":result[0].customer_id}, 'priya');
                    res.cookie(token)
                    res.send( token)
                }
                else{
                    console.log('wrong password');  
                }
            }
            else {
                console.log("wrong email")
                }
            })

        .catch ((err)=>{
        res.send (err)
        console.log(err)


    })

})

// 6

    app.put("/customers/address/:customer_id",(req,res)=>{
        let customer_id  = req.params.customer_id;
        // let customer_details = {
        //     address_1 :req.body.address_1 ,
        //     address_2 :req.body.address_2 
        // }
        knex.update_the_address(customer_id,req.body)
        .then((update)=>{
            console.log("updated address");

            res.json(update)
        })
        .catch((err)=>{
            res.send(err) 
            console.log(err);
            
        })
    })

// 7

    app.put("/customers/creditCard/:customer_id",(req,res)=>{
        let customer_id  = req.params.customer_id;

        knex.update_the_creditCard(customer_id,req.body)
            .then((update)=>{
                console.log("updated creditCards");

                res.json(update)
            })
            .catch((err)=>{
                res.send(err)
                console.log(err);
        
        })

    })

 // 2

    app.get("/customer/:customer_id",(req,res)=>{
        let customer_id  = req.params.customer_id;
        let token = req.headers.cookie
        // console.log(token)
        var varify_token = token.split('=',1)
        console.log(varify_token)
    
        jwt.verify(varify_token,'priya',(err,result)=>{
            knex.get_customers_data(customer_id)
            .then((Data) => {
                res.send(Data)
                console.log("successfully done")
            }).catch((err) => {
                res.send(err)
                console.log(err)
            })
        })
        
    })
}

