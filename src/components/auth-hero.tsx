import React from "react";
import {View} from "react-native";
import {Image} from "expo-image";
import {images} from "@/constants/images";

const AuthHero = () => {
    return (
        <View className="items-center  -mb-8">
            <Image
                source={images.mascotAuth}
                style={{ width: 200, height: 160 }}
                contentFit="contain"
            />
        </View>
    );
};

export default AuthHero;