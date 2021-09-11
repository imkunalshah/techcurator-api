const mongoose = require('mongoose');

const connectDB = async () => {
    const con = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        retryWrites:true,
        w: "majority"
    }, (err,res) => {
        if (!err) {
            console.log('Connected to MongoDB!!!')
        }
        else {
            console.log(err)
        }
        
    });

    // console.log(`MongoDB connected: ${con.connection.host}`);
}

module.exports = connectDB;