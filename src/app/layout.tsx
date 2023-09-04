import { DefaultLayout } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/utils/provider";
import { PrivateRouter } from "@/router/private-router";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Delivery Sotatek",
  description: "By Sotatek",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <PrivateRouter>
            <DefaultLayout>{children}</DefaultLayout>
          </PrivateRouter>
        </Providers>
      </body>
    </html>
  );
}
