const CategoryModel = require('../Model/CategoryModel')

//Add Category
module.exports.addCategory = async function(req,res){

   let  CategoryName = new CategoryModel(req.body)
   console.log(CategoryName);

   let data = await CategoryName.save()

   res.json({data:data,msg:'Category Added',rcode:200})


}

//get AllCategory
module.exports.getAllCategory = function(req,res){

    CategoryModel.find().then((data)=>{
        res.json({data:data,msg:'All Category retrived',rcode:200})
    }).catch((err)=>{
        res.json({data:err,msg:'smw',rcode:-9})
    })

}


    //delete category 
module.exports.deleteCategory = function(req,res){

    let CategoryId = req.params.CategoryId

    
    CategoryModel.findByIdAndDelete({_id:CategoryId}).then((data)=>{

        res.json({data:data,msg:' Category deleted',rcode:200})

    }).catch((err)=>{
        res.json({data:err,msg:'smw',rcode:-9})

    })

}

 //update category 
module.exports.updateCategory = function(req,res){

    let CategoryId = req.params.CategoryId
    let CategoryName = req.body.CategoryName

    CategoryModel.findByIdAndUpdate({_id:CategoryId},{"CategoryName":CategoryName}).then( async (data)=>{
          
        await res.json({data:data,msg:'Category Updated',rcode:200})

    }).catch((err)=>{
        res.json({data:err,msg:'smw',rcode:-9})
    })

}




