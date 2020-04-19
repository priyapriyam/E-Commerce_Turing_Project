const knex = require('./data_base_connection')

let get_data = () =>{
    return knex.select('*').from('department')
}

let get_by_id = (department_id) =>{
    return knex.select ("*").from ('department') .where ('department_id',department_id)
}


  

module.exports = { get_data, get_by_id }