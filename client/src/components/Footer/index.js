import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterStyled>
      <div>
        <div>
          <strong>© Copyright 2022 neighbor:good</strong>
        </div>
        <div>
          neighbor:good is a service web page dedicated to finding "Good
          Neighbors" to help their neighbors
        </div>
      </div>
    </FooterStyled>
  );
}

export default Footer;

const FooterStyled = styled.footer`
  font-size: 14px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: left;
  width: 100%;
  background-color: white;
  padding-left: 2rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;
