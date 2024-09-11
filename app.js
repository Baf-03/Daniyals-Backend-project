import  express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/index.js";
import { v2 as cloudinary } from 'cloudinary';
import env from "dotenv";
env.config();

cloudinary.config({
  cloud_name: 'dih6gzzhk',
  api_key: '553388149965484',
  api_secret: '0umYW6KOYp9ZO4_1ZteptavElNY'
});

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(router)

mongoose.connect("mongodb+srv://bilal:bilal@shopco.h9mg6.mongodb.net/?retryWrites=true&w=majority&appName=ShopCo");
mongoose.connection.on("connected",()=>console.log("Db connected !"));
mongoose.connection.on("error",(error)=>console.log("error"+error));


app.get('/', (req, res) => {
  res.send('Express JS on Vercel')
})

app.listen(PORT, () => {
    console.log(`Server Is Running On localhost:${PORT}`);
  });
