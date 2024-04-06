import type { Metadata } from "next";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import FooterComponent from "@/components/footer/FooterComponent";

export const metadata: Metadata = {
	title: "Susu Shop",
	description: "Susu Shop is a web application for selling products.",
	openGraph: {
		title: "Susu Shop",
		description: "Susu Shop is a web application for selling products.",
		images: 'https://store.istad.co/media/brand_images/download.jpg'
	}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavbarComponent/>
        </header>
        <main>
          {children}
        </main>
        <footer className="mt-6">
          <FooterComponent/>
        </footer>
      </body>
    </html>
  );
}
