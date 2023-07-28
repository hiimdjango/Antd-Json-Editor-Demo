import "antd/dist/antd.variable.min.css";
import { ConfigProvider } from "antd";
import { PropsWithChildren } from "react";
import { ColorThemeProvider } from "./ColorThemeProvider";
import { ThemeColors } from "./Colors";

export const AppThemeProvider = ({
  children,
  colors,
}: PropsWithChildren<{ colors: ThemeColors }>) => {
  ConfigProvider.config({
    theme: {
      primaryColor: colors["primary-color"],
    },
  });

  return (
    <ConfigProvider>
      <ColorThemeProvider>{children}</ColorThemeProvider>
    </ConfigProvider>
  );
};
