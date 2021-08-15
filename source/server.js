// Core
import express from "express";
// import bodyParser from "body-parser";
//Routers
import * as routers from "./routers";

const app = express();

//ex body-parser
app.use(express.json({ limit: "10kb" }));

//Routes
app.use("/auth", routers.auth);
app.use("/users", routers.users);
app.use("/classes", routers.classes);
app.use("/lessons", routers.lessons);

export { app };
