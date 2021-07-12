import React from "react";
import Image from "../../component/Header/CAPA.png";
import Container from "../../component/Layout/Container";
import Wrapper from "../../component/Layout/Wrapper";
export default () => {
  return (
    <Container maxSize="xs" padding={12}>
      <Wrapper justifyContent="center">
        <img src={Image} />
        <p className="body2">1234</p>
      </Wrapper>
    </Container>
  );
};
