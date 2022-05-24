import React from 'react';
import styled from 'styled-components'


function Footer() {
  return (
    <FooterStyled>
      <div>
        <p>
          <strong>© NeighborGood</strong>
          <br />
            NeighborGood is a service webpage dedicated to finding "Good
            Neighbors" to help their neighbors
        </p>
      </div>
    </FooterStyled>
  );
}

export default Footer;

const FooterStyled= styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    p {
      text-align: center;
    }
`
