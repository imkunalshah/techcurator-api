const {create,getUsers,getUserById,updateUser} = require("./user.service");
const {sign} = require("jsonwebtoken");
require('dotenv').config();
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
    login:(req,res) => {
        const body = req.body;
        getUserById(body.user_id,(error,resu)=>{
            if(error){
                return res.status(400).json({
                    status : 0,
                    message : error
                });
            }
            else if(!resu[0]){
                return res.status(400).json({
                    status: 0,
                    message:"User Not Found"
                });
            }
            else{
                if(body.status == true){
                    const jwt = sign({result : resu[0]},"qwe1234",{
                        // expiresIn : Infinity
                    });
                    return res.status(200).json({
                        status : 1,
                        message: "Login Successful !",
                        token : jwt
                    });
                }
                else{
                    return res.status(400).json({
                        status:0,
                        message:"Error !!"
                    });
                }
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