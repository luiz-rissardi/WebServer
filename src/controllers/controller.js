

class CrudController {
    database;
    constructor(connection){
        this.database = connection;
    }

    Select(req,res){
        this.database.query("select * from conversa2",(err,data)=>{
            res.json(data.rows)
        })
    }
}

export {
    CrudController
}