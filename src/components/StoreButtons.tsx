"use client";

import { useStoreLinks } from "@/lib/appRegistry";

type StoreButtonsProps = {
  appId: string;
  appName: string;
  compact?: boolean;
};

export default function StoreButtons({ appId, appName, compact = false }: StoreButtonsProps) {
  const links = useStoreLinks(appId);
  const iconSize = compact ? "w-5 h-5" : "w-8 h-8";
  const buttonClass = compact
    ? "flex items-center gap-2 px-4 py-2 rounded-xl transition-transform hover:scale-105 w-full sm:w-auto justify-center"
    : "flex items-center gap-3 px-8 py-3.5 rounded-2xl transition-transform hover:scale-105 w-full sm:w-auto justify-center";

  if (!links.ios && !links.android) return null;

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full" role="group" aria-label={`Download ${appName}`}>
      {links.ios && (
        <a
          href={links.ios}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Download ${appName} on the App Store`}
          className={`${buttonClass} bg-black text-white shadow-lg`}
        >
          <svg aria-hidden="true" className={iconSize} viewBox="0 0 384 512" fill="currentColor">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-18.1-81.9-18.1-41.9 0-82.9 22.3-103.9 58-31 52.3-7.9 144.1 27 201.7 16.5 27 49 57 85.1 55.7 34.6-1.4 47.3-25.9 88.5-25.7 41.2.2 53 25.9 88.5 25.1 37.1-.8 64.9-27.1 81.3-51.2 18.9-27.7 26.6-54.6 26.9-56-.8-.3-51.9-19.9-52.1-78.1zm-78.6-180.3c15.6-18.9 25.5-44.9 22.2-70.4-22.1 1-47.9 15.3-64 34.1-14.4 16.6-27.2 43.1-23.7 67.9 24.1 1.9 48.7-11.2 65.5-31.6z" />
          </svg>
          <span className="flex flex-col items-start leading-tight">
            <span className={`${compact ? "text-[8px]" : "text-[10px]"} uppercase font-bold opacity-80 tracking-wider`}>Download on the</span>
            <span className={`${compact ? "text-sm" : "text-xl"} font-bold`}>App Store</span>
          </span>
        </a>
      )}

      {links.android && (
        <a
          href={links.android}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Get ${appName} on Google Play`}
          className={`${buttonClass} bg-white border-2 border-gray-100 text-text shadow-md`}
        >
          <svg aria-hidden="true" className={`${iconSize} text-primary`} viewBox="0 0 512 512" fill="currentColor">
            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 0 24 10 24 23v466c0 13 10 23 23 23 4.5 0 8.5-1.3 12-3.5L304 256 59 3.5C55.5 1.3 51.5 0 47 0zm372.2 191.6C419.1 190.5 419.1 187.3 419.1 185.1c0-2.2 0-5.4-2.2-6.5L132.8 5.4 391.2 256 132.8 506.6l284.1-173.2c2.2-1.1 2.2-4.3 2.2-6.5 0-2.2 0-5.4-2.2-6.5l-63.5-38.8 63.5-38.8z" />
          </svg>
          <span className="flex flex-col items-start leading-tight">
            <span className={`${compact ? "text-[8px]" : "text-[10px]"} uppercase font-bold text-subtext tracking-wider`}>Get it on</span>
            <span className={`${compact ? "text-sm" : "text-xl"} font-bold`}>Google Play</span>
          </span>
        </a>
      )}
    </div>
  );
}
