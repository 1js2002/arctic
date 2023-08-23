import connectDB from "@/backend/config/connectDB";
import Products from "@/backend/models/product";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const requestData = await request.json(); // Parse the incoming JSON data

    const product = await Products.create(requestData); // Pass the parsed data to create()

    return NextResponse.json(
      { product, message: "Post created successfully" }, // Wrap product and message in an object
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const products = await Products.find(); // Retrieve all products

    return NextResponse.json(
      { products, message: "Products retrieved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json( 
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
