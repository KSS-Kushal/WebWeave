import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
    try {
        const requestHeaders = new Headers(request.headers);
        let token = requestHeaders.get("Authorization");
        if (!token || !token.startsWith("Bearer ")) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }
        token = token.substring(7);
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const {id} = (await jwtVerify(token, secret)).payload;
        if (!id) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        requestHeaders.set('x-user-id', id);

        // You can also set request headers in NextResponse.rewrite
        const response = NextResponse.next({
            request: {
                // New request headers
                headers: requestHeaders,
            },
        });
        return response;
    } catch (error) {
        console.log("Error in middlewares: ", error);
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}

export const config = {
    matcher: '/api/user:path*',
}
