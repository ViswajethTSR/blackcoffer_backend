import express from "express";
import './models/mongo_connect';
import bodyParser from "body-parser";
import cors from 'cors';
import  getAllBlackcoffer from "./routes/blackcoffer_routes";


export const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use(cors());



app.use('/api',getAllBlackcoffer);

app.get('/', (req, res) => {
    res.send("<body> Hi !! This is Viswajeth, Welcome to Blackcoffer Server !! Server is live now</body>");
});


app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})