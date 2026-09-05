export type ScreenKey = "cedar" | "ivory" | "orbit";

export type ScreenConfig = {
  product: "alpha" | "beta";
  skin: ScreenKey;
  signal: 0 | 1 | 2;
};

export const screens: Record<string, ScreenConfig> = {
  "k7m2qx": { product: "alpha", skin: "cedar", signal: 0 },
  "v3h9dp": { product: "alpha", skin: "ivory", signal: 0 },
  "n8t4cw": { product: "alpha", skin: "orbit", signal: 0 },
  "f6z1jr": { product: "alpha", skin: "cedar", signal: 2 },
  "y3b7se": { product: "alpha", skin: "cedar", signal: 1 },
  "r8m2xd": { product: "beta", skin: "cedar", signal: 0 },
  "l5q9au": { product: "beta", skin: "ivory", signal: 0 },
  "c2x7pk": { product: "beta", skin: "orbit", signal: 0 },
  "w7j4bn": { product: "beta", skin: "cedar", signal: 2 },
  "t9f6ms": { product: "beta", skin: "cedar", signal: 1 },
};
