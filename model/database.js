const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
 

exports.databaseConnection = async () =>{

    try {
        await mongoose.connect(process.env.URL, () => {
            console.log("Connected to MongoDB") 
          })
        
    } catch (error) {
        if (error){
            console.log(error.message)
        }
        
    }

}


