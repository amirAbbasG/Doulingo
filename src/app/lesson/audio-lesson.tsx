import { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import Ionicons from "@react-native-vector-icons/ionicons";

import { getLessonById } from "@/constants/lessons";
import { teacherImages } from "@/constants/images";
import { cn } from "@/lib/utills";

export default function AudioLessonScreen() {
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();
  const lesson = lessonId ? getLessonById(lessonId) : undefined;

  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isSubtitlesOn, setIsSubtitlesOn] = useState(true);

  const currentPhrase = lesson?.phrases?.[0];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-lg py-3">
        <Pressable
          onPress={() => router.back()}
          className="w-10 h-10 justify-center"
        >
          <Ionicons name="chevron-back" size={28} color="#0D132B" />
        </Pressable>

        <View className="flex-1 items-center">
          <Text className="text-lg font-semibold text-text-primary">
            AI Teacher
          </Text>
          <View className="flex-row items-center gap-1.5 mt-0.5">
            <View className="w-2 h-2 rounded-full bg-success" />
            <Text className="text-body-sm text-success">Online</Text>
          </View>
        </View>

        <View className="flex-row items-center gap-3">
          <Pressable className="w-10 h-10 rounded-full bg-surface justify-center items-center">
            <Ionicons name="videocam" size={20} color="#0D132B" />
          </Pressable>
          <View className="w-10 h-10 rounded-full bg-lingua-purple justify-center items-center">
            <Text className="text-sm font-semibold text-white">
              {lesson?.order ?? 12}
            </Text>
          </View>
          <Pressable className="w-10 h-10 rounded-full bg-surface justify-center items-center">
            <Ionicons name="person" size={20} color="#0D132B" />
          </Pressable>
        </View>
      </View>

      {/* Teacher Area */}
      <View className="mx-4 mt-2 rounded-[20px] overflow-hidden h-[420px] bg-[#F5E6D3]">
        {/* Background */}
        <Image
          source={{ uri: teacherImages.roomBackground }}
          className="absolute w-full h-full"
          resizeMode="cover"
        />

        {/* Overlay for blur effect */}
        <View className="absolute w-full h-full bg-[rgba(245,230,211,0.4)]" />

        {/* User webcam preview */}
        <View className="absolute top-4 right-4 w-20 h-[100px] rounded-md overflow-hidden border-2 border-white">
          <Image
            source={{ uri: teacherImages.userAvatar }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* Teacher mascot */}
        <View className="flex-1 justify-center items-center pt-10">
          <Image
            source={{ uri: teacherImages.mascot }}
            className="w-60 h-60"
            resizeMode="contain"
          />
        </View>

        {/* Speech bubble */}
        <View className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-4 flex-row items-center justify-between shadow-soft">
          <View className="flex-1">
            <Text className="text-lg font-semibold text-text-primary mb-1">
              {currentPhrase?.text ?? "¡Muy bien!"}
            </Text>
            <Text className="text-body-md text-text-secondary">
              {currentPhrase?.translation ?? "That was great!"} 👏
            </Text>
          </View>
          <Pressable className="w-10 h-10 rounded-full bg-surface justify-center items-center ml-3">
            <Ionicons name="volume-high" size={22} color="#6C4EF5" />
          </Pressable>
        </View>
      </View>

      {/* Controls */}
      <View className="flex-row justify-center items-center gap-6 mt-6 px-5">
        {/* Camera */}
        <View className="items-center gap-2">
          <Pressable
            onPress={() => setIsCameraOn(!isCameraOn)}
            className={cn(
              "w-[60px] h-[60px] rounded-full justify-center items-center border-2",
              isCameraOn
                ? "bg-lingua-purple border-lingua-purple"
                : "bg-surface border-border"
            )}
          >
            <Ionicons
              name={isCameraOn ? "videocam" : "videocam-outline"}
              size={26}
              color={isCameraOn ? "#FFFFFF" : "#0D132B"}
            />
          </Pressable>
          <Text className="text-xs text-text-secondary">Camera</Text>
        </View>

        {/* Mic */}
        <View className="items-center gap-2">
          <Pressable
            onPress={() => setIsMicOn(!isMicOn)}
            className={cn(
              "w-[60px] h-[60px] rounded-full justify-center items-center border-2",
              isMicOn
                ? "bg-lingua-purple border-lingua-purple"
                : "bg-surface border-border"
            )}
          >
            <Ionicons
              name={isMicOn ? "mic" : "mic-outline"}
              size={26}
              color={isMicOn ? "#FFFFFF" : "#0D132B"}
            />
          </Pressable>
          <Text className="text-xs text-text-secondary">Mic</Text>
        </View>

        {/* Subtitles */}
        <View className="items-center gap-2">
          <Pressable
            onPress={() => setIsSubtitlesOn(!isSubtitlesOn)}
            className={cn(
              "w-[60px] h-[60px] rounded-full justify-center items-center border-2",
              isSubtitlesOn
                ? "bg-lingua-purple border-lingua-purple"
                : "bg-surface border-border"
            )}
          >
            <Ionicons
              name={isSubtitlesOn ? "text" : "text-outline"}
              size={26}
              color={isSubtitlesOn ? "#FFFFFF" : "#0D132B"}
            />
          </Pressable>
          <Text className="text-xs text-text-secondary">Subtitles</Text>
        </View>

        {/* End Call */}
        <View className="items-center gap-2">
          <Pressable
            onPress={() => router.back()}
            className="w-[60px] h-[60px] rounded-full bg-error justify-center items-center"
          >
            <Ionicons name="call" size={26} color="#FFFFFF" />
          </Pressable>
          <Text className="text-xs text-text-secondary">End Call</Text>
        </View>
      </View>

      {/* Feedback Section */}
      <View className="mx-5 mt-6 bg-surface rounded-2xl p-5 flex-row justify-around">
        <View className="items-center">
          <Text className="text-sm font-semibold text-text-primary mb-1">
            Speaking
          </Text>
          <Text className="text-sm font-medium text-success">Excellent</Text>
        </View>

        <View className="items-center">
          <Text className="text-sm font-semibold text-text-primary mb-1">
            Pronunciation
          </Text>
          <Text className="text-sm font-medium text-lingua-purple">Great</Text>
        </View>

        <View className="items-center">
          <Text className="text-sm font-semibold text-text-primary mb-1">
            Grammar
          </Text>
          <Text className="text-sm font-medium text-lingua-purple">Good</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
