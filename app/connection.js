const mongoose = require("mongoose");

function connectDB(){
  console.log("connecting..")

  const atlasURL=require("../config/keys")

    mongoose.connect(atlasURL, //test is the name of database
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );

  //After connection
  mongoose.connection
    .once("open", () => {
      console.log("Successfully Connected!");
    })
    .on("error", (error) => console.log("The error: ", error));

}

module.exports=connectDB