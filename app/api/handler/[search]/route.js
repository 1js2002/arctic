import connectDB from "@/backend/config/connectDB";
import Products from "@/backend/models/product";

export const GET = async ({params}) => {
  const {qry} = params;
  console.log(qry)
  }         