import React from "react";

import { LinkBox, LiElement, LinkText } from "./styles/styles";

const HomeLink = ({ link, text, img }) => (
  <>
    <LiElement>
      <LinkBox to={link}>
        <img src={img} alt="" />
        <LinkText>{text}</LinkText>
      </LinkBox>
    </LiElement>
  </>
);

export default HomeLink;
