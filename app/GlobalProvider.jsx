"use client"

import { CartProvider } from "@/context/cartContext";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/context/AuthContext";

export function GlobalProvider({ children }) {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <AuthProvider>
        <CartProvider>
         {children}
        </CartProvider>
        
      </AuthProvider>
    </>
  );
}
