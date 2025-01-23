import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addName, removeName } from "../../Redux/Action";
import {
  AddButton,
  EachPerson,
  ListWrap,
  Name,
  NameInput,
  NoOne,
  PeopleWrap,
  Photo,
  RemoveNameButton,
  Title,
} from "./styles";

const List = () => {
  const list = useSelector((state) => state.list);
  const timerStatus = useSelector((state) => state.timerStatus);
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleAdd = () => {
    const nameExisted = list.filter((eachPerson) => {
      return eachPerson === name;
    });

    if (nameExisted.length === 0) {
      dispatch(addName(name));
      setName("");
    } else {
      window.alert("已經在抽獎名單中囉！");
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
        disabled={timerStatus ? true : false}
      />
      <AddButton
        name={name}
        timerStatus={timerStatus}
        onClick={handleAdd}
        disabled={name === "" || timerStatus ? true : false}
      >
        新增
      </AddButton>

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
    </ListWrap>
  );
};

export default List;
