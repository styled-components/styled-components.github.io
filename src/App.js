import React, { Component } from 'react';
import styled from 'styled-components';

import logo from './logo.png';
import code from './code-atom.png';
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

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 2em;
`;

const Logo = styled(Image)`
  max-width: 125px;
  margin-bottom: 0;
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

  background: ${(props) => props.primary && 'palevioletred'};
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
        <Logo src={logo} alt="styled-components" />
        <Tagline><Bold>Visual primitives for the component age.</Bold><br />Use the best bits of ES6 and CSS to style your apps without stress 💅</Tagline>
        <Image src={code} alt="Code sample of styled-components" />
        <div>
          <Button href="https://github.com/styled-components/styled-components" target="_blank" primary>Github</Button>
          <Button href="http://www.webpackbin.com/V1VNoINA-" target="_blank">Try it out!</Button>
        </div>
        <Footer>
          Made by <Link href="https://twitter.com/glenmaddern" bold target="_blank">@glenmaddern</Link> and <Link href="https://twitter.com/mxstbr" bold target="_blank">@mxstbr</Link>
        </Footer>
      </Wrapper>
    );
  }
}

export default App;
