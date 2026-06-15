import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors } from "@/theme/colors";

interface UnitHeroProps {
  title: string;
  unitNumber: number;
  completedLessons: number;
  totalLessons: number;
  accentColor?: string;
  illustrationUrl?: string;
}

export function UnitHero({
  title,
  unitNumber,
  completedLessons,
  totalLessons,
  accentColor = colors.primary.purple,
  illustrationUrl,
}: UnitHeroProps) {
  const router = useRouter();

  return (
    <View>
      <View
        className="rounded-b-3xl px-5 pt-5"
        style={{ backgroundColor: accentColor }}
      >
        <View className="flex-row items-center justify-between">
          <Pressable
            onPress={() => router.back()}
            className="h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
          </Pressable>

          <Pressable
            className="h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <Ionicons name="bookmark-outline" size={20} color="#FFFFFF" />
          </Pressable>
        </View>

        <View className="mt-4 items-center  z-10">
          {illustrationUrl && (
            <Image
              source={{ uri: illustrationUrl }}
              style={{width: "100%", height: 160}}
              contentFit="cover"
            />
          )}
        </View>

        <View className="items-center pb-8 mt-2">
          <Text className="text-[28px] font-bold text-white">{title}</Text>
          <Text
            className="mb-2  text-sm text-white/80"
            style={{ fontFamily: "Poppins-Regular" }}
          >
            Unit {unitNumber} • {completedLessons} / {totalLessons} lessons
          </Text>
        </View>
      </View>
    </View>
  );
}

interface UnitTabsProps {
  activeTab: "lessons" | "practice";
  onTabChange: (tab: "lessons" | "practice") => void;
}

export function UnitTabs({ activeTab, onTabChange }: UnitTabsProps) {
  return (
    <View className="flex-row px-5" style={{ marginTop: -20 }}>
      <View
        className="flex-1 flex-row rounded-2xl p-1"
        style={{
          backgroundColor: colors.neutral.background,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
          elevation: 3,
        }}
      >
        <Pressable
          onPress={() => onTabChange("lessons")}
          className="flex-1 items-center justify-center rounded-xl py-3"
          style={{
            backgroundColor:
              activeTab === "lessons" ? colors.primary.purple : "transparent",
          }}
        >
          <Text
            className="text-sm"
            style={{
              fontFamily:
                activeTab === "lessons"
                  ? "Poppins-SemiBold"
                  : "Poppins-Regular",
              color:
                activeTab === "lessons"
                  ? "#FFFFFF"
                  : colors.neutral.textSecondary,
            }}
          >
            Lessons
          </Text>
        </Pressable>

        <Pressable
          onPress={() => onTabChange("practice")}
          className="flex-1 items-center justify-center rounded-xl py-3"
          style={{
            backgroundColor:
              activeTab === "practice" ? colors.primary.purple : "transparent",
          }}
        >
          <Text
            className="text-sm"
            style={{
              fontFamily:
                activeTab === "practice"
                  ? "Poppins-SemiBold"
                  : "Poppins-Regular",
              color:
                activeTab === "practice"
                  ? "#FFFFFF"
                  : colors.neutral.textSecondary,
            }}
          >
            Practice
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
