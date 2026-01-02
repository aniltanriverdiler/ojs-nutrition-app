import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("access_token")?.value;

    if (!accessToken) {
      return NextResponse.json(
        { status: "error", message: "Oturum süreniz dolmuş olabilir." },
        { status: 401 }
      );
    }

    const response = await fetch(`${BASE_URL}/orders/complete-shopping`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY || "",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Complete Shopping Error:", error);
    return NextResponse.json(
      { status: "error", message: "Sipariş oluşturulurken hata oluştu" },
      { status: 500 }
    );
  }
}
