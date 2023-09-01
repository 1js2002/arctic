import Login from "@/components/auth/Login";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";


const LoginPage = async () => {
  // const session = await getServerSession(authOptions);

  // if (session) redirect("/");
  return <Login />;
};

export default LoginPage;
