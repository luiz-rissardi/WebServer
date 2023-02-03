

class PostGres{
    #Table
    constructor(client){
        this.#Table = client
    }

    async Conection(){
        try {
            const conection = await this.#Table.connect();
            console.log("banco conectado com sucesso")
            return  conection;
        } catch (error) {
            console.log("não foi possivel conectar no banco")
            return "não foi possivel conectar no banco"
        }
    }
}

export {
    PostGres
}