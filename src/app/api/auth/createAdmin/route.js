import { User } from "@/models";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const { default: DB } = require("@/db");

DB.getInstance().connect();

export const GET = async (_request) => {
    try {
        const phone = process.env.ADMIN_PHONE;
        const admin = await User.findOne({ phone });
        if (admin)
            return NextResponse.json(
                { success: true, message: "Admin already exists" },
                { status: 200 }
            );
        const password = "Kushal@123";
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            name: "Kushal",
            phone,
            password: hashedPassword,
        });
        return NextResponse.json(
            { success: true, message: "Admin created successfully", user },
            { status: 201 }
        );
    } catch (error) {
        console.log("Error to create admin: ", error);
        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
};
