const Product = require("../models/Product");
const {verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");

const router=require("express").Router();

//CREATE

router.post("/",verifyTokenAndAdmin,async(req,res)=>{
    const newProduct=new Product(req.body)

    try{
       const savedProduct=await newProduct.save();
       res.status(200).json(savedProduct)
    }
    catch(err){
        res.status(500).json(err)
    }

})

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//DELETE

router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
  try{
    
     await Product.findByIdAndDelete(req.params.id)
     res.status(200).json("user is deleted")
    

  }catch(err){
    res.status(500).json(err)
  }

})

//GET ALL PRODUCT{
  router.get("/find/:id",async(req,res)=>{
    try{
         const product=await Product.findById(req.params.id)  
         res.status(200).json(product);
    }catch(err){
      res.status(500).json(err)
    }
  })


  //GET ALL PRODUCT

    router.get("/",async(req,res)=>{
      const qnew=req.query.new
      const qcategory=req.query.category
      try{
           let product

           if(qnew){
             product=await Product.find().sort({createdAt:-1}).limit(1)
           }
           else if(qcategory){
              product=await Product.find({
                  categories:{
                      $in:[qcategory]
                  }
              })
           }
           else{
            product=await Product.find()
           }
           res.status(200).json(product);
           
      }catch(err){
        res.status(500).json(err)
      }
    })


module.exports=router
