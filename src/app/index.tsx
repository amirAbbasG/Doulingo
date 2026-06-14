import { Redirect, router } from "expo-router";
import { useAuth } from "@clerk/expo";
import { Text, TouchableOpacity, View } from "react-native";
import { useLanguageStore } from "@/store/language-store";

export default function Index() {
  const { isSignedIn, isLoaded, signOut } = useAuth();
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);

  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-body-md text-text-secondary">Loading...</Text>
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text className="text-h1">Moulingo</Text>
      <Text className="text-body-md text-text-secondary">
        Welcome back! You&apos;re signed in.
      </Text>

      {selectedLanguage && (
        <Text className="text-body-md text-lingua-purple">
          Learning: {selectedLanguage.name} ({selectedLanguage.nativeName})
        </Text>
      )}

      <TouchableOpacity
        onPress={() => router.push("/language-select")}
        className="h-14 px-6 items-center justify-center rounded-2xl bg-lingua-green active:opacity-90"
      >
        <Text className="text-center font-semibold text-[16px] text-white">
          {selectedLanguage ? "Change Language" : "Choose a Language"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => signOut()}
        className="h-14 px-6 items-center justify-center rounded-2xl bg-lingua-purple active:opacity-90"
      >
        <Text className="text-center font-semibold text-[16px] text-white">
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}
