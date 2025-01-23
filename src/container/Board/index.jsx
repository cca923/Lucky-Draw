import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addName, removeName } from "../../redux/action";
import { StyledContainer } from "./styles";
import { StyledBlock, StyledTitle } from "../../styles";
import { listSelector, timerStatusSelector } from "../../redux/selector";
import AddNameField from "./AddNameField";
import List from "./List";

const Board = () => {
  const list = useSelector(listSelector);
  const timerStatus = useSelector(timerStatusSelector);
  const dispatch = useDispatch();

  const handleAdd = ({ name }) => {
    if (name?.length === 0) {
      return window.alert("Please enter your name!");
    }
    const isExisted = list?.find((item) => item === name);
    if (isExisted) {
      return window.alert("The name is already on the list!");
    }
    return dispatch(addName({ name }));
  };

  const handleRemove = ({ name }) => {
    const confirm = window.confirm(`Are you sure you want to remove ${name}?`);
    if (confirm) {
      dispatch(removeName({ name }));
    }
  };

  return (
    <StyledContainer>
      <StyledTitle>Current Participants: {list?.length}</StyledTitle>
      <StyledBlock>
        <AddNameField onAdd={handleAdd} isDisabled={timerStatus} />
        <List list={list} canRemove={!timerStatus} onRemove={handleRemove} />
      </StyledBlock>
    </StyledContainer>
  );
};

export default Board;
