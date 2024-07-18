const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://mithun_fsd:fullstack@cluster0.qtzvjzu.mongodb.net/produts?retryWrites=true&w=majority&appName=Cluster0";
const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
