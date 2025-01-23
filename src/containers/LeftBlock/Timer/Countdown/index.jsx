import React from "react";
import styled from "styled-components";

const formatTime = (sec) => {
  const minutes = Math.floor(sec / 60);
  const secs = sec % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

const Countdown = ({ className, sec }) => {
  return <div className={className}>{formatTime(sec)}</div>;
};

export default styled(Countdown)`
  font-size: 5rem;
  text-align: center;
`;
