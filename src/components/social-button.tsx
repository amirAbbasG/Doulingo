import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

interface SocialButtonProps {
  provider: "google" | "facebook" | "apple";
  label: string;
  onPress?: () => void;
}

const icons = {
  google: <Ionicons name="logo-google" size={24} color="#DB4437" />,
  facebook: <Ionicons name="logo-facebook" size={24} color="#1877F2" />,
  apple: <Ionicons name="logo-apple" size={24} color="#000" />,
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
      className="flex-row items-center rounded-2xl border border-border bg-white px-8 py-3.5 active:opacity-90"
    >
      <View className="w-8 items-center">{Icon}</View>
      <Text className="flex-1 text-center text-h4">{label}</Text>
    </TouchableOpacity>
  );
}
