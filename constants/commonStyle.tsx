import styled from "@emotion/styled";

export enum colors {
  primary = "#BF9D7D",
  primary_light = "#F7F2EE",
  white = "#FFFFFF",
  black = "#000000",
}

export const BackGroundWrapper = styled.div<{ type?: "light" | "dark" }>`
  height: 100vh;
  width: 100vw;
  background-color: ${({ type = "light" }) =>
    type === "light" ? colors.primary_light : colors.black};
`;
