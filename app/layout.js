import { Inter } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
// pages/_app.js
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's already imported

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Milmapure",
  description: "Milmapure: Authentic Indian flavors redefined",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><div className="bg-gray-50"><ErrorBoundary>{children}</ErrorBoundary></div></body>
    </html>
  );
}
