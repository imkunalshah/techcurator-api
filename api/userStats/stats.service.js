const connection = require("../../config/database");

module.exports = {
    create:(data,callback) =>{

        var body = data;

        const all = JSON.stringify(body.all_requests);
        const sent = JSON.stringify(body.sent_requests);
        const recieved = JSON.stringify(body.recieved_requests);

        connection.query(`insert into stats (id,all_requests_count,sent_requests_count,recieved_requests_count,all_requests,sent_requests,recieved_requests) values (?,?,?,?,?,?,?)`,
        [
            data.id,
            data.all_requests_count,
            data.sent_requests_count,
            data.recieved_requests_count,
            all,
            sent,
            recieved
        ],
        (errors,results,fields) =>{
            if(errors){
                return callback(errors);
            }
            return callback(null,results);
        }
        );
    },

    getbyid:(id,callback)=>{
        connection.query(`select * from stats where id = ?`,
        [
            id
        ],(errors,results,fields)=>{
            if(errors){
                return callback(errors);
            }
            else{
                return callback(null,results);
            }
        });
    },

    update:(id,data,callback)=>{
        var body = data;

        const all = JSON.stringify(body.all_requests);
        const sent = JSON.stringify(body.sent_requests);
        const recieved = JSON.stringify(body.recieved_requests);

        connection.query(`update stats set all_requests_count = ? , sent_requests_count = ? , recieved_requests_count = ? , all_requests = ? , sent_requests = ? , recieved_requests = ? where id = ?`,[
            data.all_requests_count,
            data.sent_requests_count,
            data.recieved_requests_count,
            all,
            sent,
            recieved,
            id
        ],(errors,results,fields)=>{
            if(errors){
                return callback(errors);
            }
            else{
                return callback(null,results);
            }
        });
    }
    
};