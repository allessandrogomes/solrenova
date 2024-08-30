import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'SolRenova - Energia Solar de Qualidade',
  description: 'SolRenova oferece soluções de energia solar de alta qualidade para residências e empresas, proporcionando economia, sustentabilidade e eficiência energética. Transforme sua energia com tecnologia confiável e atendimento especializado.',
  keywords: ['energia solar', 'energia solar juazeiro', 'energia solar petrolina', 'empresa de energia solar'],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'SolRenova - Energia Solar de Qualidade',
    description: 'Transforme sua energia com soluções solares da SolRenova. Sustentabilidade e economia ao seu alcance.',
    url: 'https://www.solrenova.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolRenova - Energia Solar de Qualidade',
    description: 'Transforme sua energia com soluções solares da SolRenova. Sustentabilidade e economia ao seu alcance.',
  },
  icons: '/favicon.ico'
}

import "./globals.scss"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}
