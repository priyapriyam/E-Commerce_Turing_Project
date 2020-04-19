var knex = require ("knex")({
    client : 'mysql',
    connection:{
        host :"127.0.0.1",
        user:"root",
        password:"password",
        database: "Turing_Project"
    },
    useNullAsDefault: true
})
module.exports = knex;
knex.schema.hasTable("moveToCart").then((exists)=>{
    if (!exists){
        return knex.schema.createTable("moveToCart",(table)=>{
            table.increments('item_id' ),
            table.string( 'cart_id' ),
            table.integer('product_id' ),
            table.string('attributes'),
            table. integer('quantity'),
            table.integer('buy_now '),
            table.string ('datetime')
        })
    .catch((err)=>{
        console.log(err)
        })
    }
    return console.log("table has created")
})

knex.schema.hasTable("saveForLater").then((exists)=>{
    if (!exists){
        return knex.schema.createTable("saveForLater",(table)=>{
            table.increments('item_id' ),
            table.string( 'cart_id' ),
            table.integer('product_id' ),
            table.string('attributes'),
            table. integer('quantity'),
            table.integer('buy_now '),
            table.  datetime('added_on')
        })
    .catch((err)=>{
        console.log(err)
        })
    }
    return console.log("table has created")
})


