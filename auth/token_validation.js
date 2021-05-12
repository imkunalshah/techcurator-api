const {verify} = require("jsonwebtoken");

module.exports = {
    checkToken:(req,res,next)=>{
        let token = req.get("authorization");
        if(token){
            token = token.slice(7);
            verify(token,"qwe1234",(error,decoded)=>{
                if(error){
                    res.status(400).json({
                        status:0,
                        message:"Error"
                    });
                }
                else{
                    next();
                }
            });
        }else{
            res.status(400).json({
                status:0,
                message:"Error"
            });
        }
    }
};