import connectDB from "@/backend/config/connectDB";
import Products from "@/backend/models/product";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectDB();
  try {
    const product = await Products.findById(request.query.id);
    if (!product) {
      return NextResponse.error('Product not found', { status: 404 });
    }
    return NextResponse.json({ product, message: 'Product found!' }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error('Internal server error', { status: 500 });
  }
}
