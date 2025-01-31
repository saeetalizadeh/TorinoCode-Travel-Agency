import Header from "@/components/layout/Header";
import "./globals.css";
import localFont from "next/font/local";
import TanstackQueryProvider from "@/components/partials/provider/TanstackQueryProvider";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/components/partials/provider/AuthProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Vazir = localFont({
  src: "./fonts/Vazir-Medium-FD.woff2",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${Vazir.className}`}>
        <TanstackQueryProvider>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
          <ReactQueryDevtools/>
        </TanstackQueryProvider>
    
        <Toaster />
      </body>
    </html>
  );
}
