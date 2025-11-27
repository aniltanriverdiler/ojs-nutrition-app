import { NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function POST(request: Request) {
  try {
    // Get the data coming from the frontend
    const body = await request.json();
    const { name, surname, email, password } = body;

    // Convert the data to the format required by the backend
    const backendPayload = {
      first_name: name,
      last_name: surname,
      email: email,
      password: password,
      password2: password,
      api_key: API_KEY,
    };

    console.log("Sending Data (Payload):", backendPayload);

    const res = await fetch(`${BASE_URL}/auth/register`, {
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

    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ message: "Server error occurred." }, { status: 500 });
  }
}
