"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const knex_1 = __importDefault(require("knex"));
const config_1 = require("./config");
console.log("config.DATABASE_URL", config_1.config.DATABASE_URL);
const db = (0, knex_1.default)({
    client: "pg",
    connection: config_1.config.DATABASE_URL,
    //@ts-ignore
    ssl: {
        rejectUnauthorized: false
    }
});
app_1.default.listen(config_1.config.PORT, () => {
    console.log(`Server listening at http://localhost:${config_1.config.PORT}`);
});
app_1.default.set("db", db);
//# sourceMappingURL=server.js.map