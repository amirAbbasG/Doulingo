import { Text, View } from "react-native";

interface AuthDividerProps {
  text?: string;
}

export default function AuthDivider({ text = "or continue with" }: AuthDividerProps) {
  return (
    <View className="flex-row items-center gap-3 py-1">
      <View className="h-px flex-1 bg-border" />
      <Text className="text-body-sm text-text-secondary">{text}</Text>
      <View className="h-px flex-1 bg-border" />
    </View>
  );
}
