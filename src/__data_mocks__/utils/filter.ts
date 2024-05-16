// id:1,
//         name:"Hasu",
//         price:"600",
//         startRent:"05/14/2024",
//         finishRent:"05/14/2024",
//         createdAt:"05/14/2024",
//         updateAt:"05/14/2024"


interface arrList {
    id:number;
    name:string;
    price:string;
    startRent:string;
    finishRent:string;
    createdAt:string;
    updateAt:string;
}

const filterCars = (arrList : arrList[],idItem: number)=>{
    return arrList.find(({id})=> id === idItem)
}

export default filterCars