import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import type { Metadata } from 'next';

const baseUrl = 'https://safe-bite-landing.vercel.app';
type Locale = (typeof routing.locales)[number];

const isLocale = (locale: string): locale is Locale => routing.locales.includes(locale as Locale);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const title = t('title');
  const description = t('description');

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: '%s | SafeBite'
    },
    description,
    keywords: t('keywords').split(',').map((keyword) => keyword.trim()),
    authors: [{ name: 'FatCat Game Studio' }],
    creator: 'FatCat Game Studio',
    publisher: 'FatCat Game Studio',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `/${locale}`,
    },
    itunes: {
      appId: '6759540131',
      appArgument: 'safebite://',
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: 'SafeBite',
      images: [
        {
          url: '/brand-logo.png',
          width: 800,
          height: 800,
          alt: 'SafeBite App Logo',
        },
      ],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/brand-logo.png'],
    },
    other: {
      'apple-itunes-app': 'app-id=6759540131, app-argument=safebite://',
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
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    notFound();
  }
  const locale = rawLocale;
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'SafeBite',
    description: t('description'),
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android',
    offers: [
      { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      { '@type': 'Offer', price: '4.99', priceCurrency: 'USD' },
    ],
    author: { '@type': 'Person', name: 'Aldhair Vera' },
    url: `${baseUrl}/${locale}`,
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
