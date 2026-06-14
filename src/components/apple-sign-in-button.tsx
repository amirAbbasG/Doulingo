import { useSSO } from "@clerk/expo";
import { useRouter } from "expo-router";
import { Alert, Platform } from "react-native";
import * as Linking from "expo-linking";
import SocialButton from "./social-button";

interface AppleSignInButtonProps {
  onSignInComplete?: () => void;
}

export default function AppleSignInButton({
  onSignInComplete,
}: AppleSignInButtonProps) {
  const { startSSOFlow } = useSSO();
  const router = useRouter();

  if (Platform.OS !== "ios") {
    return null;
  }

  const handlePress = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_apple",
        redirectUrl: Linking.createURL("/"),
      });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });

        if (onSignInComplete) {
          onSignInComplete();
        } else {
          router.replace("/");
        }
      }
    } catch (err: unknown) {
      const error = err as { code?: string; message?: string };
      if (error.code === "ERR_REQUEST_CANCELED") {
        return;
      }
      Alert.alert(
        "Error",
        error.message || "An error occurred during Apple sign-in",
      );
    }
  };

  return (
    <SocialButton
      provider="apple"
      label="Continue with Apple"
      onPress={handlePress}
    />
  );
}
