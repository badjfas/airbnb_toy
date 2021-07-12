import React from "react";
import AppPresenter from "./AppPresenter";
import GlobalStyles from "./GlobalStyles";

export default () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <AppPresenter />
    </React.Fragment>
  );
};
