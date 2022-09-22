import express from "express"


export const ticketRoutes = express.Router();


ticketRoutes.get("/",(req,res)=>{console.log('teste')});
