const Cart=require("../models/Cart");
const { verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin } = require("./verifyToken");
const router=require("express").Router();

//CREATE
router.post("/",verifyToken,async(req,res)=>{
    const cartItem=new Cart(req.body)

    try{
        const savedItem=await cartItem.save()
        res.status(200).json(savedItem)
    }catch(err){
        res.status(500).json(err)
    }
})


//UPDATE

router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try{
        const updateCart=await Cart.findByIdAndUpdate(req.params.id,
            {
                $set:req.body,
            },
            {new:true}
            );
            res.status(200).json(updateCart)
    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE

router.delete("/id",verifyTokenAndAuthorization,async(req,res)=>{
   try{
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json("your product is removed")
   }catch(err){
       res.status(500).json(err)
   }

})

//GET USER CART
router.get("/find/:userId",verifyTokenAndAuthorization,async(req,res)=>{
    try{
      const cart=await Cart.findOne({userId:req.params.userId})
      res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
}

})


//GET ALL 
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try{
      const cartItem=await Cart.find()
      res.status(200).json(cartItem)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports=router;