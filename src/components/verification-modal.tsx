import { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function VerificationModal({
  visible,
  onClose,
}: VerificationModalProps) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const prevVisible = useRef(false);

  useEffect(() => {
    if (visible && !prevVisible.current) {
      setCode(["", "", "", "", "", ""]);
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 300);
    }
    prevVisible.current = visible;
  }, [visible]);

  useEffect(() => {
    const fullCode = code.join("");
    if (fullCode.length === 6) {
      setTimeout(() => {
        onClose();
        router.push("/");
      }, 200);
    }
  }, [code, onClose]);

  const handleKeyPress = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index: number) => {
    if (!code[index] && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputRefs.current[index - 1]?.focus();
    } else {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        className="flex-1 items-center justify-end bg-black/50"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="w-full"
        >
          <TouchableOpacity activeOpacity={1}>
            <View className="rounded-t-3xl bg-white px-6 pb-10 pt-6">
              <View className="mb-6 flex-row items-center justify-between">
                <Text className="text-h2 text-text-primary">
                  Verify your email
                </Text>
                <TouchableOpacity onPress={onClose}>
                  <Ionicons name="close" size={24} color="#6B7280" />
                </TouchableOpacity>
              </View>

              <Text className="mb-6 text-body-md text-text-secondary">
                We&apos;ve sent a 6-digit code to your email. Enter it below to
                continue.
              </Text>

              <View className="flex-row justify-between gap-3">
                {code.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => {
                      inputRefs.current[index] = ref;
                    }}
                    value={digit}
                    onChangeText={(value) => handleKeyPress(index, value)}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === "Backspace") {
                        handleBackspace(index);
                      }
                    }}
                    keyboardType="number-pad"
                    maxLength={1}
                    selectTextOnFocus
                    className="h-14 w-12 items-center justify-center rounded-xl border border-border text-center text-h2 text-text-primary"
                  />
                ))}
              </View>

              <TouchableOpacity
                onPress={() => {
                  const fullCode = code.join("");
                  if (fullCode.length === 6) {
                    onClose();
                    router.push("/");
                  }
                }}
                disabled={code.join("").length !== 6}
                className="mt-6 h-14 items-center justify-center rounded-2xl bg-lingua-purple active:opacity-90 disabled:opacity-50"
              >
                <Text className="text-center font-semibold text-[16px] text-white">
                  Verify
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="mt-4 items-center">
                <Text className="text-body-md text-lingua-purple">
                  Resend code
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </Modal>
  );
}
