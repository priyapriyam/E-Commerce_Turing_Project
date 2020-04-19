const knex = require('./data_base_connection')
// 3
let post_data_in_customer_table = (customer_details) =>{
    return knex('customer').insert(customer_details)
}


let varify_email =(email) =>{
    return knex.select('*').from('customer').havingIn('customer.email',email)
};

let varify_password = (password) => {
    return knex.select('password').from('customer').havingIn('customer.password',password)
}



let update_the_address = (customer_id,address) => {
    return knex('customer').update({" address_1":address.address_1,"address_2":address.address_2})
    .where("customer_id",customer_id)
}

// here is used address_1 as a variable on postman i ma updating the data," address_1" - this is table field name.


let update_the_creditCard = (customer_id,creditCards) =>{
    return knex('customer').update({"credit_card":creditCards.credit_card})
    .where("customer_id",customer_id)
    
}


// 2
let get_customers_data = (customer_id)=>{
    return knex.select("*").from("customer").where('customer_id',customer_id)
}



module.exports = {post_data_in_customer_table,varify_email,varify_password, update_the_address,
                    update_the_creditCard,get_customers_data}



