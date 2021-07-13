import React from "react";
import styled, { css } from "styled-components";
import { TypographyComponentProps, TypographyProps } from "./types";

const Span = styled.span<TypographyComponentProps>`
  letter-spacing: -0.1px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  ${(props) => {
    if (props.variant === "caption") {
      return css`
        font-size: 12px;
        line-height: 14px;
      `;
    }

    if (props.variant === "body2") {
      return css`
        font-size: 14px;
        line-height: 20px;
      `;
    }

    if (props.variant === "body1") {
      return css`
        font-size: 16px;
        line-height: 24px;
      `;
    }

    if (props.variant === "h1") {
      return css`
        font-size: 20px;
        line-height: 28px;
      `;
    }

    if (props.variant === "h2") {
      return css`
        font-size: 28px;
        line-height: 36px;
      `;
    }

    if (props.variant === "h3") {
      return css`
        font-size: 32px;
        line-height: 40px;
      `;
    }

    if (props.variant === "h4") {
      return css`
        font-size: 42px;
        line-height: 50px;
      `;
    }
  }}
`;

const P = styled.p<TypographyComponentProps>`
  letter-spacing: -0.1px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  ${(props) => {
    if (props.variant === "caption") {
      return css`
        font-size: 12px;
        line-height: 14px;
      `;
    }

    if (props.variant === "body2") {
      return css`
        font-size: 14px;
        line-height: 20px;
      `;
    }

    if (props.variant === "body1") {
      return css`
        font-size: 16px;
        line-height: 24px;
      `;
    }

    if (props.variant === "h1") {
      return css`
        font-size: 20px;
        line-height: 28px;
      `;
    }

    if (props.variant === "h2") {
      return css`
        font-size: 28px;
        line-height: 36px;
      `;
    }

    if (props.variant === "h3") {
      return css`
        font-size: 32px;
        line-height: 40px;
      `;
    }

    if (props.variant === "h4") {
      return css`
        font-size: 42px;
        line-height: 50px;
      `;
    }
  }}
`;

const Typography: React.FC<
  Pick<TypographyProps, "variant" | "component" | "fontWeight">
> = (props) =>
  props.component === "span" ? (
    <Span variant={props.variant} fontWeight={props.fontWeight}>
      {props.children}
    </Span>
  ) : (
    <P variant={props.variant}>{props.children}</P>
  );

export default Typography;
