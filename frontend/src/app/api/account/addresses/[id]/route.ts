import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// DELETE: Delete an address
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized", message: "Giriş yapmanız gerekiyor" },
        { status: 401 }
      );
    }

    const res = await fetch(`${BASE_URL}/users/addresses/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // Handle 204 No Content response (successful deletion)
    if (res.status === 204) {
      return NextResponse.json(
        { success: true, message: "Adres başarıyla silindi" },
        { status: 200 }
      );
    }

    // Handle other successful responses
    if (res.ok) {
      const data = await res.json().catch(() => ({ success: true }));
      return NextResponse.json(data, { status: 200 });
    }

    // Handle error responses
    const errorData = await res.json().catch(() => ({}));
    return NextResponse.json(
      { error: "Delete failed", message: errorData.message || "Adres silinemedi" },
      { status: res.status }
    );
  } catch (error) {
    console.error("Delete address error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: "Adres silinirken bir hata oluştu" },
      { status: 500 }
    );
  }
}

// PUT: Update an address
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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

    const res = await fetch(`${BASE_URL}/users/addresses/${id}`, {
      method: "PUT",
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

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Update address error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: "Adres güncellenirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
