import styled from "styled-components";
import Hero from "../../../Img/hero.png";

export const Masthead = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 43%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${Hero}) no-repeat center center scroll;
`;

export const HeroText = styled.h1`
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 30px;
`;

export const UList = styled.ul`
  list-style-type: none;
  &:after {
    content: "";
    width: 100%;
    display: inline-block;
  }
`;

export const Something = styled.div``;
