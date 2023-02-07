

class CrudController {
    database;
    constructor(connection){
        this.database = connection;
    }

    Select(req,res){
        res.json({
            date:new Date()
        })
    }
}

export {
    CrudController
}