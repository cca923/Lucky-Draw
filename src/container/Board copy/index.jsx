import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addName, removeName } from "../../store/action";
import {
  EachPerson,
  StyledContainer,
  Name,
  NoOne,
  PeopleWrap,
  Photo,
  RemoveNameButton,
} from "./styles";
import { StyledTitle } from "../../styles";
import AddNameField from "./AddNameField";
import { listSelector, timerStatusSelector } from "../../store/selector";

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

  const handleRemove = (e) => {
    const removeTarget = e.target.parentElement.dataset.name;
    const confirm = window.confirm(`確定要移除 ${removeTarget}?`);
    if (confirm) {
      dispatch(removeName(removeTarget));
    }
  };

  return (
    <StyledContainer>
      <StyledTitle>參與抽獎名單｜目前參加：{list?.length} 人</StyledTitle>
      <AddNameField onClick={handleAdd} isDisabled={timerStatus} />

      <PeopleWrap>
        {list.length !== 0 ? (
          list.map((eachPerson) => {
            return (
              <EachPerson data-name={eachPerson} key={eachPerson}>
                <Photo />
                <Name>{eachPerson}</Name>
                <RemoveNameButton
                  timerStatus={timerStatus}
                  onClick={(e) => handleRemove(e)}
                />
              </EachPerson>
            );
          })
        ) : (
          <NoOne>目前沒有人參加抽獎喔！</NoOne>
        )}
      </PeopleWrap>
    </StyledContainer>
  );
};

export default Board;
