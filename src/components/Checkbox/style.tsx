import styled from "styled-components";

export const Label = styled.label<{ disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--border);
  border-radius: 12px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: 10px 16px;
`;

export const Input = styled.input`
  /* removing default appearance */
  appearance: none;

  border-radius: 5px;
  border: 2px solid var(--button-border-disabled);
  background-color: var(--bg-primary);
  height: 20px;
  width: 20px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  :checked {
    border-color: var(--button-border);
    position: relative;
  }
  :checked:before {
    position: absolute;
    left: 20%;
    top: 25%;
    content: "";
    border-bottom: 3px solid var(--button-border);
    border-left: 3px solid var(--button-border);
    height: 40%;
    width: 65%;
    transform: rotate(-45deg);
  } 

  :disabled {
    border-color: var(--button-border-disabled);
    background-color: var(--button-bg-disabled);
    cursor: not-allowed;
  }
`;

export const Text = styled.div`
  color: var(--text-primary);
  margin-left: 0.5rem;
`;
