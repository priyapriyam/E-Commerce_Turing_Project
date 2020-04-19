const knex = require('./data_base_connection')


let get_all_taxes =()=>{
    return knex.select ("*") .from ("tax")
}



let get_taxes_by_tax_id =(tax_id)=>{
    return knex.select ("*").from ("tax").where ("tax_id",tax_id)
}

module.exports = {get_all_taxes, get_taxes_by_tax_id}