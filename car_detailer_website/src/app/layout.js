import "./globals.css";
import Topbar from "@/components/Topbar";
export const metadata = {
  title: "Car Detailer",
  description: "Car Detailing Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-primary">
      <body className="font-primary ">
        {children}
      </body>
    </html>
  );
}
