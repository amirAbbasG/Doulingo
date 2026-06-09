export const shadows = {
  card: "0 1px 3px rgba(13, 19, 43, 0.06), 0 1px 2px rgba(13, 19, 43, 0.04)",
  soft: "0 2px 8px rgba(13, 19, 43, 0.08)",
} as const;

export type Shadows = typeof shadows;
