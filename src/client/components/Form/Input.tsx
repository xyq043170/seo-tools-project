import { type InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import colors from 'client/styles/colors';
import { type InputSize, applySize } from 'client/styles/dimensions';

type Orientation = 'horizontal' | 'vertical';

interface Props {
  id: string;
  value: string;
  name?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: InputSize;
  orientation?: Orientation;
  handleChange: (nweVal: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (keyEvent: React.KeyboardEvent<HTMLInputElement>) => void;
}

type SupportedElements = HTMLInputElement | HTMLLabelElement | HTMLDivElement;
interface StyledInputTypes extends InputHTMLAttributes<SupportedElements> {
  inputSize?: InputSize;
  orientation?: Orientation;
}

const InputContainer = styled.div<StyledInputTypes>`
  display: flex;
  ${(props) => (props.orientation === 'vertical' ? 'flex-direction: column;' : '')};
`;

const StyledInput = styled.input<StyledInputTypes>`
  background: color-mix(in srgb, ${colors.background} 82%, transparent);
  color: ${colors.textColor};
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  font-family: var(--font-sans);
  box-shadow: 0 1px 2px ${colors.bgShadowColor};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primaryTransparent};
  }

  ${(props) => applySize(props.inputSize)};
`;

const StyledLabel = styled.label<StyledInputTypes>`
  color: ${colors.textColor};
  ${(props) => applySize(props.inputSize)};
  padding: 0;
  font-size: 1rem;
  font-weight: 600;
`;

const Input = (inputProps: Props): JSX.Element => {
  const {
    id,
    value,
    label,
    placeholder,
    name,
    disabled,
    size,
    orientation,
    handleChange,
    handleKeyDown,
  } = inputProps;

  return (
    <InputContainer orientation={orientation}>
      {label && (
        <StyledLabel htmlFor={id} inputSize={size}>
          {label}
        </StyledLabel>
      )}
      <StyledInput
        id={id}
        value={value}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        onChange={handleChange}
        inputSize={size}
        onKeyDown={handleKeyDown || (() => {})}
      />
    </InputContainer>
  );
};

export default Input;
