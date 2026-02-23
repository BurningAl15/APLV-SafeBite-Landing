import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(',').map(k => k.trim()),
    authors: [{ name: "Aldhair Vera" }],
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: "https://safebite.app",
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
    other: {
      "apple-itunes-app": "app-id=123456789",
    }
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

  return (
    <html lang={locale}>
      <body suppressHydrationWarning className="antialiased font-sans bg-background text-text">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
