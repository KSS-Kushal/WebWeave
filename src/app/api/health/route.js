import { NextResponse } from "next/server";

const { default: DB } = require("@/db");

DB.getInstance().connect();

export const GET = async (_req) => {
    return NextResponse.json({message: "API is healthy!"}, {status: 200});
}