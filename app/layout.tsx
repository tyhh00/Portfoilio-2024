import type { Metadata } from "next";
import { default_font } from "@/components/ui/fonts";
import "./globals.css";

import { MainNavbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/specific/footer";




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
        <body className={default_font.className + ""}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <MainNavbar/>
                {children}
                <Footer/>
            </ThemeProvider>
        </body>
    </html>
  );
}

