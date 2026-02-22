import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // List of "naked" paths that should be redirected to a localized version
    const nakedPaths = ['/privacy', '/terms', '/support', '/age-rating', '/credits'];

    if (nakedPaths.includes(pathname)) {
        // Redirige a la versión por defecto (en) si se accede sin prefijo
        // El middleware de next-intl luego manejará la detección de idioma si es necesario
        // pero esto previene el 404 inmediato.
        const url = request.nextUrl.clone();
        url.pathname = `/en${pathname}`;
        return NextResponse.redirect(url);
    }

    return intlMiddleware(request);
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(es|en)/:path*', '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)']
};
