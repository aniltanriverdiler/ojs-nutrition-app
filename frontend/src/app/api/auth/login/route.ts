import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function POST(request: Request) {
  try {
    // Get the data coming from the frontend
    const body = await request.json();
    const { email, password } = body;

    // Convert the data to the format required by the backend
    const backendPayload = {
      username: email,
      password: password,
      api_key: API_KEY,
    };

    console.log("Sending Data (Payload):", backendPayload);

    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(backendPayload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Backend API Error:", data);
      // Return the error message to the frontend
      return NextResponse.json(data, { status: res.status });
    }

    // Save the token in an HttpOnly Cookie
    const token = data?.access_token || data?.token || data?.access;
    const refreshToken = data?.refresh_token || data?.refresh;

    if (token) {
      const cookieStore = await cookies();

      // Access Token - HttpOnly, Secure, SameSite
      cookieStore.set("access_token", token, {
        httpOnly: true, // Cannot be accessed by JavaScript (XSS protection)
        secure: process.env.NODE_ENV === "production", // Works on HTTPS
        sameSite: "lax", // CSRF protection
        maxAge: 60 * 60 * 24, // 24 hours (set according to backend's token expiration)
        path: "/", // Valid for all paths
      });

      // Refresh Token - HttpOnly, Secure, SameSite
      if (refreshToken) {
        cookieStore.set("refresh_token", refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 7, // 7 days (set according to backend's token expiration)
          path: "/",
        });
      }
    }

    // Send the token in the response (for security), Only send user information
    const responseData = {
      ...data,
      access_token: undefined, // Remove the token from the response
      refresh_token: undefined,
    };

    return NextResponse.json(responseData, { status: 200 });
    
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { message: "Server error occurred." },
      { status: 500 }
    );
  }
}
