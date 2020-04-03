import styled from "styled-components";
import { Link } from "react-router-dom";

export const LiElement = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  text-align: center;
  padding: 1rem;
  border-radius: 20px;
  border: 2px solid goldenrod;
  cursor: pointer;
  width: max-content;
  max-width: 26rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const LinkText = styled.p``;

export const LinkBox = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 300;
`;
