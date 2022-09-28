import express from "express"
import { ProjectController } from "../Controllers/ProjectController";


export const projectRoutes = express.Router();


projectRoutes.get("/",ProjectController.findAll);

projectRoutes.get("/:id",ProjectController.find);

projectRoutes.post("/",ProjectController.store);

projectRoutes.put("/",(req,res)=>{console.log('teste')});

projectRoutes.delete("/",(req,res)=>{console.log('teste')});