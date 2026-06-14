import { useEffect, useRef, useState } from "react";
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  onVerify: (code: string) => void;
  onResendCode?: () => void;
  error?: string | null;
  isLoading?: boolean;
}

export default function VerificationModal({
  visible,
  onClose,
  onVerify,
  onResendCode,
  error,
  isLoading = false,
}: VerificationModalProps) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const prevVisible = useRef(false);
  const [overlayAnim] = useState(() => new Animated.Value(0));

  useEffect(() => {
    if (visible && !prevVisible.current) {
      setCode(["", "", "", "", "", ""]);
      overlayAnim.setValue(0);

      Animated.timing(overlayAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        delay: 150,
      }).start(() => {
        setTimeout(() => {
          inputRefs.current[0]?.focus();
        }, 150);
      });
    }
    prevVisible.current = visible;
  }, [visible, overlayAnim]);

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

  const handleVerify = () => {
    const fullCode = code.join("");
    if (fullCode.length === 6) {
      onVerify(fullCode);
    }
  };

  const handleClose = () => {
    Animated.timing(overlayAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType="slide"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={handleClose}>
          <Animated.View
            style={{
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              opacity: overlayAnim,
            }}
          />
        </TouchableWithoutFeedback>

        <View className="rounded-t-3xl bg-white px-6 pb-10 pt-6">
          <View className="mb-1 flex-row items-center justify-between">
            <Text className="text-h2 text-text-primary">
              Verify your email
            </Text>
            <TouchableOpacity onPress={handleClose}>
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
                style={{
                  height: 56,
                  width: 48,
                  borderWidth: 1,
                  borderColor: error ? "#EF4444" : "#E5E7EB",
                  borderRadius: 12,
                  textAlign: "center",
                  verticalAlign: "middle",
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 24,
                  lineHeight: 32,
                  color: "#0D132B",
                }}
              />
            ))}
          </View>

          {error && (
            <Text className="mt-2 text-center text-sm text-red-500">
              {error}
            </Text>
          )}

          <TouchableOpacity
            onPress={handleVerify}
            disabled={code.join("").length !== 6 || isLoading}
            className="mt-6 h-14 items-center justify-center rounded-2xl bg-lingua-purple active:opacity-90 disabled:opacity-50"
          >
            <Text className="text-center font-semibold text-[16px] text-white">
              {isLoading ? "Verifying..." : "Verify"}
            </Text>
          </TouchableOpacity>

          {onResendCode && (
            <TouchableOpacity
              className="mt-4 items-center"
              onPress={onResendCode}
            >
              <Text className="text-body-md text-lingua-purple">
                Resend code
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
