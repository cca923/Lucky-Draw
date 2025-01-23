import styled from "styled-components";
import { CommonButton } from "../../../component/CommonButton";

export const SettingWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const SetTimerWrap = styled.div`
  display: flex;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  width: 100%;
`;

export const EachInput = styled.div`
  display: flex;
`;

export const TimeInput = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 25px;
  border: 2px solid #bfc0c0;
  margin: 0.3rem 0;
  padding: 1rem;
`;

export const InputUnit = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
`;

export const ButtonWrap = styled.div`
  display: flex;
`;

export const SettingButton = styled(CommonButton)`
  margin: auto 1rem;
  background-color: #abc4ff;
  border: 2px solid #cddafd;
  cursor: ${(props) => (props.timerStatus ? "not-allowed" : "pointer")};
`;

export const ResetButton = styled(CommonButton)`
  margin: auto;
  border: 2px solid #e9e9e9;
  cursor: ${(props) => (props.timerStatus ? "not-allowed" : "pointer")};

  &:hover {
    background-color: #ced4da;
  }
`;

export const ErrorWrap = styled.div`
  text-align: center;
  color: red;
  margin-top: 0.5rem;
`;
