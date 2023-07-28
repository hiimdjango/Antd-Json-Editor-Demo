import styled from "styled-components";
import { colors } from "./Colors";

export const ColorThemeProvider = styled.div`
  --primary-color: ${colors["primary-color"]};
  --primary-color-lighter-1: ${colors["primary-color-lighter-1"]};
  --primary-color-lighter-2: ${colors["primary-color-lighter-2"]};
  --primary-color-lighter-3: ${colors["primary-color-lighter-3"]};
  --primary-color-darker-1: ${colors["primary-color-darker-1"]};
  --primary-color-darker-2: ${colors["primary-color-darker-2"]};
  --primary-color-darker-3: ${colors["primary-color-darker-3"]};
`;
