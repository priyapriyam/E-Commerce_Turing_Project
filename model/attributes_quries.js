const knex = require('./data_base_connection')

// 1
let get_data_of_Attribute_table = ()=>{
    return knex.select("*").from('attribute')
}

// 2

let get_data_by_attribute_id = (attribute_id)=>{
    return knex.select("*").from ('attribute').where ('attribute_id',attribute_id)

}

// 3
let read_data_by_id=(attribute_id)=>{
    return knex.select('attribute_value.attribute_id','attribute_value.value') .from ('attribute_value').where ('attribute_id',attribute_id)
}

// 4

let get_data_by_product_id = (product_id)=>{
    return knex.select ("attribute.name","attribute_value.attribute_value_id","attribute_value.value")
    .from('attribute')
    .join ('attribute_value','attribute.attribute_id', '=' ,'attribute_value.attribute_id')
    .join('product_attribute','attribute_value.attribute_value_id',"=",'product_attribute.attribute_value_id')
    .where ('product_attribute.product_id',product_id)
}
    
    



module.exports ={get_data_of_Attribute_table,get_data_by_attribute_id,read_data_by_id,get_data_by_product_id}