

class CrudController {
    database;
    constructor(connection){
        this.database = connection;
    }

    Select(req,res){
        const date = new Date()
        res.json({
            data:this.database
        })
    }
}

export {
    CrudController
}