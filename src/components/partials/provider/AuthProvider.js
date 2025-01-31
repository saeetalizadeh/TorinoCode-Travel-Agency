"use client";

import { getNewTokens } from "@/core/config/api";
import { getCookie } from "@/core/utils/cookie";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const cookie = getCookie("accessToken");

    if (!isLogin) {
      const refreshToken = getNewTokens();
      if (cookie) {
        setIsLogin(true);
      } else if (path === "/checkout") {
        setIsLogin(false);
        setIsOpen(true);
      }
    }
  }, [isLogin, path]);

  return (
    <AuthContext.Provider value={{ isLogin, isOpen, setIsLogin, setIsOpen }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
export function useAuthInfo() {
  return useContext(AuthContext);
}
