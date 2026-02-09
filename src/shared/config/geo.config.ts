export type Geo = "en" | "de";

export const GEO_DEFAULT: Geo = "en";

export const GEOS: { value: Geo; label: string; icon: string }[] = [
  {
    value: "en",
    label: "England",
    icon: "🇬🇧",
  },
  {
    value: "de",
    label: "Deutschland",
    icon: "🇩🇪",
  },
];
