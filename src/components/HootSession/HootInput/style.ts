import styled from "styled-components";

export const TextArea = styled.textarea`
  font-size: 18px;
  line-height: 1.5;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  border: 2px solid var(--border);
  border-radius: 12px;
  background-color: var(--text-bg-primary);
  padding: 18px 12px 40px;
  width: 100%;
  resize: none;
  min-height: 140px;
  margin-top: 18px;

  :focus {
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const TextCount = styled.p<{ valid?: boolean }>`
  color: ${({ valid }) => (valid ? "gray" : "lightgray")};
  position: absolute;
  bottom: 24px;
  right: 24px;
`;

export const TextHint = styled.p`
  color: gray;
  display: flex;
  align-self: flex-end;
`;
