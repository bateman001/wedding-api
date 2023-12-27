import dotenv from "dotenv";
dotenv.config();

const pgConfig = {
    migrationsDirectory: "migrations",
    driver: "pg",
    currentSchema: "public",
    connectionString: process.env.DATABASE_URL
};

export default pgConfig;
