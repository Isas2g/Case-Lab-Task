import React from "react";
import styled from "styled-components";

// не работает цвет у футера
const FooterStyle = styled.footer`
  background-color: #4d4d4d;
`
export const Footer = () => {
  return (
    <FooterStyle className="footer mt-auto py-3 bg-light">
    </FooterStyle>
  )
}