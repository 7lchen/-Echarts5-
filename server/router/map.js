let express=require("express");
let router=express.Router()

let mapData=require("../mock/map.json")

router.get("/data",(req,res)=>{
    res.send({"msg":"map的路由地址",chinaData:mapData})
})

module.exports=router;