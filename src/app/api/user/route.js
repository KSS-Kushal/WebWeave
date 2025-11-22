import { NextResponse } from "next/server";

const { default: DB } = require("@/db");

DB.getInstance().connect();

export const GET = async (request) => {
    try {
        const userId = request.headers.get("x-user-id");
        console.log("UserId: ", userId);
        return NextResponse.json({success: true, userId}, {status: 200});
    } catch (error) {
        console.log("Error to fetch users: ", error);
        return NextResponse.json({success: false, message: "Internal Server Error"}, {status: 500});
    }
}