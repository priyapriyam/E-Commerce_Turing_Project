const knex = require('./data_base_connection')


let get_data =()=>{
    return knex.select("shipping.shipping_region_id","shipping_region.shipping_region").from ("shipping")
    .join ('shipping_region','shipping.shipping_region_id',"=",'shipping_region.shipping_region_id')

}


let data_get_by_id=(shipping_region_id) =>{
    return knex.select("shipping.shipping_id","shipping.shipping_type","shipping.shipping_cost","shipping.shipping_region_id")
    .from ("shipping")
    .join ('shipping_region','shipping.shipping_region_id',"=",'shipping_region.shipping_region_id')
    .where('shipping.shipping_region_id',shipping_region_id)


}

module.exports ={ get_data,data_get_by_id}