import localFont from "next/font/local";

export const cereal = localFont({
  src: [
    {
      path: "./cereal-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./cereal.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./cereal-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./cereal-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./cereal-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./cereal-black.otf",
      weight: "800",
      style: "normal",
    },
  ],
});
