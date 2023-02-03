

class PostGres{
    #Table
    constructor(client){
        this.#Table = client
    }

    async Conection(){
        try {
            const conection = await this.#Table.connect();
            return  conection;
        } catch (error) {
            return error
        }
    }
}

export {
    PostGres
}