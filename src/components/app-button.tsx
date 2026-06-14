import React, {ComponentProps, type FC} from "react";
import {Pressable, Text} from "react-native";
import {cn} from "@/lib/utills";

interface IProps extends ComponentProps<typeof Pressable>{
    title: string;
    titleClassName?: string;
    Icon?: React.ReactNode;
}

const AppButton: FC<IProps> = ({
    className,
    Icon,
    onPress,
    title,
    titleClassName,
    ...otherProps
}) => {
    return (
        <Pressable
            accessibilityRole="button"
            onPress={onPress}
            className={cn(
                "h-14 flex-row items-center justify-center gap-1 rounded-2xl bg-lingua-purple px-6 active:opacity-90",
                className
            )}
            {...otherProps}
        >
            <Text
                className={cn(
                    " text-center font-semibold text-body-lg text-white",
                    titleClassName
                )}
            >
                {title}
            </Text>
            {Icon}
        </Pressable>
    );
};

export default AppButton;
