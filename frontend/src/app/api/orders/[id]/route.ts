import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("access_token")?.value;

    if (!accessToken) {
      return NextResponse.json(
        { status: "error", message: "Giriş yapmalısınız" },
        { status: 401 }
      );
    }

    const response = await fetch(`${BASE_URL}/orders/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY || "",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Order Detail API error:", error);
    return NextResponse.json(
      { status: "error", message: "Sipariş detayı alınamadı" },
      { status: 500 }
    );
  }
}
