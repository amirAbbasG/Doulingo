import { fontFamily } from "./fonts";

export const typography = {
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    lineHeight: 1.2,
    usage: "Page / Screen Title",
  },
  h2: {
    fontFamily: fontFamily.semibold,
    fontSize: 24,
    lineHeight: 1.3,
    usage: "Section Title",
  },
  h3: {
    fontFamily: fontFamily.semibold,
    fontSize: 20,
    lineHeight: 1.3,
    usage: "Card / Module Title",
  },
  h4: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    lineHeight: 1.4,
    usage: "Subheading",
  },
  bodyLarge: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 1.6,
    usage: "Important content",
  },
  bodyMedium: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 1.6,
    usage: "Body text",
  },
  bodySmall: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 1.6,
    usage: "Supporting text",
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    lineHeight: 1.4,
    usage: "Labels, meta text",
  },
} as const;

export type Typography = typeof typography;
