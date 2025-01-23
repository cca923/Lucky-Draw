import { useRef } from "react";
import styled from "styled-components";

import { StyledCommonButton } from "../../../styles/button";
import { StyledInput } from "../../../styles";

const AddNameField = ({ className, onAdd, isDisabled = false }) => {
  const inputRef = useRef();

  const handleAdd = () => {
    const name = inputRef?.current?.value?.trim();
    onAdd({ name });
    inputRef.current.value = "";
  };

  return (
    <div className={className}>
      <StyledInput
        ref={inputRef}
        type="text"
        placeholder="Enter a name"
        disabled={isDisabled}
      />
      <StyledCommonButton onClick={handleAdd} disabled={isDisabled} ml="0.5rem">
        Add
      </StyledCommonButton>
    </div>
  );
};

export default styled(AddNameField)`
  display: flex;
  align-items: center;
`;
