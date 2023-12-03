import mongoose from 'mongoose';
export const connection=async(username,password)=>{
    const URL = `mongodb://${username}:${password}@ac-echnzcn-shard-00-00.phoasbo.mongodb.net:27017,ac-echnzcn-shard-00-01.phoasbo.mongodb.net:27017,ac-echnzcn-shard-00-02.phoasbo.mongodb.net:27017/?ssl=true&replicaSet=atlas-cd5zot-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
     await mongoose.connect(URL,{useNewUrlParser:true});
     console.log("Database connected sucessfully")
    }catch(error){
     console.log("error will connecting",error);
    }
}
export default  connection;
