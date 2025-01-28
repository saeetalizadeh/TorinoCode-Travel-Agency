import "./globals.css";
import localFont from "next/font/local";

const Vazir = localFont({
  src: "./fonts/Vazir-Medium-FD.woff2",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${Vazir.className}`}>{children}</body>
    </html>
  );
}
