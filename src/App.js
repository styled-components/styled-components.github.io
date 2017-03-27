import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from './constants';

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 5em);
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.primary};
  font-family: "Avenir Next", sans-serif;
  padding-top: 5em;
`;

const imageMargin = '1';

const Image = styled.img`
  width: calc(100% - ${imageMargin * 2}em);
  max-width: 600px;
  margin-bottom: 4em;
  border-radius: 2px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
  margin-left: ${imageMargin}em;
  margin-right: ${imageMargin}em;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 125px;
`;

const Tagline = styled.h1`
  max-width: 90%;
  text-align: center;
  font-size: 1.15em;
  line-height: 1.5em;
  font-weight: 400;
  margin: 2em 0;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Link = styled.a`
  color: ${colors.primary};
  ${(props) => props.bold && 'font-weight: bold;'}
`;

const Button = styled(Link)`
  border: 2px solid ${colors.primary};
  border-radius: 3px;
  padding: 0.5em 2em;
  text-decoration: none;
  font-size: 1em;
  margin: 0 1em;

  ${(props) => props.primary && 'background: palevioletred'};
  color: ${(props) => props.primary ? 'white' : 'palevioletred'};
`;

const Footer = styled.p`
  margin-top: auto;
  padding-top: 5em;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Logo src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" alt="styled-components" />
        <Tagline><Bold>Visual primitives for the component age.</Bold><br />Use the best bits of ES6 and CSS to style your apps without stress 💅</Tagline>
        <Image src={`${process.env.PUBLIC_URL}/code-atom.png`} alt="Code sample of styled-components" />
        <div>
          <Button href="https://github.com/styled-components/styled-components" target="_blank" primary>GitHub</Button>
          <Button href="https://www.webpackbin.com/bins/-KeeZCr0xKfutOfOujxN" target="_blank">Try it out!</Button>
        </div>
        <Footer>
          Made by <Link href="https://twitter.com/glenmaddern" bold target="_blank">@glenmaddern</Link> and <Link href="https://twitter.com/mxstbr" bold target="_blank">@mxstbr</Link>
        </Footer>
      </Wrapper>
    );
  }
}

export default App;
