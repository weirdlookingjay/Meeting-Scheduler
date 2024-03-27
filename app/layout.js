import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const font = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Meeting Scheduler",
  description: "Schedule Meetings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
