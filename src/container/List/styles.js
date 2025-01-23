import styled from "styled-components";
import { CommonButton } from "../../component/CommonButton";
import { RemoveButton } from "../../component/RemoveButton";

export const ListWrap = styled.div`
  background-color: #edf2fb;
  width: 50%;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  width: 100%;
  background-color: #ced4da;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
`;

export const NameInput = styled.input`
  width: calc(100% - 8rem);
  height: 3rem;
  border-radius: 25px;
  border: 2px solid #bfc0c0;
  margin: 1rem;
  padding: 1rem;
`;

export const AddButton = styled(CommonButton)`
  min-width: 5rem;
  background-color: #abc4ff;
  border: 2px solid #cddafd;
  cursor: ${(props) =>
    props.name === "" || props.timerStatus ? "not-allowed" : "pointer"};

  &:hover {
    background-color: #93aeed;
  }
`;

export const PeopleWrap = styled.div`
  min-height: calc(100% - 9.5rem);
  height: calc(100vh - 9.5rem);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: scroll;

  @media only screen and (max-width: 900px) {
    height: fit-content;
  }
`;

export const EachPerson = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const Photo = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  display: inline-block;
  align-content: center;
  background-size: cover;
  background-position: center;
  background-image: url("/images/photo.png");
`;

export const Name = styled.div`
  max-width: 80%;
  line-height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NoOne = styled.div`
  text-align: center;
  line-height: 2rem;
`;

export const RemoveNameButton = styled(RemoveButton)`
  display: ${(props) => (props.timerStatus ? "none" : "inline-block")};
`;
