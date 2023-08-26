import connectDB from "@/backend/config/connectDB";
import Products from "@/backend/models/product";
import { NextResponse } from "next/server";

export async function GET( {params}) {
  const { id } = params;
  console.log(id);
  try {
    await connectDB();
    const product = await Products.findOne({ _id: id });

    console.log("Found product:", product);

    if (!product) {
      console.log("Product not found");
      return NextResponse.error("Product not found", { status: 404 });
    }
    
    return NextResponse.json(
      { product, message: "Product found!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error("Internal server error", { status: 500 });
  }
}