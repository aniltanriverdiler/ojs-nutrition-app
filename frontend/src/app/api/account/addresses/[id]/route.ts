import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// DELETE: Delete an address
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = await params;
        const cookieStore = await cookies();
        const token = cookieStore.get("access_token")?.value;

        const res = await fetch(`${BASE_URL}/users/addresses/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },  
        });

        if(res.status === 204) {
            return NextResponse.json({ success: true }, { status: 200 });
        }

        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        return NextResponse.json({ error: "Delete failed" }, { status: 500 });
    }
}

// PUT: Update an address
export async function PUT(request: Request, { params }: {params: {id: string}}) {
    try {
        const { id } = await params;
        const cookieStore = await cookies();
        const token = cookieStore.get("access_token")?.value;
        const body = await request.json();

        const res = await fetch(`${BASE_URL}/users/addresses/${id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        return NextResponse.json({ error: "Update failed" }, { status: 500 });
    }
}
