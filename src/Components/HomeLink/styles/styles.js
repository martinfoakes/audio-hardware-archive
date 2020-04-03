import styled from "styled-components";
import { Link } from "react-router-dom";

export const LiElement = styled.li`
  display: inline-block;
  background-color: #fff;
  text-align: center;
  padding: 1rem;
  border-radius: 20px;
  border: 2px solid goldenrod;
  cursor: pointer;
  width: 100%;
  max-width: 26rem;
  transition: all 0.2s ease;
  margin: 0 1rem;
  max-height: 18rem;
  height: 18rem;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const LinkText = styled.p`
  margin: 1rem auto 0;
`;

export const LinkBox = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 300;
  font-size: 1.4em;

  > img {
    max-height: 12rem;
    width: 100%;
  }
`;
