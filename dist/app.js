"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const config_1 = require("./config");
const party_router_1 = __importDefault(require("./routes/party/party-router"));
const guest_router_1 = __importDefault(require("./routes/guests/guest-router"));
const app = (0, express_1.default)();
const morganOption = config_1.config.NODE_ENV === "production" ? "tiny" : "common";
const apiKey = config_1.config.API_KEY;
// const jsonParser = express.json();
const verifyApiKey = (req, res, next) => {
    const apiKeyHeader = req.headers["x-api-key"];
    if (apiKeyHeader !== apiKey) {
        return res.status(401).send("Invalid credentials");
    }
    next();
};
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)(morganOption));
app.use((0, helmet_1.default)());
app.use("/party", verifyApiKey, party_router_1.default);
app.use("/guest", verifyApiKey, guest_router_1.default);
app.get("/", (req, res) => {
    res.send("Hello, world!");
});
app.use(function errorHandler(error, req, res, next) {
    let response;
    if (config_1.config.NODE_ENV === "production") {
        response = { error: { message: "server error" } };
    }
    else {
        console.error(error);
        response = { message: error.message, error };
    }
    res.status(500).json(response);
});
exports.default = app;
//# sourceMappingURL=app.js.map