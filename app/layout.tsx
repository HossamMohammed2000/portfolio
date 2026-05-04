import Navbar from "@/_Components/structure/Navbar";
import Footer from "@/_Components/structure/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="ltr">
      <body className="bg-[#05080f] text-white">
        
        <Navbar />
        <main className="pt-24">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
