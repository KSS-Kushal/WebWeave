import { User } from "@/models";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

const { default: DB } = require("@/db");

DB.getInstance().connect();

export const POST = async (request) => {
    try {
        const { phone, password } = await request.json();
        if (!phone || !password) {
            return NextResponse.json({success: false, message: "All fields are required"}, {status: 400});
        }
        const user = await User.findOne({phone});
        if(!user) return NextResponse.json({success: false, message: "Invalid credentials"}, {status: 401});
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return NextResponse.json({success: false, message: "Invalid credentials"}, {status: 401});
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        return NextResponse.json({success: true, message: "Login successful", user, token}, {status: 200});
    } catch (error) {
        console.log("Error to login: ", error);
        return NextResponse.json({success: false, message: "Internal Server Error"}, {status: 500});
    }
}