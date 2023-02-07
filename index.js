// server
import express, { Router, json } from "express"
import Limit from "express-rate-limit"
import http from "http"
import cors from "cors"
import dotenv from "dotenv"
import pkg from "pg"
const { Pool } = pkg

//src
import { routes } from "./src/routes/routes.js"
import { PostGres } from "./src/database/datbase.js"
import { CrudController } from "./src/controllers/controller.js"



const exp = express();

const RateLimit = Limit({
    windowMs: 1 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});

const client = new Pool({
    user: "postgres",
    password: "13012006",
    port: 5050,
    database: "userChat",
})



class App {
    #Application;
    #Routes;
    #config;
    constructor(express, route) {
        this.#Application = http.createServer(express);
        this.#Routes = route;
        this.#config = express;
    }

    InitApp() {
        this.#config.use(json())
        this.#config.use(cors())
        this.#config.use("/api", RateLimit)
        this.#config.use("/api", this.#Routes);
        this.#Application.listen(3030, () => {
            console.log("server logado")
        });
    }
}

async function init() {
    dotenv.config()
    const database = new PostGres(client);
    const table = await database.Conection();
    const controller = new CrudController(table);
    const routers = new routes(controller).CreateRoutes();
    const app = new App(exp, routers);
    app.InitApp();
}
init()



/*

class App{
    #Application;
    #Routes;
    #DataBase;
    #config;
    constructor(express,routes,dba){
        this.#Application = http.createServer(express);
        this.#Routes = routes;
        this.#DataBase = dba;
        this.#config = express;
    }

    InitApp(){
        this.#config.use(json())
        this.#config.use(cors())
        this.#config.use("/api",this.#Routes);
        this.#config.use("/api",rateLimit)
        this.#Application.listen(3000,()=>{
            console.log("server logado")
        });
    }
}

const database = new PostGres()
const app = new App(exp,Routes,database)
app.InitApp()














const { Pool } = require("pg")


const users = new Pool({
    user:"postgres",
    password:"13012006",
    port:5050,
    database:"userChat"
})

const datas = [
    {"nome":"luiz"},
    {"tester":"ola mundo"}
]


users.connect()

let data = [
    {nome:"luiz ola muito boa"},
    {tercio:"testeugwweg"}
]

data = JSON.stringify(data)

users.query(`insert into conversa values (492903, '${data}')`)*/