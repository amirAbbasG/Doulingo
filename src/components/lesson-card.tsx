import { View, Text, Pressable, Image } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { LessonStatus } from "@/types/learning";
import { colors } from "@/theme/colors";
import {cn} from "@/lib/utills";

interface LessonCardProps {
  lessonNumber: number;
  title: string;
  status: LessonStatus;
  completedCount?: number;
  totalCount?: number;
  iconUrl?: string;
  onPress: () => void;
}

export function LessonCard({
  lessonNumber,
  title,
  status,
  completedCount = 0,
  totalCount = 6,
  iconUrl,
  onPress,
}: LessonCardProps) {
  const isCompleted = status === "completed";
  const isInProgress = status === "in_progress";
  const isLocked = status === "locked";

  return (
      <Pressable
          onPress={onPress}
          disabled={isLocked}
          className={cn(
              "rounded-2xl p-4 mb-3 ",
              isInProgress
                  ? "bg-[#F5F0FF] border-2 border-lingua-purple"
                  : "bg-background border border-border",
              isLocked && "opacity-70"
          )}
      >
          <View className="flex flex-row items-center justify-center">
              <View className="flex-1">
                  <Text
                      className={cn("text-sm font-sans mb-1",
                          isInProgress ? "text-lingua-purple" : "text-text-secondary"
                      )}
                  >
                      Lesson {lessonNumber}
                  </Text>
                  <Text
                      className="text-lg font-semibold text-text-primary"
                  >
                      {title}
                  </Text>
                  {isInProgress && (
                      <Text
                          className="text-sm font-sans text-lingua-purple mt-1"
                      >
                          In progress
                      </Text>
                  )}
                  {isLocked && (
                      <Text
                          className="text-sm font-sans text-text-secondary mt-1"
                      >
                          {completedCount} / {totalCount} lessons
                      </Text>
                  )}
              </View>

              <View style={{marginLeft: 12}}>
                  {isCompleted && (
                      <View className="size-7 bg-success rounded-full justify-center items-center">
                          <Ionicons
                              name="checkmark"
                              size={18}
                              color="#FFFFFF"
                          />
                      </View>
                  )}

                  {isInProgress && iconUrl && (
                      <Image
                          source={{uri: iconUrl}}
                          style={{width: 48, height: 48}}
                          resizeMode="contain"
                          className="rounded-xl"
                      />
                  )}

                  {isLocked && (
                      <Ionicons
                          name="lock-closed"
                          size={24}
                          color={colors.neutral.textSecondary}
                      />
                  )}
              </View>
          </View>
      </Pressable>
  );
}
