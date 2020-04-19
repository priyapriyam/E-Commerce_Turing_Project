const knex = require('./data_base_connection')


// 1
let post_data_in_shopping_cart_table = (shopping_cart_details) => {
    return knex('shopping_cart').insert(shopping_cart_details)
}

// 2

let shoppingcart_generateUniqueId = (details,cart_id) => {
    return knex("shopping_cart").where('cart_id',cart_id)
}

// 3

let get_data_by_cart_id = (cart_id) =>{
    return knex.select ("*") .from ("shopping_cart").where("cart_id",cart_id)
}

// 4


let update_date_by_item_id = (shopping_cart_details,item_id) => {
    return knex('shopping_cart').update(shopping_cart_details).where("item_id",item_id)
}

// 5


let delete_data_by_cart_id  = (cart_id)=>{
    return knex('shopping_cart').where("cart_id",cart_id).del()
} 

// 6


let get_data_by_item_id = (item_id) => {
    return knex('shopping_cart').where("item_id",item_id)
};


let data_inserted_in_new_table = (Insert_data_in_table) => {
    return knex('moveToCart').insert(Insert_data_in_table)
};

let deleted_data_of_shooping_cart_table = (item_id) => {
    return knex(' shopping_cart').where('shopping_cart.item_id',item_id).del()
};

// 7

let get_the_data =(cart_id)=>{

    return knex("shopping_cart")
    .join("product","shopping_cart.product_id", "=", "product.product_id")
    .select("shopping_cart.quantity","product.discounted_price")
    .where("cart_id",cart_id)
};


// 8

let get_the_data_by_item_id = (item_id) => {
    return knex('shopping_cart').where("item_id",item_id)
};


let data_inserted_in_saveForLater = (details) => {
    return knex('saveForLater').insert(details)
};

let deleted_the_data_of_shoopingCart_table = (item_id) => {
    return knex('shopping_cart').where('shopping_cart.item_id',item_id).del()
};

//9
let saved_Items_In_MoveToCart= (cart_id) => {
    return knex('moveToCart')
    .join('product','moveToCart .cart_id','=', 'product.product_id')
    .select('product.name','moveToCart.item_id','attributes','price')
    .where('cart_id',cart_id)
};


//10
let removeProduct_by_item_id = (item_id) => {
    return knex('shopping_cart').where('item_id',item_id).del()
};


module.exports = {post_data_in_shopping_cart_table, shoppingcart_generateUniqueId,
    get_data_by_cart_id,update_date_by_item_id,delete_data_by_cart_id,get_data_by_item_id,
    data_inserted_in_new_table,deleted_data_of_shooping_cart_table,get_the_data,
    get_the_data_by_item_id,data_inserted_in_saveForLater,deleted_the_data_of_shoopingCart_table,
    saved_Items_In_MoveToCart,removeProduct_by_item_id}