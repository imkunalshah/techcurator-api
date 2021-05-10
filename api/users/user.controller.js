const {create,getUsers,getUsersbystatus,getUserById,getuserbylocationandcategory,getuserbylocation,getusersbycategory,getusersbysubcategory,getuserbylocationandsubcategory,getuserbycategoryandsubcategory,getusersbylocationcategoryandsubcategory,updateUser} = require("./user.service");

module.exports = {
    createUser : (req,res) => {
        const body = req.body;
        
        create(body,(error,result)=>{
            if(error){
                console.log(error);
                return res.status(400).json({
                    status:0,
                    message:error
                });
            }
            return res.status(200).json({
                status: 1,
                message:"User created successfully",
                data : result
            });
        });
    },
    getusers : (req,res) =>{
        getUsers((error,result)=>{
            if(error){
                console.log(error);
                return res.status(400).json({
                    status:0,
                    data:error
                });
            }
            else{
                return res.status(200).json({
                    status:1,
                    message:"users get successfully",
                    data:result
                })
            }
        });
    },

    getuserbyid : (req,res) =>{
        const id = req.params.id;
        getUserById(id,(error,result) =>{
            if(error){
                return res.status(400).json({
                    status:0,
                    data:error
                });
            }
            else{
                return res.status(200).json({
                    status : 1,
                    message:"users by id get successfully",
                    data: result
                })
            }
        });
    },

    getuserbystatus : (req,res) =>{
        const status = req.params.status;

        getUsersbystatus(status,(error,result)=>{
            if(error){
                console.log(error);
                return res.status(400).json({
                    status:0,
                    message:"error fetching details",
                    data:error
                });
            }
            else{
                return res.status(200).json({
                    status:1,
                    message:"details fetched successfully",
                    data:result
                });
            }
        });
    },

    getUserbyLocationAndCategory: (req,res) =>{
        const params = req.params;
        getuserbylocationandcategory(params,(error,result)=>{
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

    getuserByLocation : (req,res) =>{
        const location = req.params.location;

        getuserbylocation(location,(error,result)=>{
            if(error){
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

    getuserByCategory : (req,res)=>{
        const category = req.params.category;
        getusersbycategory(category,(error,result)=>{
            if(error){
                res.status(400).json({
                    status:0,
                    message:"error",
                    data:error
                });
            }
            else{
                res.status(200).json({
                    status:1,
                    message:"success",
                    data:result
                });
            }
        });
    },

    getuserBySubCategory: (req,res)=>{
        const subcategory = req.params.subcategory;

        getusersbysubcategory(subcategory,(error,result)=>{
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

    getuserBylocationandsubcategory :(req,res)=>{
        const params = req.params;
        getuserbylocationandsubcategory(params,(error,result)=>{
            if(error){
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

    getuserBycategoryandsubcategory:(req,res)=>{
        const params = req.params;
        getuserbycategoryandsubcategory(params,(error,result)=>{
            if(error){
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

    getUsersByLocationAndCategoryAndSubcategory:(req,res)=>{
        const params = req.params;
        getusersbylocationcategoryandsubcategory(params,(error,result)=>{
            if(error){
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

    update:(req,res)=>{
        const id = req.params.id;
        const body = req.body;
        updateUser(id,body,(error,result)=>{
            if(error){
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
    }
}