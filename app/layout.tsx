import type { Metadata } from "next";
import { Inter, Mulish, Quattrocento } from "next/font/google";
import "./globals.css";

import { MainNavbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/specific/footer";


const inter = Inter({ subsets: ["latin"] });
const quattrocento = Quattrocento({
    subsets: ["latin"],
    weight: "400"
});
const muli = Mulish({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Tan Yong Hong",
  description: "This is my portfoilio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={muli.className + ""}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                {true && <MainNavbar/>}
                {children}
                <Footer/>
            </ThemeProvider>
        </body>
    </html>
  );
}

