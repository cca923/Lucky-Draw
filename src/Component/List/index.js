import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { addName, removeName } from "../../Redux/Action";
import { DeleteButton, Button } from "../Common/button";

const ListWrap = styled.div`
  background-color: #edf2fb;
  width: 50%;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Title = styled.div`
  width: 100%;
  background-color: #ced4da;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
`;

const NameInput = styled.input`
  width: calc(100% - 8rem);
  height: 3rem;
  border-radius: 25px;
  border: 2px solid #bfc0c0;
  margin: 1rem;
  padding: 1rem;
`;

const AddButton = styled(Button)`
  min-width: 5rem;
  background-color: #abc4ff;
  border: 2px solid #cddafd;

  &:hover {
    background-color: #93aeed;
  }
`;

const PeopleWrap = styled.div`
  height: calc(100vh - 9.5rem);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: scroll;

  @media only screen and (max-width: 900px) {
    height: fit-content;
  }
`;

const EachPerson = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Photo = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  display: inline-block;
  align-content: center;
  background-size: cover;
  background-position: center;
  background-image: url("/images/photo.png");
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const NoOne = styled.div`
  text-align: center;
  line-height: 2rem;
`;

const List = () => {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  console.log(list);

  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name !== "") {
      const nameExisted = list.filter((eachPerson) => {
        return eachPerson === name;
      });

      if (nameExisted.length === 0) {
        dispatch(addName(name));
        setName("");
      } else {
        window.alert("已經在抽獎名單中囉！");
      }
    } else {
      window.alert("請輸入姓名！");
    }
  };

  const handleRemove = (e) => {
    const removeTarget = e.target.parentElement.dataset.name;
    const confirm = window.confirm(`確定要移除 ${removeTarget}?`);
    if (confirm) {
      dispatch(removeName(removeTarget));
    }
  };

  return (
    <ListWrap>
      <Title>參與抽獎名單｜目前參加：{list.length} 人</Title>
      <NameInput
        value={name}
        type="text"
        placeholder="請輸入姓名"
        onChange={(e) => setName(e.target.value)}
      />
      <AddButton onClick={handleAdd}>新增</AddButton>

      <PeopleWrap>
        {list.length !== 0 ? (
          list.map((eachPerson) => {
            return (
              <EachPerson data-name={eachPerson} key={eachPerson}>
                <Photo />
                <Name>{eachPerson}</Name>
                <DeleteButton onClick={(e) => handleRemove(e)} />
              </EachPerson>
            );
          })
        ) : (
          <NoOne>目前沒有人參加抽獎喔！</NoOne>
        )}
      </PeopleWrap>
    </ListWrap>
  );
};

export default List;