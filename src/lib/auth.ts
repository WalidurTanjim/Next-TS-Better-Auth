import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const MDB_URI = process.env.M_DB_URI;
if(!MDB_URI) {
    throw new Error("Please define the M_DB_URI environment variable inside .env");
}

const client = new MongoClient(MDB_URI);
const db = client.db();

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        client,
    }),
});