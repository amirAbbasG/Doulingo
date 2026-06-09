import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { images } from "@/constants/images";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 p-6">
        <View className="items-center ">
          <View className="flex-row items-center gap-2">
            <Image
              source={images.mascotLogo}
              style={{ width: 50, height: 50 }}
              contentFit="contain"
            />
            <Text className="font-bold text-[24px] leading-[1.1] text-text-primary">
              Moulingo
            </Text>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-h1 text-text-primary">Your AI language</Text>
          <Text className="text-h1 text-lingua-purple -top-2">teacher.</Text>
          <Text className="mt-1 text-body-md text-text-secondary">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="flex-1 items-center justify-center py-4">
          <View className="relative h-105 w-full max-w-90 items-center justify-end">
            <View className="absolute -left-6 top-40 -rotate-6 rounded-[18px] bg-[#eaf3ff] px-5 py-3 shadow-soft">
              <Text className="font-medium text-[18px] text-[#111827]">
                Hello!
              </Text>
              <View className="absolute -bottom-1 right-6 h-4 w-4 rotate-45 rounded-[4px] bg-[#eaf3ff]" />
            </View>

            <View className="absolute right-2 top-8 rotate-6 rounded-[18px] bg-[#f2efff] px-5 py-3 shadow-soft">
              <Text className="font-medium text-[18px] text-[#5b3bf6]">
                ¡Hola!
              </Text>
              <View className="absolute -bottom-1 left-7 h-4 w-4 rotate-45 rounded-[4px] bg-[#f2efff]" />
            </View>

            <View className="absolute -right-6 top-70 rotate-3 rounded-[18px] bg-[#fff1e8] px-5 py-3 shadow-soft">
              <Text className="font-medium text-[18px] text-[#ff4d4f]">
                你好!
              </Text>
              <View className="absolute -bottom-1 left-7 h-4 w-4 rotate-45 rounded-[4px] bg-[#fff1e8]" />
            </View>

            <Image
              source={images.mascotWelcome}
              style={{ width: 320, height: 320 }}
              contentFit="contain"
            />

          </View>
        </View>

        <View className="pb-2">
          <Pressable
            accessibilityRole="button"
            className="h-14 flex-row items-center justify-center gap-1 rounded-2xl bg-lingua-purple px-6 active:opacity-90"
          >
            <Text className=" text-center font-semibold text-[16px] text-white">
              Get Started
            </Text>
            <Ionicons
                name="chevron-forward"
                size={22}
                color="#fff"
                style={{ marginLeft: 8 }}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
