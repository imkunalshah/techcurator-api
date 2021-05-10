const connection = require("../../config/database");

module.exports = {
    create:(data,callback)=>{

        // var body = JSON.parse(data.subCategories[0]);

        connection.query(`insert into categories (categoryName,categoryDescription,subCategories) values (?,?,?)`,[
            data.categoryName,
            data.categoryDescription,
            JSON.stringify(data.subCategories)
        ],(errors,results,fields)=>{
            if(errors){
                return callback(errors);
            }
            else{
                return callback(null,results);
            }
        });
    },
    del :(categoryName,callback)=>{
        connection.query(`delete from categories where categoryName = ?`,[
            categoryName
        ],(errors,results,fields)=>{
            if(errors){
                return callback(errors);
            }
            else{
                return callback(null,results);
            }
        });
    },
    update : (categoryName,data,callback)=>{
        connection.query(`update categories set subCategories = ? where categoryName = ?`,[
            data.subCategories,
            categoryName
        ],(errors,results,fields)=>{
            if(errors){
                return callback(errors);
            }
            else{
                return callback(null,results);
            }
        });
    },
    getCategories: callback=>{
        connection.query(`select * from categories`,[],(errors,results,fields)=>{
            if(errors){
                return callback(errors);
            }
            else{
                return callback(null,results);
            }
        });
    }
};