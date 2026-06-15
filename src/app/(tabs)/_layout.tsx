import { Tabs} from "expo-router";
import Ionicons from "@react-native-vector-icons/ionicons";

import {colors} from "@/theme/colors";

const tabIcons = {
    index: "home",
    learn: "book",
    "ai-teacher": "school",
    chat: "chatbubble",
    profile: "person",
} as const;

export default function TabLayout() {

    return (
        <Tabs
            screenOptions={({route}) => {
                return {
                    headerShown: false,
                    tabBarActiveTintColor: colors.primary.purple,
                    tabBarLabelStyle: {
                        marginTop: 4,
                    },
                    tabBarStyle: {
                        height: 64,
                        maxHeight: 64,

                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                    },
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={`${tabIcons[route.name as keyof typeof tabIcons]}${focused ? "" : "-outline"}`}
                            size={24}
                            color={
                                focused
                                    ? colors.primary.purple
                                    : colors.neutral.textSecondary
                            }
                        />
                    ),
                };
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                }}
            />
            <Tabs.Screen
                name="learn"
                options={{
                    title: "Learn",
                }}
            />
            <Tabs.Screen
                name="ai-teacher"
                options={{
                    title: "AI Teacher",
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: "Chat",
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                }}
            />
        </Tabs>
    );
}
