import express from "express"


export const authRoutes = express.Router();


authRoutes.get("/",(req,res)=>{console.log('teste')});
