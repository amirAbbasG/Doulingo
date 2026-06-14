import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useSignIn } from "@clerk/expo";

import AuthTextField from "@/components/auth-text-field";
import AuthDivider from "@/components/auth-divider";
import VerificationModal from "@/components/verification-modal";
import AuthHero from "@/components/auth-hero";
import AuthHeader from "@/components/auth-header";
import GoogleSignInButton from "@/components/google-sign-in-button";
import AppleSignInButton from "@/components/apple-sign-in-button";
import FacebookSignInButton from "@/components/facebook-sign-in-button";

export default function SignInScreen() {
  const { signIn, errors, fetchStatus } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [verificationError, setVerificationError] = useState<string | null>(
    null
  );
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) return;

    setIsSigningIn(true);
    setVerificationError(null);

    const result = await signIn.password({
      emailAddress: email,
      password,
    });

    if (result.error) {
      setVerificationError(result.error.longMessage || result.error.message);
      setIsSigningIn(false);
      return;
    }

    if (signIn.status === "complete") {
      await signIn.finalize();
      router.push("/");
    } else if (signIn.status === "needs_second_factor") {
      await signIn.mfa.sendEmailCode();
      setShowVerification(true);
    }

    setIsSigningIn(false);
  };

  const handleVerify = async (code: string) => {
    setIsSigningIn(true);
    setVerificationError(null);

    const result = await signIn.mfa.verifyEmailCode({ code });

    if (result.error) {
      setVerificationError(result.error.longMessage || result.error.message);
      setIsSigningIn(false);
      return;
    }

    if (signIn.status === "complete") {
      await signIn.finalize();
      setShowVerification(false);
      router.push("/");
    }

    setIsSigningIn(false);
  };

  const handleResendCode = async () => {
    const result = await signIn.mfa.sendEmailCode();
    if (result.error) {
      setVerificationError(
        result.error.longMessage || result.error.message
      );
    } else {
      setVerificationError(null);
    }
  };

  const fieldErrors = errors?.fields;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 px-5">
        <AuthHeader
          title="Welcome back"
          subtitle=" Sign in to continue your journey"
        />

        <AuthHero />

        <View className="gap-3">
          <AuthTextField
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="alex@gmail.com"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
          />
          <AuthTextField
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            placeholderTextColor="#9CA3AF"
            isPassword
          />
        </View>

        {fieldErrors?.identifier && (
          <Text className="mt-1 text-sm text-red-500">
            {fieldErrors.identifier.message}
          </Text>
        )}
        {fieldErrors?.password && (
          <Text className="mt-1 text-sm text-red-500">
            {fieldErrors.password.message}
          </Text>
        )}

        <TouchableOpacity
          onPress={handleSignIn}
          disabled={!email || !password || fetchStatus === "fetching"}
          className="mt-5 h-14 items-center justify-center rounded-2xl bg-lingua-purple active:opacity-90 disabled:opacity-50"
        >
          <Text className="text-center font-semibold text-[16px] text-white">
            {fetchStatus === "fetching" ? "Signing In..." : "Sign In"}
          </Text>
        </TouchableOpacity>

        <View className="mt-5">
          <AuthDivider />
        </View>

        <View className="mt-5 gap-3">
          <GoogleSignInButton />
          <FacebookSignInButton />
          <AppleSignInButton />
        </View>

        <View className="mt-auto pb-6">
          <TouchableOpacity
            onPress={() => router.push("/(auth)/sign-up" as any)}
          >
            <Text className="text-center text-body-md text-text-secondary">
              Don&apos;t have an account?{" "}
              <Text className="font-semibold text-lingua-purple">Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <VerificationModal
        visible={showVerification}
        onClose={() => {
          setShowVerification(false);
          setVerificationError(null);
        }}
        onVerify={handleVerify}
        onResendCode={handleResendCode}
        error={verificationError}
        isLoading={isSigningIn}
      />
    </SafeAreaView>
  );
}
