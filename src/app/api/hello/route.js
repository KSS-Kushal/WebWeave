import DB from "@/db";
import { NextResponse } from "next/server";

DB.getInstance().connect();

export const GET = async (req) => {
    return NextResponse.json({message: "Hello, world!"}, {status: 200});
}