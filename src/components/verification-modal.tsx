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
  const [slideAnim] = useState(() => new Animated.Value(0));
  const [overlayAnim] = useState(() => new Animated.Value(0));

  useEffect(() => {
    if (visible && !prevVisible.current) {
      setCode(["", "", "", "", "", ""]);
      overlayAnim.setValue(0);
      slideAnim.setValue(0);

      Animated.timing(overlayAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();

      Animated.spring(slideAnim, {
        toValue: 1,
        damping: 20,
        stiffness: 90,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          inputRefs.current[0]?.focus();
        }, 100);
      });
    }
    prevVisible.current = visible;
  }, [visible, overlayAnim, slideAnim]);

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

  const handleClose = () => {
    Animated.timing(overlayAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => onClose());
  };

  return (
    <Modal visible={visible} transparent statusBarTranslucent>
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

        <Animated.View
          style={{
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [400, 0],
                }),
              },
            ],
          }}
          className="rounded-t-3xl bg-white px-6 pb-10 pt-6"
        >
          <View className="mb-1 flex-row items-center justify-between">
            <Text className="text-h2 text-text-primary">Verify your email</Text>
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
                  borderColor: "#E5E7EB",
                  borderRadius: 12,
                  textAlign: "center",
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 24,
                  color: "#0D132B",
                }}
              />
            ))}
          </View>

          <TouchableOpacity
            onPress={() => {
              const fullCode = code.join("");
              if (fullCode.length === 6) {
                handleClose();
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
            <Text className="text-body-md text-lingua-purple">Resend code</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
