import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import { config } from "./config";
import partyRouter from "./routes/party/party-router";
import guestRouter from "./routes/guests/guest-router";

const app = express();

const morganOption = config.NODE_ENV === "production" ? "tiny" : "common";
const apiKey = config.API_KEY;

// const jsonParser = express.json();
const verifyApiKey = (req, res, next) => {
    const apiKeyHeader = req.headers["x-api-key"];

    if (apiKeyHeader !== apiKey) {
        return res.status(401).send("Invalid credentials");
    }

    next();
};

app.use(cors());
app.use(morgan(morganOption));
app.use(helmet());
app.use("/party", verifyApiKey, partyRouter);
app.use("/guest", verifyApiKey, guestRouter);

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.use(function errorHandler(error, req, res, next) {
    let response;
    if (config.NODE_ENV === "production") {
        response = { error: { message: "server error" } };
    } else {
        console.error(error);
        response = { message: error.message, error };
    }
    res.status(500).json(response);
});

export default app;
