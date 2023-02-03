

class CrudController {
    database;
    constructor(connection){
        this.database = connection;
    }

    async Select(req,res){
        await this.database.query("select * from users",(err,data)=>{
            const dados = data.rows
            if(err){
                res.send({
                    err
                })
            }else{
                console.log("dados pegos com sucesso")
                res.send({
                    dados
                })
            }
        })
    }
}

export {
    CrudController
}