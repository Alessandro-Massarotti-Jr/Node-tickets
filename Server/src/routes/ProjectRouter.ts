import express from "express"


export const projectRoutes = express.Router();


projectRoutes.get("/",(req,res)=>{console.log('teste')});
