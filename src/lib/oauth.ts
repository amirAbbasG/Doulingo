import { Platform } from "react-native";

export type SocialProvider = "google" | "apple" | "facebook";

export function isNativeOAuthAvailable(provider: SocialProvider): boolean {
  if (provider === "apple") {
    return Platform.OS === "ios";
  }
  if (provider === "google") {
    return Platform.OS === "ios" || Platform.OS === "android";
  }
  // Facebook uses browser-based OAuth (useSSO), works everywhere
  return true;
}
