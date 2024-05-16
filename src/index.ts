import http from "http";
import express from "express";
import carsRouter from "./routes/cars.routes";

const port=3000;
const app= express();


app.use("/cars",carsRouter)


app.get("/", (req,res)=>{
    res.status(200).json ({
        message: "Hello"
    })
})

const server = http.createServer(app);
server.listen(port, ()=>{
    console.log(`Api gerak ${port}`)
    
})