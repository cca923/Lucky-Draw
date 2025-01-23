import styled from "styled-components";
import { StyledRemoveButton } from "../../../styles/button";

export const StyledContainer = styled.div`
  flex: 1;
  height: 100%;
  min-height: 15rem;
  display: flex;
  padding: 2rem 1rem;

  @media only screen and (max-width: 900px) {
    height: 15rem;
  }
`;

export const WinnerImageWrap = styled.div`
  width: 50%;
  border-radius: 20px 0 0 20px;
  background-image: url(/images/winner.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const WinnerWrap = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 0 20px 20px 0;
  background-color: #efefef;
  display: flex;
  position: relative;
`;

export const WinnerName = styled.div`
  max-width: 80%;
  font-size: 3rem;
  font-weight: 600;
  line-height: 5rem;
  margin: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Loading = styled.div`
  width: 100%;
  object-fit: cover;
  border-radius: 20px 0 0 20px;
  background-image: url(/images/loading.gif);
  background-repeat: no-repeat;
  background-size: 180%;
  background-position: center;
`;

export const ClearResultButton = styled(StyledRemoveButton)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`;
