import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});

const mongoURL =
  "mongodb+srv://rkorense:rkorense@cluster0.39slsfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.Promise = Promise;

mongoose.connect(mongoURL);
mongoose.connection.on("error", (error: Error) => console.log(error));
