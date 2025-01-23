import { useRef } from "react";
import styled from "styled-components";

import { StyledCommonButton } from "../../../styles/button";
import { StyledInput } from "../../../styles";

const AddNameField = ({ className, onAdd, isDisabled = false }) => {
  const nameRef = useRef();

  const handleAdd = () => {
    const name = nameRef?.current?.value?.trim();
    onAdd?.({ name });
    nameRef.current.value = "";
  };

  return (
    <div className={className}>
      <StyledInput
        ref={nameRef}
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
