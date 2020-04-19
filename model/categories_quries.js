const knex = require('./data_base_connection')

// 1
let category_data = () =>{
    return knex.select ("*").from('category')
}

// 2

let category_data_get_by_data = (product_id) =>{
    return knex.select ("*"). from ('category') .where('product_id',product_id)
}

// 3

let read_data_by_category = (product_id)=>{
  return knex.select("category.category_id","department_id","name")
  .from('category').join('product_category', 'category.category_id', '=', 'product_category.category_id')
  .where('product_category.product_id',product_id)
  
  
}

// 4

let get_data_by_Department_id =(department_id) =>{
  return knex.select("category.name","category.description","category.category_id","category.department_id")
   . from ('category').join ('department','category.department_id', '=', 'department.department_id')
   .where('department.department_id',department_id)
}


  
module.exports = {category_data, category_data_get_by_data, read_data_by_category,get_data_by_Department_id}