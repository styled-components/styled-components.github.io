import React, { Component } from 'react';
import styled from 'styled-components';

import logo from './logo.png';
import { colors } from './constants';

const Wrapper = styled.div`
  width: 100%;
  min-height: 75vh;
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.primary};
  font-family: "Avenir Next", sans-serif;
  padding-top: 25vh;
`;

const Logo = styled.img`
  max-width: 100px;
`;

const Tagline = styled.h1`
  max-width: 90%;
  text-align: center;
  font-size: 1.15em;
  line-height: 1.5em;
  font-weight: 400;
  margin: 2em 0;

  &:first-line {
    font-weight: bold;
  }
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
`;

const Code = styled.code`
  font-family: monaco, Consolas, "Lucida Console", monospace;
`;

const Footer = styled.p`
  margin-top: auto;
  padding-top: 3em;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Logo src={logo} alt="styled-components" />
        <Tagline>Visual primitives for the component age.<br />Use the best bits of ES6 and CSS to style your apps without stress 💅</Tagline>
        <Button href="https://github.com/styled-components/styled-components" target="_blank">Github</Button>
        <Footer>
          Made by <Link href="https://twitter.com/glenmaddern" bold target="_blank">@glenmaddern</Link> and <Link href="https://twitter.com/mxstbr" bold target="_blank">@mxstbr</Link>
        </Footer>
      </Wrapper>
    );
  }
}

export default App;
