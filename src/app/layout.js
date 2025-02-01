import Header from "@/components/layout/Header";
import "./globals.css";
import localFont from "next/font/local";
import TanstackQueryProvider from "@/components/partials/provider/TanstackQueryProvider";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/components/partials/provider/AuthProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Footer from "@/components/layout/Footer";

const Vazir = localFont({
  src: "./fonts/Vazir-Medium-FD.woff2",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${Vazir.className} min-h-screen`}>
        <TanstackQueryProvider>
          <AuthProvider>
            <Header />
            <main className="min-h-main"> {children}</main>
            <Footer />
          </AuthProvider>
          <ReactQueryDevtools />
        </TanstackQueryProvider>

        <Toaster />
      </body>
    </html>
  );
}
