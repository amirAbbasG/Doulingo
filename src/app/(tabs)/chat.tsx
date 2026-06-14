import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontFamily: "Poppins-Bold", color: "#0D132B" }}>
          Chat
        </Text>
        <Text style={{ fontSize: 14, fontFamily: "Poppins-Regular", color: "#6B7280", marginTop: 8 }}>
          AI conversations coming soon
        </Text>
      </View>
    </SafeAreaView>
  );
}
