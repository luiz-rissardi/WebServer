 import { Router } from "express";

 class routes {
   #controller;
   Routers;
   constructor(controller){
      this.#controller = controller;
      this.Routers = Router()
   }

   CreateRoutes(){
      this.Routers.route("/user").get((req,res)=>{
         this.#controller.Select(req,res)
      })

      return this.Routers
   }
 }

 export {
    routes
 }