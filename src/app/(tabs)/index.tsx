import {View, Text, ScrollView, Pressable} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useUser} from "@clerk/expo";
import Ionicons from "@react-native-vector-icons/ionicons";
import {Image} from "expo-image";

import {useLanguageStore} from "@/store/language-store";
import {useHomeStore} from "@/store/home-store";
import {getUnitsByLanguage} from "@/constants/units";
import {images} from "@/constants/images";
import {colors} from "@/theme/colors";
import {PlanItem} from "@/types/learning";
import HomePlanCard from "@/components/home-plan-card";

const todayPlanItems: PlanItem[] = [
    {
        id: "lesson-cafe",
        type: "lesson" as const,
        title: "Lesson",
        subtitle: "At the café",
        icon: "book",
        iconColor: colors.primary.blue,
        iconBg: "#EEF2FF",
    },
    {
        id: "ai-conversation",
        type: "ai_conversation" as const,
        title: "AI Conversation",
        subtitle: "Talk about your day",
        icon: "headset",
        iconColor: colors.primary.purple,
        iconBg: "#F3E8FF",
    },
    {
        id: "new-words",
        type: "new_words" as const,
        title: "New words",
        subtitle: "10 words",
        icon: "chatbubble-ellipses",
        iconColor: colors.semantic.error,
        iconBg: "#FEE2E2",
    },
];

export default function HomeScreen() {
    const {user} = useUser();
    const {selectedLanguage} = useLanguageStore();
    const {dailyXP, dailyGoal, streak, completedTasks} = useHomeStore();

    const firstName = user?.firstName || "User";
    const languageName = selectedLanguage?.name || "Spanish";

    const units = selectedLanguage
        ? getUnitsByLanguage(selectedLanguage.id)
        : [];
    const currentUnit = units[0];

    const xpProgress = dailyXP / dailyGoal;

    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: colors.neutral.background}}
        >
            <ScrollView
                className="flex-1"
                contentContainerStyle={{paddingBottom: 20}}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View className="flex-row items-center justify-between px-5 pt-2 pb-4">
                    <View className="flex-row items-center gap-3">
                        <Text className="text-2xl">🇪🇸</Text>
                        <Text
                            className="text-h3"
                            style={{color: colors.neutral.textPrimary}}
                        >
                            Hola, {firstName}! 👋
                        </Text>
                    </View>
                    <View className="flex-row items-center gap-4">
                        <View className="flex-row items-center gap-1.5">
                            <Image
                                source={images.streakFire}
                                style={{width: 32, height: 32}}
                                contentFit="contain"
                            />
                            <Text
                                className="text-h3 leading-5"
                                style={{
                                    fontFamily: "Poppins-SemiBold",
                                    color: colors.semantic.streak,
                                }}
                            >
                                {streak}
                            </Text>
                        </View>
                        <Pressable>
                            <Ionicons
                                name="notifications-outline"
                                size={24}
                                color={colors.neutral.textPrimary}
                            />
                        </Pressable>
                    </View>
                </View>

                {/* Daily Goal Card */}
                <View className="mx-5 mb-5">
                    <View
                        className="flex-row items-center justify-between rounded-2xl p-5"
                        style={{
                            backgroundColor: colors.neutral.surface,
                            shadowColor: "#000",
                            shadowOffset: {width: 0, height: 1},
                            shadowOpacity: 0.06,
                            shadowRadius: 3,
                            elevation: 2,
                        }}
                    >
                        <View className="flex-1">
                            <Text
                                className="text-body-md mb-1"
                                style={{color: colors.neutral.textSecondary}}
                            >
                                Daily goal
                            </Text>
                            <View className="flex-row items-baseline gap-1 mb-3">
                                <Text
                                    className="text-h2"
                                    style={{color: colors.neutral.textPrimary}}
                                >
                                    {dailyXP}
                                </Text>
                                <Text
                                    className="text-body-md"
                                    style={{
                                        color: colors.neutral.textSecondary,
                                    }}
                                >
                                    / {dailyGoal} XP
                                </Text>
                            </View>
                            {/* Progress Bar */}
                            <View
                                className="h-2.5 rounded-full overflow-hidden"
                                style={{
                                    backgroundColor: "#E5E7EB",
                                    width: "85%",
                                }}
                            >
                                <View
                                    className="h-full rounded-full"
                                    style={{
                                        width: `${Math.min(xpProgress * 100, 100)}%`,
                                        backgroundColor: colors.primary.purple,
                                    }}
                                />
                            </View>
                        </View>
                        <Image
                            source={images.treasure}
                            style={{width: 80, height: 80}}
                            contentFit="contain"
                        />
                    </View>
                </View>

                {/* Continue Learning Card */}
                <View className="mx-5 mb-6">
                    <View
                        className="rounded-2xl overflow-hidden"
                        style={{
                            backgroundColor: colors.primary.purple,
                            shadowColor: colors.primary.purple,
                            shadowOffset: {width: 0, height: 4},
                            shadowOpacity: 0.3,
                            shadowRadius: 8,
                            elevation: 6,
                        }}
                    >
                        <View className="flex-row">
                            <View className="flex-1 p-5">
                                <Text
                                    className="text-body-sm mb-1"
                                    style={{color: "rgba(255,255,255,0.8)"}}
                                >
                                    Continue learning
                                </Text>
                                <Text
                                    className="text-h2 mb-0.5"
                                    style={{color: "#FFFFFF"}}
                                >
                                    {languageName}
                                </Text>
                                <Text
                                    className="text-body-md mb-4"
                                    style={{color: "rgba(255,255,255,0.8)"}}
                                >
                                    A1 • Unit {currentUnit?.order || 1}
                                </Text>
                                <Pressable
                                    className="self-start rounded-xl px-5 py-2.5"
                                    style={{backgroundColor: "#FFFFFF"}}
                                >
                                    <Text
                                        className="text-body-md"
                                        style={{
                                            fontFamily: "Poppins-SemiBold",
                                            color: colors.primary.purple,
                                        }}
                                    >
                                        Continue
                                    </Text>
                                </Pressable>
                            </View>
                            <Image
                                source={images.palace}
                                style={{width: 130, height: 160}}
                                contentFit="contain"
                            />
                        </View>
                    </View>
                </View>

                {/* Today's Plan */}
                <View className="px-5 mb-6">
                    <View className="flex-row items-center justify-between mb-4">
                        <Text
                            className="text-h4"
                            style={{color: colors.neutral.textPrimary}}
                        >
                            Today&apos;s plan
                        </Text>
                        <Pressable>
                            <Text
                                className="text-body-md"
                                style={{
                                    fontFamily: "Poppins-SemiBold",
                                    color: colors.primary.purple,
                                }}
                            >
                                View all
                            </Text>
                        </Pressable>
                    </View>

                    <View className="gap-3">
                        {todayPlanItems.map((item) => {
                            const isCompleted = completedTasks.includes(
                                item.id
                            );
                            return (
                                <HomePlanCard
                                    item={item}
                                    isCompleted={isCompleted}
                                    key={item.id}
                                />
                            );
                        })}
                    </View>
                </View>

                {/* Next Up */}
                <View className="px-5 mb-4">
                    <Text
                        className="text-body-sm mb-3"
                        style={{
                            fontFamily: "Poppins-SemiBold",
                            color: colors.neutral.textSecondary,
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                        }}
                    >
                        Next up
                    </Text>
                    <View
                        className="flex-row items-center rounded-2xl p-4"
                        style={{
                            backgroundColor: "#F0FDF4",
                            shadowColor: "#000",
                            shadowOffset: {width: 0, height: 1},
                            shadowOpacity: 0.04,
                            shadowRadius: 2,
                            elevation: 1,
                        }}
                    >
                        <View className="flex-1">
                            <Text
                                className="text-h4 mb-0.5"
                                style={{color: colors.neutral.textPrimary}}
                            >
                                AI Video Call
                            </Text>
                            <Text
                                className="text-body-sm"
                                style={{color: colors.neutral.textSecondary}}
                            >
                                Practice speaking
                            </Text>
                        </View>
                        {/* Avatar placeholder */}
                        <View className="relative mr-3">
                            <View
                                className="rounded-full overflow-hidden"
                                style={{
                                    width: 72,
                                    height: 72,
                                    backgroundColor: "#E5E7EB",
                                }}
                            >
                                <Image
                                    source={images.mascotAuth}
                                    style={{width: 72, height: 72}}
                                    contentFit="cover"
                                />
                            </View>
                        </View>
                        {/* Video call button */}
                        <Pressable
                            className="items-center justify-center rounded-full"
                            style={{
                                width: 44,
                                height: 44,
                                backgroundColor: colors.primary.green,
                                shadowColor: colors.primary.green,
                                shadowOffset: {width: 0, height: 2},
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                elevation: 3,
                            }}
                        >
                            <Ionicons
                                name="videocam"
                                size={22}
                                color="#FFFFFF"
                            />
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
