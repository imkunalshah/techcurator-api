const {create,del,update,getCategories} = require("./category.service");

module.exports = {
    createCategory:(req,res)=>{
        const body = req.body;

        create(body,(error,result)=>{
            if(error){
                console.log(error);
                return res.status(400).json({
                    status:0,
                    message:"error",
                    data:error
                });
            }
            else{
                return res.status(200).json({
                    status:1,
                    message:"status",
                    data:result
                });
            }
        });
    },

    Delete:(req,res)=>{
        const categoryName = req.params.categoryName;
        del(categoryName,(error,result)=>{
            if(error){
                console.log(error);
                res.status(400).json({
                    status:0,
                    message:"error",
                    data:error
                });
            }
        });
    },

    Update:(req,res)=>{
        const category = req.params.categoryName;
        const body = req.body;

        update(category,body,(error,result)=>{
            if(error){
                console.log(error);
                return res.status(400).json({
                    status:0,
                    message:"error",
                    data:error
                });
            }
            else{
                return res.status(200).json({
                    status:1,
                    message:"success",
                    data:result
                });
            }
        });
    },

    get:(req,res)=>{
        getCategories((error,result)=>{
            if(error){
                console.log(error);
                return res.status(400).json({
                    status:0,
                    message:"error",
                    data:error
                });
            }
            else{
                var results = JSON.parse(JSON.stringify(result));
                return res.status(200).json({
                    status:1,
                    message:"success",
                    data:results
                });
            }
        });
    }
};