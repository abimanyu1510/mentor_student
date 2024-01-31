import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import userRoutes from './src/routes/users.js';
import HomeRoutes from "./src/routes/home.js"
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://Abimanyu:Asalabi1510@cluster0.oar3qes.mongodb.net/");
const db = mongoose.connection;

app.use('/', HomeRoutes);
//  app.use('/users',userRoutes)



app.listen(PORT, () => {console.log(`App Listenning Port ${PORT}`)});