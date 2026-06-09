import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";

import { images } from "@/constants/images";
import { colors } from "@/theme/colors";

const primaryColors = [
  { name: "Lingua Purple", className: "bg-lingua-purple", hex: colors.primary.purple },
  {
    name: "Lingua Deep Purple",
    className: "bg-lingua-deep-purple",
    hex: colors.primary.deepPurple,
  },
  { name: "Lingua Blue", className: "bg-lingua-blue", hex: colors.primary.blue },
  { name: "Lingua Green", className: "bg-lingua-green", hex: colors.primary.green },
] as const;

const semanticColors = [
  { name: "Success", className: "bg-success", hex: colors.semantic.success },
  { name: "Warning", className: "bg-warning", hex: colors.semantic.warning },
  { name: "Streak", className: "bg-streak", hex: colors.semantic.streak },
  { name: "Error", className: "bg-error", hex: colors.semantic.error },
  { name: "Info", className: "bg-info", hex: colors.semantic.info },
] as const;

const neutralColors = [
  {
    name: "Text / Primary",
    className: "bg-text-primary",
    hex: colors.neutral.textPrimary,
  },
  {
    name: "Text / Secondary",
    className: "bg-text-secondary",
    hex: colors.neutral.textSecondary,
  },
  { name: "Border", className: "bg-border", hex: colors.neutral.border },
  { name: "Surface", className: "bg-surface", hex: colors.neutral.surface },
  {
    name: "Background",
    className: "bg-background border border-border",
    hex: colors.neutral.background,
  },
] as const;

const typographyStyles = [
  { label: "H1", sample: "Page / Screen Title", className: "text-h1" },
  { label: "H2", sample: "Section Title", className: "text-h2" },
  { label: "H3", sample: "Card / Module Title", className: "text-h3" },
  { label: "H4", sample: "Subheading", className: "text-h4" },
  { label: "Body Large", sample: "Important content", className: "text-body-lg" },
  { label: "Body Medium", sample: "Body text", className: "text-body-md" },
  { label: "Body Small", sample: "Supporting text", className: "text-body-sm" },
  { label: "Caption", sample: "Labels, meta text", className: "text-caption" },
] as const;

function DesignSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View className="gap-4">
      <Text className="ds-section__title">{title}</Text>
      <View className="ds-section__divider" />
      {children}
    </View>
  );
}

function ColorSwatch({
  name,
  className,
  hex,
}: {
  name: string;
  className: string;
  hex: string;
}) {
  return (
    <View className="items-center gap-2">
      <View className={`ds-color-swatch ${className}`} />
      <Text className="text-caption text-center text-text-primary">{name}</Text>
      <Text className="text-caption text-center text-text-secondary">{hex}</Text>
    </View>
  );
}

function ColorRow({
  items,
}: {
  items: readonly { name: string; className: string; hex: string }[];
}) {
  return (
    <View className="flex-row flex-wrap gap-4">
      {items.map((item) => (
        <ColorSwatch key={item.name} {...item} />
      ))}
    </View>
  );
}

export default function Index() {
  return (
    <ScrollView
      className="flex-1 bg-surface"
      contentContainerClassName="gap-8 p-6 pb-12"
    >
      <DesignSection title="Brand">
        <View className="ds-card gap-6">
          <View className="items-center gap-4">
            <Image
              source={images.mascotLogo}
              className="h-28 w-28"
              contentFit="contain"
            />
            <Text className="ds-brand-wordmark">lingua</Text>
          </View>
        </View>
      </DesignSection>

      <DesignSection title="Colors">
        <View className="ds-card gap-6">
          <View className="gap-3">
            <Text className="text-h4 text-text-primary">Primary</Text>
            <ColorRow items={primaryColors} />
          </View>

          <View className="gap-3">
            <Text className="text-h4 text-text-primary">Semantic</Text>
            <ColorRow items={semanticColors} />
          </View>

          <View className="gap-3">
            <Text className="text-h4 text-text-primary">Neutrals</Text>
            <ColorRow items={neutralColors} />
          </View>
        </View>
      </DesignSection>

      <DesignSection title="Typography">
        <View className="ds-card gap-5">
          <Text className="text-body-md text-text-secondary">
            Font Family: Poppins — Modern, geometric sans-serif typeface
          </Text>

          {typographyStyles.map((style) => (
            <View key={style.label} className="gap-1 border-b border-border pb-4">
              <Text className="text-caption text-text-secondary">{style.label}</Text>
              <Text className={`${style.className} text-text-primary`}>
                {style.sample}
              </Text>
            </View>
          ))}
        </View>
      </DesignSection>
    </ScrollView>
  );
}
