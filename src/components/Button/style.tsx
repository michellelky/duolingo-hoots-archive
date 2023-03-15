import styled from "styled-components";

export const ButtonContainer = styled.button`
  cursor: pointer;
  background-color: var(--button-bg);
  border: 0;
  border-bottom: 4px solid var(--button-border);
  border-radius: 16px;
  width: 200px;
  min-width: 150px;
  padding: 1px 6px;

  @media (max-width: 699px) {
    width: 100%;
  }

  :hover {
    background-color: var(--button-bg-hover);
  }
  :disabled {
    cursor: not-allowed;
    background-color: var(--button-bg-disabled);
    border-bottom: 4px solid var(--button-border-disabled);
  }
`;

export const ButtonLabel = styled.p`
  color: var(--button-text);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 44px;
  position: relative;
  text-transform: uppercase;
  vertical-align: top;
  white-space: pre;
`;

export const SecondaryButtonContainer = styled(ButtonContainer)`
  background-color: var(--bg-primary);
  border: 2px solid var(--border);
  border-bottom: 4px solid var(--border);

  :hover {
    background-color: var(--border);
  }
`;

export const SecondaryButtonLabel = styled(ButtonLabel)`
  color: var(--button-secondary-text);
`;
