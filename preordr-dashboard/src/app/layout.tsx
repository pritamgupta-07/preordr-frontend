import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";
import StoreProvider from "../components/storeProvider";
import MUIThemeProvider from "../components/themeProvider";

export const metadata: Metadata = {
  title: "Welcome to preOrdr Dashboard",
  description: "A SaaS MVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <MUIThemeProvider>
              {children}
            </MUIThemeProvider>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
