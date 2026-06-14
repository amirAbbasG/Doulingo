import {Text, View} from "react-native";
import {cn} from "@/lib/utills";

interface AuthDividerProps {
    text?: string;
    className?: string;
}

export default function AuthDivider({
    text = "or continue with",
    className = "",
}: AuthDividerProps) {
    return (
        <View className={cn("flex-row items-center gap-3 py-1", className)}>
            <View className="h-px flex-1 bg-border" />
            <Text className="text-body-sm text-text-secondary">{text}</Text>
            <View className="h-px flex-1 bg-border" />
        </View>
    );
}
