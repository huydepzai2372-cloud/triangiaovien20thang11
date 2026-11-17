import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nét phấn | Gửi lời tri ân 20/11",
  description:
    "Gửi những lời tri ân chân thành đến thầy cô nhân ngày Nhà giáo Việt Nam 20/11.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
