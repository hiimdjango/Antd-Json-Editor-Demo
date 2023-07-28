import { purple } from "@ant-design/colors";

export interface ThemeColors {
  "primary-color": string;
  "primary-color-lighter-1": string;
  "primary-color-lighter-2": string;
  "primary-color-lighter-3": string;
  "primary-color-darker-1": string;
  "primary-color-darker-2": string;
  "primary-color-darker-3": string;
}

export const colors: ThemeColors = {
  "primary-color": purple[6],
  "primary-color-lighter-1": purple[5],
  "primary-color-lighter-2": purple[4],
  "primary-color-lighter-3": purple[3],
  "primary-color-darker-1": purple[7],
  "primary-color-darker-2": purple[8],
  "primary-color-darker-3": purple[9],
};
