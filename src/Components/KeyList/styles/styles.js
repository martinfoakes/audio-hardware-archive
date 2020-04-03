import styled from "styled-components";

export const ListParent = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 90vw;
`;

export const ListElement = styled.li`
  display: inherit;
  flex-direction: column;
  text-align: center;
  border: 2px solid #fff;
  height: 3.8rem;
  width: 100%;
  max-width: 5rem;
  border-radius: 15px;
  margin: 0 1rem;
  background-color: #37474f;
`;

export const KeyChar = styled.kbd`
  font-size: 1.4em;
  margin-top: 0.4rem;
`;

export const KeyText = styled.span`
  margin-top: 0.2rem;
`;
