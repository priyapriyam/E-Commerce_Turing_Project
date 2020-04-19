const knex = require('./data_base_connection')

// 1
let totalAmount_orders = (cart_id)=>{
    return knex("shopping_cart")
    .join("product","shopping_cart.product_id","=","product.product_id")
    .select("shopping_cart.quantity","product.price")
    .where("cart_id",cart_id)
};

let posted_data_in_order_Table = (add)=>{
    return knex('orders').insert(add)
};



// 2
let get_data_by_order_id = (order_id) => {

    return knex.select("orders.order_id","shopping_cart.attributes","shopping_cart.quantity",
    "shopping_cart.item_id",
    "product.product_id as product_no","product.name","product.price")
    .from('shopping_cart')
    .join('orders', {'order_id': 'shopping_cart.item_id'})
    .from ('shopping_cart')
    .join ('product',{'item_id': 'shopping_cart.cart_id'})
    
    .where("order_id", order_id)
};

let orders = (add) => {
    return knex('order_detail').insert(add)
}


let get_the_order = (order_id) => {
    return knex.select("product.product_id","name","discounted_price","order_detail.order_id",
    "attributes","product_name","quantity","unit_cost")
    .from('product')
    .join('order_detail',{'order_id': 'product.product_id'})
    .where("order_id",order_id)

}

// 3
let get_order_by_customer_id = () => {
    return knex.select("orders.order_id","total_amount","created_on",
    "shipped_on","status","customer.name")
    .from ('orders')
    .join("customer","orders.order_id","=","customer.customer_id")
    
}


    
// 4

let some_details =(order_id) =>{
    return knex .select("*") .from ("orders")
    .where("order_id",order_id)
}

module.exports = {totalAmount_orders,posted_data_in_order_Table,
    get_data_by_order_id,orders,get_the_order, get_order_by_customer_id,some_details
}