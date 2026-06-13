import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";

import { images } from "@/constants/images";
import AuthTextField from "@/components/auth-text-field";
import SocialButton from "@/components/social-button";
import AuthDivider from "@/components/auth-divider";
import VerificationModal from "@/components/verification-modal";
import AuthHero from "@/components/auth-hero";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  const handleSignUp = () => {
    setShowVerification(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 px-5">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-2 h-10 w-10 items-center justify-center"
        >
          <Ionicons name="chevron-back" size={28} color="#0D132B" />
        </TouchableOpacity>

        <View className="mt-2">
          <Text className="text-h1 text-text-primary">Create your account</Text>
          <Text className="mt-1 text-body-md text-text-secondary">
            Start your language journey today ✨
          </Text>
        </View>

    <AuthHero/>

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

        <TouchableOpacity
          onPress={handleSignUp}
          className="mt-5 h-14 items-center justify-center rounded-2xl bg-lingua-purple active:opacity-90"
        >
          <Text className="text-center font-semibold text-[16px] text-white">
            Sign Up
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
          <TouchableOpacity onPress={() => router.push("/(auth)/sign-in" as any)}>
            <Text className="text-center text-body-md text-text-secondary">
              Already have an account?{" "}
              <Text className="font-semibold text-lingua-purple">Log in</Text>
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
