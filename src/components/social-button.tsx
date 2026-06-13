import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

interface SocialButtonProps {
  provider: "google" | "facebook" | "apple";
  label: string;
  onPress?: () => void;
}

const ICON_CONTAINER_SIZE = 28;

const iconBg: Record<string, string> = {
  google: "#4285F4",
  facebook: "#1877F2",
  apple: "#000000",
};

const icons = {
  google: <AntDesign name="google" size={24} color="#DB4437" />,
  facebook: <FontAwesome name="facebook" size={24} color="#1877F2" />,
  apple: <AntDesign name="apple" size={24} color="#000" />,
};

export default function SocialButton({
  provider,
  label,
  onPress,
}: SocialButtonProps) {
  const Icon = icons[provider];

  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center rounded-2xl border border-border bg-white px-8  py-3.5 active:opacity-90"
    >
        <View className="w-8 items-center">{Icon}</View>
        <Text className="flex-1 text-center text-h4">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
