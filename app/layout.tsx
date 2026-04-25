import type { Metadata } from "next";
import { Heebo, Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/site/SmoothScroll";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-heebo",
  display: "swap",
});

const frank = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  variable: "--font-frank",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arise Growth — סדר תפעולי. שליטה. בהירות.",
  description:
    "Arise Growth עוזרת לבעלי עסקים קטנים ב־Low-Tech לעשות סדר תפעולי, לרכז את העבודה במקום אחד, ולהחזיר שליטה על העסק.",
  metadataBase: new URL("https://arisegrowth.io"),
  openGraph: {
    title: "Arise Growth — סדר תפעולי. שליטה. בהירות.",
    description:
      "ייעוץ תפעולי פרימיום לעסקים קטנים ב־Low-Tech. סדר לפני מערכת. שליטה לפני אוטומציה.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${frank.variable}`}
      suppressHydrationWarning
    >
      <body className="canvas-grain bg-canvas text-ink">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
