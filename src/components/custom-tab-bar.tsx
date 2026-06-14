import { useEffect, useState } from "react";
import { View, Pressable, StyleSheet, Platform } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import { colors } from "@/theme/colors";

interface CustomTabBarProps {
  state: {
    index: number;
    routes: { key: string; name: string }[];
  };
  descriptors: Record<
    string,
    {
      options: {
        title?: string;
        tabBarIcon?: (props: { focused: boolean; color: string; size: number }) => React.ReactNode;
      };
    }
  >;
  navigation: {
    navigate: (name: string) => void;
  };
}

const TAB_HEIGHT = 70;
const INDICATOR_SIZE = 48;

export function CustomTabBar({ state, descriptors, navigation }: CustomTabBarProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const translateX = useSharedValue(0);

  const tabs = state.routes.map((route) => ({
    key: route.key,
    title: descriptors[route.key]?.options?.title || route.name,
    icon: descriptors[route.key]?.options?.tabBarIcon,
  }));

  useEffect(() => {
    if (containerWidth > 0) {
      const tabWidth = containerWidth / tabs.length;
      const targetX = state.index * tabWidth + tabWidth / 2 - INDICATOR_SIZE / 2;
      translateX.value = withSpring(targetX, {
        damping: 20,
        stiffness: 300,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.index, containerWidth, tabs.length]);

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      style={styles.container}
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      <View style={styles.tabBarContent}>
        <Animated.View
          style={[styles.indicator, animatedIndicatorStyle]}
        />
        {tabs.map((tab, index) => {
          const isActive = state.index === index;
          const handlePress = () => {
            if (!isActive) {
              navigation.navigate(tab.key);
            }
          };

          return (
            <Pressable
              key={tab.key}
              style={styles.tab}
              onPress={handlePress}
            >
              <View style={styles.iconContainer}>
                {tab.icon?.({ focused: isActive, color: isActive ? "#FFFFFF" : colors.neutral.textSecondary, size: 24 })}
              </View>
              {!isActive && (
                <Animated.Text style={styles.label}>
                  {tab.title}
                </Animated.Text>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: colors.neutral.border,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  tabBarContent: {
    flexDirection: "row",
    height: TAB_HEIGHT,
    alignItems: "center",
    position: "relative",
  },
  indicator: {
    position: "absolute",
    width: INDICATOR_SIZE,
    height: INDICATOR_SIZE,
    borderRadius: INDICATOR_SIZE / 2,
    backgroundColor: colors.primary.purple,
    top: (TAB_HEIGHT - INDICATOR_SIZE) / 2,
    zIndex: 0,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: TAB_HEIGHT,
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  label: {
    fontSize: 10,
    fontFamily: "Poppins-Medium",
    color: colors.neutral.textSecondary,
    marginTop: 2,
  },
});
