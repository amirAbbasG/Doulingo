import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import AuthTextField from "@/components/auth-text-field";
import SocialButton from "@/components/social-button";
import AuthDivider from "@/components/auth-divider";
import VerificationModal from "@/components/verification-modal";
import AuthHero from "@/components/auth-hero";
import AuthHeader from "@/components/auth-header";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  const handleSignIn = () => {
    setShowVerification(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 px-5">
        <AuthHeader
            title="Welcome back"
            subtitle=" Sign in to continue your journey"
        />


        <AuthHero/>

        <AuthTextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="alex@gmail.com"
          placeholderTextColor="#9CA3AF"
          keyboardType="email-address"
        />

        <TouchableOpacity
          onPress={handleSignIn}
          className="mt-5 h-14 items-center justify-center rounded-2xl bg-lingua-purple active:opacity-90"
        >
          <Text className="text-center font-semibold text-[16px] text-white">
            Sign In
          </Text>
        </TouchableOpacity>

        <View className="mt-5">
          <AuthDivider />
        </View>

        <View className="mt-5 gap-3">
          <SocialButton provider="google" label="Continue with Google" />
          <SocialButton provider="facebook" label="Continue with Facebook" />
          <SocialButton provider="apple" label="Continue with Apple" />
        </View>

        <View className="mt-auto pb-6">
          <TouchableOpacity onPress={() => router.push("/(auth)/sign-up" as any)}>
            <Text className="text-center text-body-md text-text-secondary">
              Don&apos;t have an account?{" "}
              <Text className="font-semibold text-lingua-purple">Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <VerificationModal
        visible={showVerification}
        onClose={() => setShowVerification(false)}
      />
    </SafeAreaView>
  );
}
