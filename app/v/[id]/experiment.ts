export type ConditionKey =
  | "baseline"
  | "visualClutter"
  | "screenWhitespace"
  | "textAmount"
  | "colorfulness"
  | "imageAesthetic"
  | "accessibility";

export type ScreenConfig = {
  product: "alpha" | "beta";
  condition: ConditionKey;
};

export const screens: Record<string, ScreenConfig> = {
  "k7m2qx": { product: "alpha", condition: "baseline" },
  "v3h9dp": { product: "alpha", condition: "visualClutter" },
  "n8t4cw": { product: "alpha", condition: "screenWhitespace" },
  "y3b7se": { product: "alpha", condition: "textAmount" },
  "a4q9sn": { product: "alpha", condition: "colorfulness" },
  "h2w6fc": { product: "alpha", condition: "imageAesthetic" },
  "f6z1jr": { product: "alpha", condition: "accessibility" },
  "r8m2xd": { product: "beta", condition: "baseline" },
  "l5q9au": { product: "beta", condition: "visualClutter" },
  "c2x7pk": { product: "beta", condition: "screenWhitespace" },
  "t9f6ms": { product: "beta", condition: "textAmount" },
  "m8r3vk": { product: "beta", condition: "colorfulness" },
  "z5p7ld": { product: "beta", condition: "imageAesthetic" },
  "w7j4bn": { product: "beta", condition: "accessibility" },
};
