import { tokens } from "@/theme/theme";

export const getTailwindConfig = (mode) => {
  const colors = tokens(mode);

  return {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: colors.primary,
          secondary: colors.secondary,
          background: colors.background,
          surface: colors.surface,
          textPrimary: colors.textPrimary,
          textSecondary: colors.textSecondary,
          orangeAccent: colors.orangeAccent,
          yellowAccent: colors.yellowAccent,
          redAccent: colors.redAccent,
          blueAccent: colors.blueAccent,
          gradient: colors.gradient,
        },
      },
    },
    plugins: [],
  };
};