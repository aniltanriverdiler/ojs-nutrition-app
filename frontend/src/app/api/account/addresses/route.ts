import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// GET: Get all user addresses
export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized", message: "Giriş yapmanız gerekiyor" },
        { status: 401 }
      );
    }

    const res = await fetch(`${BASE_URL}/users/addresses?limit=10&offset=0`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return NextResponse.json(
        { error: "Fetch failed", message: errorData.message || "Adresler yüklenemedi" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Address fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: "Adresler yüklenirken bir hata oluştu" },
      { status: 500 }
    );
  }
}

// POST: Create new address
export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized", message: "Giriş yapmanız gerekiyor" },
        { status: 401 }
      );
    }

    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.first_name || !body.last_name || !body.full_address || !body.phone_number) {
      return NextResponse.json(
        { error: "Validation error", message: "Tüm gerekli alanları doldurunuz" },
        { status: 400 }
      );
    }

    const res = await fetch(`${BASE_URL}/users/addresses`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Create address error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: "Adres eklenirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
