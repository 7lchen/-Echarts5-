let express=require("express");
let router=express.Router()
let oneData=require("../mock/one.json")

router.get("/data",(req,res)=>{
    res.send({"msg":"one的路由地址",chartData:oneData})
})

module.exports=router;