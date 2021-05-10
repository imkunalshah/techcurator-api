const {create,getbyid,update} = require("./stats.service");

module.exports = {
    createStats : (req,res) => {
        const body = req.body;
        create(body,(error,result)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    status:0,
                    message:error
                });
            }
            return res.status(200).json({
                status: 1,
                message:"Stats created successfully",
                data : result
            });
        });
    },

    get:(req,res)=>{
        const id = req.params.id;
        getbyid(id,(error,result)=>{
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
    Update : (req,res)=>{
        const id = req.params.id;
        const body = req.body;
        update(id,body,(error,result)=>{
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