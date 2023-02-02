let express=require("express");
let router=express.Router()

let threeData=require("../mock/three.json")

router.get("/data",(req,res)=>{
    res.send({"msg":"three的路由地址",chartData:threeData})
})

module.exports=router;