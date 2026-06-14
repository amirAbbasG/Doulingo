import React, {type FC} from "react";
import {PlanItem} from "@/types/learning";
import {Text, View} from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import {colors} from "@/theme";

interface IProps {
    item: PlanItem;
    isCompleted: boolean;
}

const HomePlanCard: FC<IProps> = ({item, isCompleted}) => {
    return (
        <View className="flex-row items-center rounded-2xl p-4">
            {/* Icon */}
            <View
                className="items-center justify-center rounded-xl mr-4"
                style={{
                    width: 48,
                    height: 48,
                    backgroundColor: item.iconBg,
                }}
            >
                <Ionicons name={item.icon} size={22} color={item.iconColor} />
            </View>
            {/* Text */}
            <View className="flex-1">
                <Text
                    className="text-body-lg"
                    style={{
                        fontFamily: "Poppins-SemiBold",
                        color: colors.neutral.textPrimary,
                    }}
                >
                    {item.title}
                </Text>
                <Text
                    className="text-body-sm"
                    style={{
                        color: colors.neutral.textSecondary,
                    }}
                >
                    {item.subtitle}
                </Text>
            </View>
            {/* Status */}
            {isCompleted ? (
                <View
                    className="items-center justify-center rounded-full"
                    style={{
                        width: 28,
                        height: 28,
                        backgroundColor: colors.primary.purple,
                    }}
                >
                    <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                </View>
            ) : (
                <View
                    className="rounded-full"
                    style={{
                        width: 28,
                        height: 28,
                        borderWidth: 2,
                        borderColor: colors.neutral.border,
                    }}
                />
            )}
        </View>
    );
};

export default HomePlanCard;
