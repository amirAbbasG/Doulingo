import { useSSO } from "@clerk/expo";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
import * as Linking from "expo-linking";
import SocialButton from "./social-button";

interface GoogleSignInButtonProps {
  onSignInComplete?: () => void;
}

export default function GoogleSignInButton({
  onSignInComplete,
}: GoogleSignInButtonProps) {
  const { startSSOFlow } = useSSO();
  const router = useRouter();

  const handlePress = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
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
      if (
        error.code === "SIGN_IN_CANCELLED" ||
        error.code === "-5" ||
        error.code === "ERR_REQUEST_CANCELED"
      ) {
        return;
      }
      Alert.alert(
        "Error",
        error.message || "An error occurred during Google sign-in"
      );
    }
  };

  return (
    <SocialButton
      provider="google"
      label="Continue with Google"
      onPress={handlePress}
    />
  );
}
