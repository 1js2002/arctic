import connectDB from "@/backend/config/connectDB";
import Products from "@/backend/models/product";
import { NextResponse } from "next/server";
import APIFilters from '../../../backend/utils/APIfilters'

export async function POST(request) {
  try {
    await connectDB();
    const requestData = await request.json(); // Parse t  he incoming JSON data

    const product = new Products.create(requestData); // Pass the parsed data to create()

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

export async function GET(req) {
  const queryParams = new URLSearchParams(req.url.split('?')[1]);
  console.log(`@@@ =========> queryParams`, queryParams)
  try {
    await connectDB();
    const apiFilters = new APIFilters(Products.find(), queryParams).search();
    const products = await apiFilters.query; // Assuming apiFilters.query returns the filtered products
    
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
