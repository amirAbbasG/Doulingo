import { Image } from "expo-image";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";

import { images } from "@/constants/images";
import { colors } from "@/theme/colors";
import {router} from "expo-router";


export default function Index() {
  return (
    <View
      className="flex-1 items-center justify-center gap-4"
    >
        <Text className=" text-h1">Moulingo</Text>
      <TouchableOpacity onPress={() => router.push("/onboarding")}>
        <Text className="text-lingua-purple">
          Onboarding
        </Text>
      </TouchableOpacity>
    </View>
  );
}
