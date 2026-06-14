import { useState } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import Ionicons  from "@react-native-vector-icons/ionicons";

interface AuthTextFieldProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
}

export default function AuthTextField({
  label,
  isPassword = false,
  value,
  onChangeText,
  ...props
}: AuthTextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="rounded-2xl border border-border bg-white px-4 py-3 relative">
      <Text className="text-caption text-text-secondary">{label}</Text>
      <View className="flex-row items-center justify-between">
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !showPassword}
          autoCapitalize="none"
          className=" flex-1 text-body-lg text-text-primary"
          {...props}
        />

      </View>
      {isPassword && (
          <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="absolute top-1/2  right-5"
          >
            <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#6B7280"
            />
          </TouchableOpacity>
      )}
    </View>
  );
}
