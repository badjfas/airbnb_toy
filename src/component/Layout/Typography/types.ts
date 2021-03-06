export interface TypographyComponentProps extends TypographyProps {}

export interface TypographyProps {
  component?: "p" | "span";
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    // | "h5"
    // | "h6"
    // | "subtitle1"
    // | "subtitle2"
    | "body1"
    | "body2"
    | "caption";
  // | "button"
  // | "overline"
  // | "srOnly"
  // | "inherit";

  fontWeight?: number;
}
