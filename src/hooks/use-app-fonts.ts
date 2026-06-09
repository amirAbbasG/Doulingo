import { useFonts } from "expo-font";
import { useEffect } from "react";

import { fontAssets } from "@/theme/fonts";

type UseAppFontsResult = {
  loaded: boolean;
  error: Error | null;
};

export function useAppFonts(): UseAppFontsResult {
  const [loaded, error] = useFonts(fontAssets);

  useEffect(() => {
    if (error) {
      console.error("Failed to load Poppins fonts:", error);
    }
  }, [error]);

  return { loaded, error };
}
