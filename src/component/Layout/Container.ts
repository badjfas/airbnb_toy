import styled from "styled-components";

interface ContainerProps {
  fullWidth?: boolean;
  maxSize: "xs" | "sm" | "md" | "lg" | "xl";
  padding?: number;
}

export default styled.div<ContainerProps>`
  width: ${(props) => {
    if (props.fullWidth) {
      return "100%";
    } else if (props.maxSize === "xl") {
      return "100%";
    } else {
      return undefined;
    }
  }};
  padding: ${(props) =>
    props.padding ? `0px ${props.padding}px` : "0px 16px"};
  margin: 0px auto;
  max-width: ${(props) => {
    if (props.maxSize === "xs") {
      return "600px";
    }

    if (props.maxSize === "sm") {
      return "960px";
    }

    if (props.maxSize === "md") {
      return "1280px";
    }

    if (props.maxSize === "lg") {
      return "1920px";
    }

    if ((props.maxSize = "xl")) {
      return "100%";
    }
  }};
`;
