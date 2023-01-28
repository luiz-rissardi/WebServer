 import { Router } from "express";

 const routes = Router()

 routes.route("/user").get((req,res)=>{
    const date = new Date()
    res.send({
        date
    })
 })