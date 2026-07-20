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
    fetch(REGISTRY_URL)
      .then((response) => response.json() as Promise<Registry>)
      .then((registry) => {
        if (!mounted) return;
        const app = registry.apps?.[appId] || fallbackApps[appId];
        setLinks({
          ios: pickStoreUrl(app, "ios"),
          android: pickStoreUrl(app, "android"),
        });
      })
      .catch(() => undefined);

    return () => {
      mounted = false;
    };
  }, [appId]);

  return links;
}
