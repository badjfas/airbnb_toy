import { CSSProperties } from "react";
import styled from "styled-components";

interface WrapperProps
  extends Pick<
    CSSProperties,
    | "justifyContent"
    | "alignItems"
    | "flexDirection"
    | "padding"
    | "margin"
    | "flexWrap"
  > {}

export default styled.div<WrapperProps>`
  display: flex;
  width: 100%;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.margin};
  margin: ${(props) => props.padding};
  flex-wrap: ${(props) => props.flexWrap ?? "wrap"};
`;
