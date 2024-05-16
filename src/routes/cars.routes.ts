import{Router,Request,Response} from "express";
import{cars} from "../__data_mocks__/cars";
import filterCars from "../__data_mocks__/utils/filter";

const router =Router();

// get cars;

// router.get("/", (req,res)=>{
//     res.status(200).json({
//         cars
//     })
// })



router.get("/", (req : Request,res : Response)=>{
    res.status(200).json({
        cars
    })
})

// getspecifif car

router.get("/:id", (req:Request,res:Response) =>{
    const getId:number=Number(req.params.id);


    // bisa seperti ini
    // const carById = cars.find(({id})=> id === getId)
    // console.log({getId})

    // ini dengan metode memanggil
    const carById = filterCars (cars,getId)


    console.log({getId})
    
    res.status(200).json({
        car: carById
    })
})

// update/edit

router.put("/:id",(req:Request,res:Response)=>{
    const getId :number = Number(req.params.id);

    // bisa gini
    // const carById = cars.find(({id})=> id === getId)

    // pengulangan dengan panggilan
    const carById = filterCars (cars,getId);

    

    const updateCar = {...carById, name: "ToyotaCar", price: "1000000"}
    console.log({updateCar});

    res.status(204).json({
        status:"ok",
        message:"update succes",
        cars:updateCar
    })
    
})


export default router;