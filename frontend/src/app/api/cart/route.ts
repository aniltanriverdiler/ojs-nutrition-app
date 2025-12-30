import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// Handles GET requests to fetch the current user's cart from the backend API.
export async function GET() {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("access_token")?.value;

    if (!accessToken) {
      return NextResponse.json(
        { status: "error", message: "Giriş yapmalısınız" },
        { status: 401 }
      );
    }

    const response = await fetch(`${BASE_URL}/users/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY || "",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(errorData, { status: response.status });
    }

    const data = await response.json();

    // Backend returns { data: { items: [...], total_price: X } }, we return only the items array (and total price) to the frontend.
    if (
      data &&
      data.data &&
      data.data.items &&
      Array.isArray(data.data.items)
    ) {
      return NextResponse.json({
        status: data.status,
        data: data.data.items,
        total_price: data.data.total_price,
      });
    } else {
      return NextResponse.json({ status: "success", data: [], total_price: 0 });
    }
  } catch (error) {
    console.error("Cart GET error:", error);
    return NextResponse.json(
      { status: "error", message: "Sepet getirilemedi" },
      { status: 500 }
    );
  }
}

// Handles POST requests to add a product to the user's cart.
export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("access_token")?.value;

    if (!accessToken) {
      return NextResponse.json(
        { status: "error", message: "Giriş yapmalısınız" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const response = await fetch(`${BASE_URL}/users/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY || "",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    const responseData = await response.json();

    if (!response.ok) {
      return NextResponse.json(responseData, { status: response.status });
    }

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Cart POST error:", error);
    return NextResponse.json(
      { status: "error", message: "Sepete ürün eklenemedi" },
      { status: 500 }
    );
  }
}

// Handles DELETE requests to remove a product from the user's cart.
export async function DELETE(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("access_token")?.value;

    if (!accessToken) {
      return NextResponse.json(
        { status: "error", message: "Giriş yapmalısınız" },
        { status: 401 }
      );
    }

    // First, try to read data from URL parameters
    const { searchParams } = new URL(req.url);
    const queryProductId = searchParams.get("product_id");
    const queryVariantId = searchParams.get("product_variant_id");
    const queryPieces = searchParams.get("pieces");

    let body: any = {};

    if (queryProductId) {
      // If URL parameter exists, create body from it
      body = {
        product_id: queryProductId,
        product_variant_id: queryVariantId || "",
        pieces: queryPieces ? parseInt(queryPieces) : 1,
      };
    } else {
      // If no URL parameter, try to read from request body
      try {
        body = await req.json();
      } catch (error) {
        console.warn("DELETE request body parse error or empty:", error);
      }
    }

    // Convert product_id to number if possible, as backend may expect a numeric ID
    if (body.product_id && !isNaN(Number(body.product_id))) {
      body.product_id = Number(body.product_id);
    }

    // "pieces" field is also expected, as per Postman example
    if (!body.pieces) {
      body.pieces = 1;
    }

    const response = await fetch(`${BASE_URL}/users/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY || "",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(errorData, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Cart DELETE error:", error);
    return NextResponse.json(
      { status: "error", message: "Sepetten ürün silinemedi" },
      { status: 500 }
    );
  }
}
