const knex = require('../model/department_quries')

module.exports = (app) =>{ 
    app.get('/departments',(req,res) => {
        knex.get_data()
        .then((result) =>{
            res.send(result)
            console.log("done")
        })
        .catch((err) => {
            res.send(err)
            console.log("error")
            })
        });

    app.get('/departments/:department_id',(req,res) =>{
            department_id=req.params.department_id
            knex.get_by_id (department_id)
            .then((result)=>{
                res.send (result)
                console.log("data is readble")
            })
            .catch((err)=>{
                res.send (err)
                console.log("err")
            })
        })
    
}