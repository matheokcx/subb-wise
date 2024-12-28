import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "SubbWise",
  description: "L'application qui saura vous aider à mieux gerer vos abonnements !",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="fr">
      <body className={"w-screnn h-screen bg-[#f8f9fa] " + poppins.className}>
        {children}
      </body>
    </html>
  );
}
