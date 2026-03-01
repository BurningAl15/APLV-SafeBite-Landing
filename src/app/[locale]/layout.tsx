import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

const BASE_URL = 'https://safe-bite-landing.vercel.app';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL(BASE_URL),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(',').map(k => k.trim()),
    authors: [{ name: "Aldhair Vera" }],
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        'en': `${BASE_URL}/en`,
        'es': `${BASE_URL}/es`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${BASE_URL}/${locale}`,
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
