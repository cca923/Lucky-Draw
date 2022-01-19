import styled from "styled-components";

export const DeleteButton = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  margin-left: auto;
  background-size: cover;
  background-position: center;
  background-image: url("/images/remove.png");
  cursor: pointer;

  &:hover {
    background-image: url("/images/remove-hover.png");
  }
`;

export const Button = styled.button`
  width: 5rem;
  height: 3rem;
  border-radius: 30px;

  &:hover {
    background-color: #93aeed;
  }
`;
