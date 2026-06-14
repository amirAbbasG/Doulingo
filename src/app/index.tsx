import {Redirect} from "expo-router";
import {useAuth} from "@clerk/expo";
import {Text, TouchableOpacity, View} from "react-native";

export default function Index() {
    const {isSignedIn, isLoaded, signOut} = useAuth();

    if (!isLoaded) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text className="text-body-md text-text-secondary">Loading...</Text>
            </View>
        );
    }

    if (!isSignedIn) {
        return <Redirect href="/onboarding"/>;
    }

    return (
        <View className="flex-1 items-center justify-center gap-4">
            <Text className="text-h1">Moulingo</Text>
            <Text className="text-body-md text-text-secondary">
                Welcome back! You&apos;re signed in.
            </Text>
            <TouchableOpacity onPress={() => signOut()}
                              className="mt-5 h-14 px-6 items-center justify-center rounded-2xl bg-lingua-purple active:opacity-90">
                <Text className="text-center font-semibold text-[16px] text-white">
                    Sign Out
                </Text>
            </TouchableOpacity>
        </View>
    );
}
