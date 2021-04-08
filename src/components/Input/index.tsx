import {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { useField } from '@unform/core';
import { Container } from './styles';


export interface InputProps {
  placeholder: string;
  name: string;
}

export function Input({name,placeholder}:InputProps) {
  const inputRef =useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);


  return(
    <Container isFilled={isFilled} isFocused={isFocused}>
    <input
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      defaultValue={defaultValue}
      ref={inputRef}
      placeholder={placeholder}
    />
  </Container>
  )
}