import express from "express"


export const routes = express.Router();


routes.get("/", async (req, res) => {

    return res.status(201).json({teste:"Node Tickets"});
})


routes.use('/teste',routes.use('/bbb',
        routes.get('/teste',(req,res)=>{
            return res.status(201).json({ola:"teste"});
        })
       
    )
)