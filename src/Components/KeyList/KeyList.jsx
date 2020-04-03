/* eslint-disable react/no-array-index-key */
import React from "react";

import { ListParent, ListElement, KeyChar, KeyText } from "./styles/styles";

const KeyList = (labelList) => {
  const ListObj = [
    { key: "A", name: labelList[0] || "null" },
    { key: "S", name: labelList[1] || "null" },
    { key: "D", name: labelList[2] || "null" },
    { key: "F", name: labelList[3] || "null" },
    { key: "G", name: labelList[4] || "null" },
    { key: "H", name: labelList[5] || "null" },
    { key: "J", name: labelList[6] || "null" },
    { key: "K", name: labelList[7] || "null" },
    { key: "L", name: labelList[8] || "null" },
    { key: ";", name: labelList[9] || "null" },
  ].map((item, idx) => (
    <ListElement id={`key-${item.key}`} key={idx}>
      <KeyChar>{item.key}</KeyChar>
      <KeyText>{item.name}</KeyText>
    </ListElement>
  ));

  return <ListParent>{ListObj}</ListParent>;
};

export default KeyList;
