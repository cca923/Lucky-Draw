import React from "react";

import { StyledEmpty } from "./styles";
import { StyledContainer } from "./styles";
import { StyledItem } from "./styles";
import { StyledCustomImage } from "../../../styles";
import { StyledRemoveButton } from "../../../styles/button";

import { StyledName } from "./styles";

const List = ({ className, list, canRemove = true, onRemove }) => {
  const handleRemove = ({ name }) => {
    onRemove({ name });
  };

  if (list?.length === 0) {
    return <StyledEmpty>No one is in the list!</StyledEmpty>;
  }

  return (
    <StyledContainer className={className}>
      {list?.map((data) => {
        return (
          <StyledItem key={data}>
            <StyledCustomImage
              src="/images/photo.png"
              width="1.5rem"
              mr="0.5rem"
            />
            <StyledName>{data}</StyledName>
            {canRemove && (
              <StyledRemoveButton
                onClick={() => handleRemove({ name: data })}
              />
            )}
          </StyledItem>
        );
      })}
    </StyledContainer>
  );
};

export default List;
