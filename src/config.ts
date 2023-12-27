import dotenv from "dotenv";
dotenv.config();

export const config = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || "development",
    DATABASE_URL: process.env.DATABASE_URL || "postgresql://michaela@localhost/wedding",
    API_KEY: process.env.API_KEY
};
