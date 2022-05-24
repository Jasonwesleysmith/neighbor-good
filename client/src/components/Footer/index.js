import React from 'react';
import styled from 'styled-components'


function Footer() {
  return (
    <FooterStyled>
      <div>
        <p>
          <strong>© NeighborGood</strong>
            NeighborGood is a service webpage dedicated to finding "Good
            Neighbors" to help their neighbors
        </p>
      </div>
    </FooterStyled>
  );
}

export default Footer;

const FooterStyled= styled.footer`
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 2rem;
    p {
      text-align: center;
    }
`
