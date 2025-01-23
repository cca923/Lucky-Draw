import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addName, removeName } from "../../store/action";
import { StyledContainer } from "./styles";
import { StyledBlock, StyledTitle } from "../../styles";
import { listSelector, actInfoSelector } from "../../store/selector";
import AddNameField from "./AddNameField";
import List from "./List";

const RightBlock = () => {
  const { list } = useSelector(listSelector);
  const { isCountdown } = useSelector(actInfoSelector);
  const dispatch = useDispatch();

  const handleAdd = ({ name }) => {
    if (name?.length === 0) {
      return window.alert("Please enter your name!");
    }
    const isExisted = list?.find((data) => data === name);
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
        <AddNameField onAdd={handleAdd} isDisabled={isCountdown} />
        <List list={list} canRemove={!isCountdown} onRemove={handleRemove} />
      </StyledBlock>
    </StyledContainer>
  );
};

export default RightBlock;
