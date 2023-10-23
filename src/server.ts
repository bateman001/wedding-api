import app from "./app";
import knex from "knex";
import { config } from "./config";

const db = knex({
    client: "pg",
    connection: config.DATABASE_URL,
    //@ts-ignore
    ssl: { rejectUnauthorized: false }
});

app.listen(config.PORT, () => {
    console.log(`Server listening at http://localhost:${config.PORT}`);
});

app.set("db", db);
