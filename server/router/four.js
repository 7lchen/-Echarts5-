let express=require("express");
let router=express.Router()

let fourData=require("../mock/four.json")

router.get("/data",(req,res)=>{
    res.send({"msg":"four的路由地址",chartData:fourData})
})

module.exports=router;