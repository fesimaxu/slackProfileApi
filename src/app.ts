import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import config from "./config";


const { PORT } = config;




const app = express();




app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(cookieParser());



const BUILD_PORT = PORT;


app.listen(BUILD_PORT || 2000, () => {
    console.log(`profile api is running at http://localhost:${BUILD_PORT}`)
});









export default app;