import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import type { Metadata } from 'next';

const baseUrl = 'https://safe-bite-landing.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'SafeBite: Milk Allergy Scanner | CMPA & APLV Support',
    template: '%s | SafeBite'
  },
  description: 'Protect your family from hidden dairy. Fast, private, and works offline. Scan labels anywhere to detect milk protein triggers instantly with total peace of mind.',
  keywords: ['milk allergy', 'cmpa', 'aplv', 'scanner', 'label scanner', 'ingredients', 'ocr', 'offline', 'parents', 'dairy-free', 'safety'],
  authors: [{ name: 'FatCat Game Studio' }],
  creator: 'FatCat Game Studio',
  publisher: 'FatCat Game Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  itunes: {
    appId: '6759540131',
    appArgument: 'safebite://',
  },
  openGraph: {
    title: 'SafeBite: Milk Allergy Scanner | CMPA & APLV Support',
    description: 'Protect your family from hidden dairy. Fast, private, and works offline. Scan labels anywhere to detect milk protein triggers instantly with total peace of mind.',
    url: baseUrl,
    siteName: "SafeBite",
    images: [
      {
        url: "/brand-logo.png",
        width: 800,
        height: 800,
        alt: "SafeBite App Logo",
      },
    ],
    locale: locale === 'es' ? 'es_ES' : 'en_US',
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: t('title'),
    description: t('description'),
    images: ["/brand-logo.png"],
  },
  // TODO: Replace app-id below with your real Apple App Store numeric ID
  // (visible in App Store Connect → App Information → Apple ID)
  other: {
    "apple-itunes-app": "app-id=REPLACE_WITH_REAL_ID",
  },
};
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'SafeBite',
    description: 'Scan food labels instantly. Detect hidden dairy and shop safely, even without internet. The essential tool for families with CMPA.',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android',
    offers: [
      { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      { '@type': 'Offer', price: '4.99', priceCurrency: 'USD' },
    ],
    author: { '@type': 'Person', name: 'Aldhair Vera' },
    url: BASE_URL,
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased font-sans bg-background text-text">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
