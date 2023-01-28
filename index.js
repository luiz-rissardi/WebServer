import express, {json} from "express"
import { routes } from "./src/routes/routes.js";
import cors from "cors"


const app = express();
app.use(json())
app.use(cors())
app.use("/api",routes)

app.listen("3000",()=>{
    console.log("funcionou")
})
