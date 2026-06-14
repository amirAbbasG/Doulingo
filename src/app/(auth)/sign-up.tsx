import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useSignUp } from "@clerk/expo";

import AuthTextField from "@/components/auth-text-field";
import AuthDivider from "@/components/auth-divider";
import VerificationModal from "@/components/verification-modal";
import AuthHero from "@/components/auth-hero";
import AuthHeader from "@/components/auth-header";
import GoogleSignInButton from "@/components/google-sign-in-button";
import AppleSignInButton from "@/components/apple-sign-in-button";
import FacebookSignInButton from "@/components/facebook-sign-in-button";

export default function SignUpScreen() {
  const { signUp, errors, fetchStatus } = useSignUp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [verificationError, setVerificationError] = useState<string | null>(
    null
  );
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password) return;

    setIsSigningUp(true);
    setVerificationError(null);

    const createResult = await signUp.create({
      emailAddress: email,
      password,
    });

    if (createResult.error) {
      setVerificationError(
        createResult.error.longMessage || createResult.error.message
      );
      setIsSigningUp(false);
      return;
    }

    const sendResult = await signUp.verifications.sendEmailCode();

    console.log(sendResult)
    if (sendResult.error) {
      setVerificationError(
        sendResult.error.longMessage || sendResult.error.message
      );
      setIsSigningUp(false);
      return;
    }

    setShowVerification(true);
    setIsSigningUp(false);
  };

  const handleVerify = async (code: string) => {
    setIsSigningUp(true);
    setVerificationError(null);

    const result = await signUp.verifications.verifyEmailCode({ code });

    if (result.error) {
      setVerificationError(result.error.longMessage || result.error.message);
      setIsSigningUp(false);
      return;
    }

    if (signUp.status === "complete") {
      await signUp.finalize();
      setShowVerification(false);
      router.push("/");
    }

    setIsSigningUp(false);
  };

  const handleResendCode = async () => {
    const result = await signUp.verifications.sendEmailCode();
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
          title="Create your account"
          subtitle="Start your language journey today ✨"
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

        {fieldErrors?.emailAddress && (
          <Text className="mt-1 text-sm text-red-500">
            {fieldErrors.emailAddress.message}
          </Text>
        )}
        {fieldErrors?.password && (
          <Text className="mt-1 text-sm text-red-500">
            {fieldErrors.password.message}
          </Text>
        )}

        <TouchableOpacity
          onPress={handleSignUp}
          disabled={!email || !password || fetchStatus === "fetching"}
          className="mt-5 h-14 items-center justify-center rounded-2xl bg-lingua-purple active:opacity-90 disabled:opacity-50"
        >
          <Text className="text-center font-semibold text-[16px] text-white">
            {fetchStatus === "fetching" ? "Signing Up..." : "Sign Up"}
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
            onPress={() => router.push("/(auth)/sign-in" as any)}
          >
            <Text className="text-center text-body-md text-text-secondary">
              Already have an account?{" "}
              <Text className="font-semibold text-lingua-purple">Log in</Text>
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
        isLoading={isSigningUp}
      />
    </SafeAreaView>
  );
}
