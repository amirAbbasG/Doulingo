import React, {type FC} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {router} from "expo-router";
import Ionicons  from "@react-native-vector-icons/ionicons";


interface IProps {
    title: string;
    subtitle: string;
}

const AuthHeader: FC<IProps> = ({
                                    title,
                                    subtitle
                                }) => {
    return (
        <>
            <TouchableOpacity
                onPress={() => router.back()}
                className=" h-10 w-10 items-center justify-center"
            >
                <Ionicons name="chevron-back" size={28} color="#0D132B"/>
            </TouchableOpacity>

            <View className="mt-6">
                <Text className="text-h1 text-text-primary">{title}</Text>
                <Text className="mt-1 text-body-md text-text-secondary">
                    {subtitle}
                </Text>
            </View>
        </>
    );
};

export default AuthHeader;