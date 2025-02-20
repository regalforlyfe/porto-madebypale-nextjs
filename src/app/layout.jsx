import { Footer, Header } from "@/components";
import "./globals.css";

export const metadata = {
  title: "madebypale",
  description: "This is portfolio of pale",
  keywords: "madebypale, portfolio, pale, nextjs, ahmad, rifal",
  author: "ahmad rifal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
