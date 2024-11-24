import express from "express";
import path from "path";
import morgan from "morgan";
import { URLShortingRouter } from "./routes/urlShorting";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// configure node to use ejs for views
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", URLShortingRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
