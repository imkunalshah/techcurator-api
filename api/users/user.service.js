const connection = require("../../config/database");

module.exports = {
    create: (data, callback) => {
        connection.query(`insert into users (user_id,email,full_name,phone,date_joined,last_updated,user_type,deleted,last_login) values (?,?,?,?,?,?,?,?,?)`,
            [
                data.user_id,
                data.email,
                data.full_name,
                data.phone,
                data.date_joined,
                data.date_modified,
                data.user_type,
                data.deleted,
                data.last_login
            ],
            (errors, results, fields) => {
                if (errors) {
                    return callback(errors);
                }
                return callback(null, results);
            }
        );
    },

    getUsers: callback => {
        connection.query(`select * from users`, [], (error, results, fields) => {
            if (error) {
                return callback(error);
            } else {
                return callback(null, results);
            }
        });
    },

    // getUsersbystatus : (status,callback) =>{
    //     connection.query(`select * from users where isVerified = ? `,[status],
    //     (error,results,fields)=>{
    //         if(error){
    //             return callback(error);
    //         }
    //         else {
    //             return callback(null,results);
    //         }
    //     });
    // },

    getUserById: (id, callback) => {
        connection.query(`select * from users where user_id = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                } else {
                    return callback(null, results);
                }
            });
    },

    updateUser: (id, data, callback) => {
        if (data.email != null) {
            // update users set email = ? , isVerified = ? , phone = ? , fullName = ? , location = ? , image = ? , userType = ? , idProof = ? , category = ? , subCategory = ? where id = ?
            connection.query(`update users set email = ? , date_modified = ? where user_id = ?`,
                [
                    data.email,
                    data.date_modified,
                    id
                ], (error, results, fields) => {
                    if (error) {
                        return callback(error);
                    } else {
                        return callback(null, results);
                    }
                });
        } else if (data.full_name != null) {
            connection.query(`update users set full_name = ? , date_modified = ? where user_id = ?`,
                [
                    data.full_name,
                    data.date_modified,
                    id
                ], (error, results, fields) => {
                    if (error) {
                        return callback(error);
                    } else {
                        return callback(null, results);
                    }
                });
        } else if (data.phone != null) {
            connection.query(`update users set phone = ? , date_modified = ? where user_id = ?`,
                [
                    data.phone,
                    data.date_modified,
                    id
                ], (error, results, fields) => {
                    if (error) {
                        return callback(error);
                    } else {
                        return callback(null, results);
                    }
                });
        } else if (data.last_login != null) {
            connection.query(`update users set last_login = ? , date_modified = ? where user_id = ?`,
                [
                    data.last_login,
                    data.date_modified,
                    id
                ], (error, results, fields) => {
                    if (error) {
                        return callback(error);
                    } else {
                        return callback(null, results);
                    }
                });
        } else if (data.deleted != null) {
            connection.query(`update users set deleted = ? , date_modified = ? where user_id = ?`,
                [
                    data.deleted,
                    data.date_modified,
                    id
                ], (error, results, fields) => {
                    if (error) {
                        return callback(error);
                    } else {
                        return callback(null, results);
                    }
                });
        }
        else if(data.email != null && data.full_name != null && data.deleted != null && data.last_login != null && data.phone != null){
            connection.query(`update users set full_name = ? , email = ? , phone = ? , deleted = ? , last_login = ? ,date_modified = ? where user_id = ?`,
                [
                    data.full_name,
                    data.email,
                    data.phone,
                    data.deleted,
                    data.last_login,
                    data.date_modified,
                    id
                ], (error, results, fields) => {
                    if (error) {
                        return callback(error);
                    } else {
                        return callback(null, results);
                    }
                });
        }
        else{
            return callback(null,"Error !!");
        }
    }

    // deleteUser: (id, callback) => {
    //     connection.query(`delete from users where id = ?`, [
    //         id
    //     ], (error, results, fields) => {
    //         if (error) {
    //             return callback(error);
    //         } else {
    //             return callback(null, results);
    //         }
    //     });
    // },
};