"use client";

import { useEffect, useState } from "react";

type Platform = "ios" | "android";

type RegistryApp = {
  enabled: boolean;
  iosStatus: string;
  androidStatus: string;
  iosUrl: string | null;
  androidUrl: string | null;
  webUrl: string | null;
};

type Registry = {
  apps?: Record<string, RegistryApp>;
};

const REGISTRY_URL = "https://fatcat-app-registry.vercel.app/apps.json";
const REFRESH_INTERVAL_MS = 5 * 60 * 1000;

const fallbackApps: Record<string, RegistryApp> = {
  safebite: {
    enabled: true,
    iosStatus: "pending_review",
    androidStatus: "live",
    iosUrl: null,
    androidUrl: "https://play.google.com/store/apps/details?id=com.FatCatGameStudio.SafeBite",
    webUrl: "https://safe-bite-landing.vercel.app/es",
  },
  noxNotes: {
    enabled: true,
    iosStatus: "pending_review",
    androidStatus: "live",
    iosUrl: null,
    androidUrl: "https://play.google.com/store/apps/details?id=com.fatcatgamestudio.noxnotes",
    webUrl: "https://noxnotes-landing.vercel.app/",
  },
  cozyPomodoro: {
    enabled: true,
    iosStatus: "live",
    androidStatus: "live",
    iosUrl: "https://apps.apple.com/es/app/cozy-pomodoro-timer-enfoque/id6759178972",
    androidUrl: "https://play.google.com/store/apps/details?id=com.fatcatgamestudio.cozypomodoro",
    webUrl: "https://cozy-pomodoro-landing.vercel.app/",
  },
};

function pickStoreUrl(app: RegistryApp | undefined, platform: Platform) {
  if (!app?.enabled) return null;
  if (platform === "ios") return app.iosStatus === "live" ? app.iosUrl : null;
  return app.androidStatus === "live" ? app.androidUrl : null;
}

export function useStoreLinks(appId: string) {
  const [links, setLinks] = useState<Record<Platform, string | null>>({
    ios: pickStoreUrl(fallbackApps[appId], "ios"),
    android: pickStoreUrl(fallbackApps[appId], "android"),
  });

  useEffect(() => {
    let mounted = true;
    const refresh = async () => {
      try {
        const response = await fetch(REGISTRY_URL, { cache: "no-store" });
        if (!response.ok) return;
        const registry = await response.json() as Registry;
        if (!registry || typeof registry.apps !== "object" || !registry.apps) return;
        if (!mounted) return;
        const app = registry.apps[appId] || fallbackApps[appId];
        setLinks({
          ios: pickStoreUrl(app, "ios"),
          android: pickStoreUrl(app, "android"),
        });
      } catch {
        // Preserve the safe bundled links when the public feed is unavailable.
      }
    };

    void refresh();
    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") void refresh();
    };
    window.addEventListener("focus", refreshWhenVisible);
    document.addEventListener("visibilitychange", refreshWhenVisible);
    const interval = window.setInterval(() => void refresh(), REFRESH_INTERVAL_MS);

    return () => {
      mounted = false;
      window.removeEventListener("focus", refreshWhenVisible);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
      window.clearInterval(interval);
    };
  }, [appId]);

  return links;
}
