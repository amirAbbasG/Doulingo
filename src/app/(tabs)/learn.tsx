import { useState, useMemo } from "react";
import { View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useLanguageStore } from "@/store/language-store";
import { useLessonStore } from "@/store/lesson-store";
import { getUnitsByLanguage } from "@/constants/units";
import { getLessonById } from "@/constants/lessons";
import { lessonIcons } from "@/constants/images";
import { UnitHero, UnitTabs } from "@/components/unit-hero";
import { LessonCard } from "@/components/lesson-card";
import { colors } from "@/theme/colors";
import { LessonStatus } from "@/types/learning";

export default function LearnScreen() {
  const selectedLanguage = useLanguageStore((s) => s.selectedLanguage);
  const { lessonProgress, setLessonStatus } = useLessonStore();
  const [activeTab, setActiveTab] = useState<"lessons" | "practice">("lessons");

  const units = useMemo(
    () => (selectedLanguage ? getUnitsByLanguage(selectedLanguage.id) : []),
    [selectedLanguage]
  );

  const currentUnit = units.length > 0 ? units[units.length - 1] : null;

  const lessons = useMemo(() => {
    if (!currentUnit) return [];
    return currentUnit.lessonIds
      .map((id) => getLessonById(id))
      .filter(Boolean)
      .sort((a, b) => a!.order - b!.order);
  }, [currentUnit]);

  const getLessonIcon = (lessonTitle: string): string | undefined => {
    const title = lessonTitle.toLowerCase();
    if (title.includes("café") || title.includes("cafe")) return lessonIcons.cafe;
    if (title.includes("travel") || title.includes("directions"))
      return lessonIcons.travel;
    if (title.includes("shopping")) return lessonIcons.shopping;
    if (title.includes("family") || title.includes("friend"))
      return lessonIcons.family;
    if (title.includes("food") || title.includes("daily"))
      return lessonIcons.food;
    if (title.includes("greet")) return lessonIcons.greetings;
    return lessonIcons.cafe;
  };

  const getLessonStatus = (lessonId: string, index: number): LessonStatus => {
    const stored = lessonProgress[lessonId]?.status;
    if (stored && stored !== "locked") return stored;

    if (index === 0) return "completed";
    if (index === 1) return "completed";
    if (index === 2) return "in_progress";
    return "locked";
  };

  const getLessonProgress = (lessonId: string, index: number) => {
    const stored = lessonProgress[lessonId];
    if (stored) return stored;

    if (index < 2) return { completedCount: 6, totalCount: 6 };
    if (index === 2) return { completedCount: 3, totalCount: 6 };
    return { completedCount: 0, totalCount: 6 };
  };

  const completedCount = lessons.filter((l, i) => {
    const status = getLessonStatus(l!.id, i);
    return status === "completed";
  }).length;

  if (!selectedLanguage) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.background }}>
        <View className="flex-1 justify-center items-center" >
          <Text
            className="text-lg font-medium text-text-secondary"
          >
            Please select a language first
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
      <SafeAreaView
          style={{flex: 1, backgroundColor: colors.neutral.background}}
      >
          <ScrollView
              style={{flex: 1}}
              contentContainerStyle={{paddingBottom: 100}}
              showsVerticalScrollIndicator={false}
          >
              <UnitHero
                  title={currentUnit?.title || "Lessons"}
                  unitNumber={currentUnit?.order || 1}
                  completedLessons={completedCount}
                  totalLessons={lessons.length}
                  accentColor={currentUnit?.color || colors.primary.purple}
              />

              <UnitTabs activeTab={activeTab} onTabChange={setActiveTab} />

              <View style={{paddingHorizontal: 20, marginTop: 20}}>
                  {activeTab === "lessons" ? (
                      lessons.map((lesson, index) => {
                          if (!lesson) return null;
                          const status = getLessonStatus(lesson.id, index);
                          const progress = getLessonProgress(lesson.id, index);

                          return (
                              <LessonCard
                                  key={lesson.id}
                                  lessonNumber={index + 1}
                                  title={lesson.title}
                                  status={status}
                                  completedCount={progress.completedCount}
                                  totalCount={progress.totalCount}
                                  iconUrl={getLessonIcon(lesson.title)}
                                  onPress={() => {
                                      if (status === "locked") {
                                          setLessonStatus(
                                              lesson.id,
                                              "available"
                                          );
                                      }
                                  }}
                              />
                          );
                      })
                  ) : (
                      <View className="p-8 items-center justify-center">
                          <Text className="text-lg font-medium text-text-primary">
                              Practice coming soon!
                          </Text>
                      </View>
                  )}
              </View>
          </ScrollView>
      </SafeAreaView>
  );
}
