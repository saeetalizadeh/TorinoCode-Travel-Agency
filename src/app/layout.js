import Header from "@/components/layout/Header";
import "./globals.css";
import localFont from "next/font/local";
import TanstackQueryProvider from "@/components/partials/provider/TanstackQueryProvider";

const Vazir = localFont({
  src: "./fonts/Vazir-Medium-FD.woff2",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${Vazir.className}`}>
        <TanstackQueryProvider>
          <Header />
          {children}
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
