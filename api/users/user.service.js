const connection = require("../../config/database");

module.exports = {
    create:(data,callback) =>{
        connection.query(`insert into users (id,email,isVerified,phone,fullName,location,image,userType,idProof,category,subCategory) values (?,?,?,?,?,?,?,?,?,?,?)`,
        [
            data.id,
            data.email,
            data.isVerified,
            data.phone,
            data.fullName,
            data.location,
            data.image,
            data.userType,
            data.idProof,
            data.category,
            data.subCategory
        ],
        (errors,results,fields) =>{
            if(errors){
                return callback(errors);
            }
            return callback(null,results);
        }
        );
    },

    getUsers: callback =>{
        connection.query(`select * from users`,[],(error,results,fields)=>{
            if(error){
                return callback(error);
            }
            else{
                return callback(null,results);
            }
        });
    },

    getUsersbystatus : (status,callback) =>{
        connection.query(`select * from users where isVerified = ? `,[status],
        (error,results,fields)=>{
            if(error){
                return callback(error);
            }
            else {
                return callback(null,results);
            }
        });
    },

    getUserById : (id,callback) =>{
        connection.query(`select * from users where id = ?`,[id],
        (error,results,fields) =>{
            if(error){
                return callback(error);
            }
            else{
                return callback(null,results);
            }
        });
    },

    updateUser : (id,data,callback)=>{
        connection.query(`update users set email = ? , isVerified = ? , phone = ? , fullName = ? , location = ? , image = ? , userType = ? , idProof = ? , category = ? , subCategory = ? where id = ?`,
        [
            data.email,
            data.isVerified,
            data.phone,
            data.fullName,
            data.location,
            data.image,
            data.userType,
            data.idProof,
            data.category,
            data.subCategory,
            id
        ],(error,results,fields)=>{
            if(error){
                return callback(error);
            }
            else{
                return callback(null,results);
            }
        });
    },

    deleteUser: (id,callback) =>{
        connection.query(`delete from users where id = ?`,[
            id
        ],(error,results,fields) => {
            if(error){
                return callback(error);
            }
            else{
                return callback(null,results);
            }
        });
    },

    getuserbylocation: (location,callback) =>{
        connection.query(`select * from users where location = ?`,[
            location
        ],(error,results,fields)=>{
            if(error){
                return callback(error);
            }
            else{
                return callback(null,results);
            }
        });
    },

    getusersbycategory: (category,callback)=>{
        connection.query(`select * from users where category = ?`,[
            category
        ],(error,results,fields)=>{
            if(error){
                return callback(error);
            }
            else{
                return callback(null,results);
            }
        });
    },

    getusersbysubcategory : (subCategory,callback)=>{
        connection.query(`select * from users where subCategory = ?`,[
            subCategory
        ],(error,results,fields)=>{
            if(error){
                return callback(error);
            }
            else{
                return callback(null,results);
            }
        });
    },

    getuserbylocationandcategory: (data,callback)=>{
        connection.query(`select * from users where location = ? and category = ?`,[
            data.location,
            data.category
        ],(error,results,fields)=>{
            if(error){
                return callback(error);
            }
            else{
                return callback(null,results);
            }
        });
    },

    getuserbylocationandsubcategory : (data,callback)=>{
        connection.query(`select * from users where location = ? and subCategory = ?`,[
            data.location,
            data.subCategory
        ],(error,results,fields)=>{
            if(error){
                return callback(error);
            }
            else{
                return callback(null,results);
            }
        });
    },

    getuserbycategoryandsubcategory : (data,callback)=>{
        connection.query(`select * from users where category = ? and subCategory = ?`,[
            data.category,
            data.subCategory
        ],(error,results,fields)=>{
            if(error){
                return callback(error);
            }
            else{
                return callback(null,results);
            }
        });
    },

    getusersbylocationcategoryandsubcategory: (data,callback)=>{
        connection.query(`select * from users where location = ? and category = ? and subCategory = ?`,[
            data.location,
            data.category,
            data.subCategory
        ],(error,results,fields)=>{
            if(error){
                return callback(error);
            }
            else{
                return callback(null,results);
            }
        });
    }

    
};