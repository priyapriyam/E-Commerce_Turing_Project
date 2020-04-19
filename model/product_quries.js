const knex = require('./data_base_connection')

// 1
get_data_of_product_table = ()=> {
    return knex.select("*") .from ("product")
}

// 2
let search_product = (search) => {
    return knex.select("product.product_id","name","description","price","discounted_price","thumbnail")
    .from('product').where('name','like',  '%' + search + '%')
}
 
// 3
let get_data_by_product_id = (product_id) => {
    return knex.select("*").from("product").where('product_id',product_id)
}

// 4

let get_data_by_category_id = (category_id) =>{
        return knex.select("product.product_id","product.name","product.description","product.price",
            "product.discounted_price","product.thumbnail")
            .from('product').join('product_category', 'product.product_id', '=', 'product_category.product_id')
            .where('category_id',category_id)
}

// 5

let get_data_by_departmet_id = (department_id) => {
        return knex.select("product.product_id","product.name","product.description","product.price",
        "product.discounted_price","product.thumbnail")
        .from('category')
        .join('product_category','category.category_id' ,"=",'product_category.category_id')
        .join('product','product_category.product_id',"=",'product.product_id')
        .where('department_id',department_id)
        
}  

// 6

let data_get_by_product_id = (product_id)=>{
        return knex.select("product.product_id","product.name","product.description","product.price",
        "product.discounted_price","product.image","product.image_2").from('product')
        .where('product_id',product_id)

}

// 7

let product_location = (product_id)=>{
        return knex.select('category.category_id','category.name as categry_name',
        'department.department_id','department.name as department_name')
        .from ('department')
        .join('category','department.department_id',"=",'category.department_id')
        .join('product_category','category.category_id',"=",'product_category.category_id')
        .where('product_category.product_id', product_id)
}

module.exports = { get_data_of_product_table, search_product, data_get_by_product_id,
    get_data_by_category_id, get_data_by_departmet_id,get_data_by_product_id,product_location }