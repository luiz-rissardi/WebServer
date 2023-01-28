import express, {Router,json} from "express"
import http from "http"
import cors from "cors"

const app = express();
const router = Router();
http.createServer(app).listen()

app.use("/api",router)

app.listen("3000",()=>{
    console.log("funcionou")
})
